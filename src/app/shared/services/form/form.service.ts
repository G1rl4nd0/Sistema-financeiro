import { Injectable } from '@angular/core';
import { NotificacoesService } from '../notificacoes/notificacoes.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {

  constructor(private notificacoesService: NotificacoesService) {}

  isInvalid(form: FormGroup, campo: string): boolean {
    if (campo && form) {
      const control = form.get(campo);
      return !!control && control.invalid && control.touched;
    }
    return true;
  }
}
