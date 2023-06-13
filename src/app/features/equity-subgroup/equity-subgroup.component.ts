import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { EquitySubgroupService } from './services/equity-subgroup.service';
import { EquitySubgroupResponseInterface } from './interfaces/equity-subgroup-response';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';
import { MxmRequestInterface } from '../../shared/interfaces/mxm-payload.interface';
import { EquitySubgroupRequestInterface } from './interfaces/equity-subgroup-request';

const EquitySubGroupComponentBase = subscriptable(class {});

@Component({
  selector: 'app-equity-subgroup',
  templateUrl: './equity-subgroup.component.html',
  styleUrls: ['./equity-subgroup.component.scss']
})
export class EquitySubGroupComponent extends EquitySubGroupComponentBase implements OnInit {

  dataList: EquitySubgroupResponseInterface[] = [];
  dataId?: string;
  searchInput = "";
  formVisible = false;
  modalInfoVisible = false;

  constructor(
    private readonly service: EquitySubgroupService,
    private route: ActivatedRoute,
    private router: Router
  ) { super(); }

  ngOnInit(): void {
    const subscription = this.service.notifyier
      .subscribe(_ => this.get());
    this.addSubscription(subscription);

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dataId = params.get('code')!;
    });

    this.setRouteState();
  }

  get() {
    const payload: MxmRequestInterface<EquitySubgroupRequestInterface> = {
      AutheticationToken: {
        Username: "INTEGRACAO",
        Password: "123Mxm123@",
        EnvironmentName: "MXMSAU02HOM"
      },
      Data: {
        Codigo: "",
        Descricao: "",
        CodigoGrupoPatrimonial: ""
      }
    }

    const subscription = this.service.get(payload)
      .subscribe(p => console.log(p));
    this.addSubscription(subscription);
  }

  openModalInfo(id: string): void {
    this.dataId = id;
    this.setModalInfoVisible(true);
  }

  setFormVisible(state: boolean) {
    this.formVisible = state;
  }

  setModalInfoVisible(status: boolean) {
    this.modalInfoVisible = status;

    if (!status) this.dataId = undefined;
  }

  setRouteState() {
    const route = this.router.url.split('/').at(-1);

    if (route === "add") this.formVisible = true;
  }
}
