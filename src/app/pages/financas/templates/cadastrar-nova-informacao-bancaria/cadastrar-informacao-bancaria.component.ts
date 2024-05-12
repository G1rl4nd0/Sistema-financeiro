import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NotificacoesService } from 'src/app/shared/services/notificacoes/notificacoes.service';

export interface CadastrarInformacaoBancaria {
  Titulo: string;
  Valor: number;
}

@Component({
  selector: 'cadastrar-nova-informacao-bancaria',
  templateUrl: './cadastrar-informacao-bancaria.component.html',
  styleUrls: ['./cadastrar-informacao-bancaria.component.scss'],
})
export class CadastrarInformacaoBancariaComponent implements OnInit {

  @Output() public onClick = new EventEmitter<CadastrarInformacaoBancaria>()

  cadastrarNovoBanco!: FormGroup;

  constructor(
    private formBulder: FormBuilder,
    private toaster: ToastrService,
    private notificacoesService: NotificacoesService
  ) {}

  ngOnInit(): void {
    this.inicializarCadastroForm()
  }

  inicializarCadastroForm() {
    this.cadastrarNovoBanco = this.formBulder.group({
      titulo: new FormControl('', [Validators.required]),
      tipo: ['', [Validators.maxLength(60), Validators.required]],
      valor: ['']
    });
  }

  CadastrarInformacaoBancaria() {
    const form = this.cadastrarNovoBanco.value;
    const cadastrarForm: CadastrarInformacaoBancaria = {
      Titulo: form.value,
      Valor: form.value
    }
    this.onClick.emit(cadastrarForm)
    // this.toaster.success('Mensagem de sucesso!', 'Sucesso');
    this.notificacoesService.success('Mensagem salva com sucesso')
  }

  DesistirCadastrarInformacao() {
    this.cadastrarNovoBanco.reset();
  }


}
