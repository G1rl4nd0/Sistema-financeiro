import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificacoesService {

  constructor(private toastr: ToastrService) {}

  success(mensagem: any, config?: Partial<IndividualConfig>) {
    this.toastr.success(mensagem, ('Bom trabalho!'), this.getConfig(config));
  }

  error(mensagem: any, config?: Partial<IndividualConfig>) {
    this.toastr.error(mensagem, ('Opss..!'), this.getConfig(config));
  }

  info(mensagem: any, config?: Partial<IndividualConfig>) {
    this.toastr.info(mensagem, ('Informação!'), this.getConfig(config));
  }

  warning(mensagem: any, config?: Partial<IndividualConfig>) {
    this.toastr.warning(mensagem, ('Alerta!'), this.getConfig(config));
  }

  private getConfig(config: Partial<IndividualConfig> | undefined) {
    return (
      config ?? {
        timeOut: 8000,
        enableHtml: true,
        closeButton: true,
        progressBar: true
      }
    );
  }
}
