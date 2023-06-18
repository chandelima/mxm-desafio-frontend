import { Component } from '@angular/core';
import { AuthenticationDataService } from 'src/app/template/sidebar/components/services/authentication-form.service';
import { MessageService } from 'primeng/api';
import { invalidAuthDataObjMsg } from 'src/app/shared/helpers';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';
import { IProcessingStatusRequest } from './interfaces/iprocessing-status-request';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { ProcessingStatusService } from './services/processing-status.service';
import { InterfacedoGrupoPatrimonial } from './interfaces/iprocessing-status-response';

const Subscriptable = subscriptable(class {});

@Component({
  selector: 'app-processing-status',
  templateUrl: './processing-status.component.html',
  styleUrls: ['./processing-status.component.scss']
})
export class ProcessingStatusComponent extends Subscriptable {
  processSequence?: string;
  dataList?: InterfacedoGrupoPatrimonial[];

  constructor(
    private readonly authDataService: AuthenticationDataService,
    private readonly processingStatusService: ProcessingStatusService,
    private readonly messageService: MessageService
  ) { super(); }

  get() {
    this.dataList = undefined;
    const authData = this.authDataService.getAuthData();

    if (!authData) {
      this.messageService.add(invalidAuthDataObjMsg)
      return;
    }

    const request: IMxmBaseRequest<IProcessingStatusRequest> = {
      AutheticationToken: { ...authData! },
      Data: { SequenciadoProcesso: this.processSequence! }
    }

    const subscription = this.processingStatusService.get(request)
      .subscribe(res => {
        this.dataList = res.Data.InterfacedoGrupoPatrimonial
      });

    this.addSubscription(subscription);
  }
}
