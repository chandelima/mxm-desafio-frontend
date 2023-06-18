import { Injectable, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { AuthenticationDataService } from 'src/app/template/sidebar/components/services/authentication-form.service';
import { MessageService } from 'primeng/api';
import { invalidAuthDataObjMsg } from 'src/app/shared/helpers';
import { HttpBaseService } from '../../services/http-base-service';
import { subscriptable } from '../../mixims/subscriptable.mixim';
import { IAuthenticationToken } from '../../interfaces/iauthentication-token.interface';

const Subscriptable = subscriptable(class { });

@Injectable({
  providedIn: 'root'
})
export abstract class MainBaseComponent<TRequest, TResponse>
  extends Subscriptable implements OnInit {

  data?: TResponse;
  dataList?: TResponse[];
  paginatedList?: TResponse[];

  pagination = {
    actualPage: 0,
    first: 0,
    rows: 10,
    totalRecords: 0,
    rowsPerPageOptions: [10, 20, 30]
  };

  infoFormVisible = false;

  abstract filterForm: FormGroup;
  protected abstract dataService: HttpBaseService;

  private readonly authDataService!: AuthenticationDataService;
  private readonly messageService!: MessageService;
  protected readonly formBuilder!: FormBuilder;

  constructor(
    protected readonly injector: Injector,
  ) {
    super();
    if (!injector)
      throw new Error(`Injector must be injected at child class ${this.constructor.name}`);

    this.authDataService = injector.get(AuthenticationDataService);
    this.messageService = injector.get(MessageService);
    this.formBuilder = injector.get(FormBuilder);
  }

  abstract getRequestData(authData: IAuthenticationToken): IMxmBaseRequest<TRequest>;

  ngOnInit(): void {
    const heritageListSubscription = this.dataService.notifyier
      .subscribe(_ => this.get(false));
    const authDataSubscription = this.authDataService.notifyier
      .subscribe(_ => this.get(false));
    this.addSubscriptions([authDataSubscription, heritageListSubscription]);
  }

  get(emmitToast = true) {
    const authData = this.authDataService.getAuthData();

    if (!authData && emmitToast)
      this.messageService.add(invalidAuthDataObjMsg);
    if (!authData) return;

    const subscription = this.dataService
      .get(this.getRequestData(authData))
      .subscribe(res => {
        this.dataList = res.Data;
        this.setPagination();
      });

    this.addSubscription(subscription);
  }

  setInfoFormData(data: TResponse) {
    this.data = data;
    this.setInfoFormVisible(true);
  }

  setInfoFormVisible(state: boolean) {
    this.infoFormVisible = state;

    if (!state) this.data = undefined;
  }

  private setPagination(): void {
    this.pagination.totalRecords = this.dataList?.length!;
    this.paginatedList = this.dataList?.slice(
      this.pagination.first,
      this.pagination.first + this.pagination.rows
    );
  }

  onPageChange(event: any) {
    this.pagination.actualPage = event.page;
    this.pagination.first = event.first;
    this.pagination.rows = event.rows;

    this.paginatedList = this.dataList?.slice(
      this.pagination.first,
      this.pagination.first + this.pagination.rows
    );
  }
}
