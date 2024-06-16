import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormService } from 'src/app/shared/services/form/form.service';
import { NotificacoesService } from 'src/app/shared/services/notificacoes/notificacoes.service';

export interface CadastrarInformacaoBancaria {
  Titulo: string;
  Valor: number;
}

type SituacaoOption = {
  text: string,
  value: boolean
}

@Component({
  selector: 'cadastrar-nova-informacao-bancaria',
  templateUrl: './cadastrar-informacao-bancaria.component.html',
  styleUrls: ['./cadastrar-informacao-bancaria.component.scss'],
})
export class CadastrarInformacaoBancariaComponent implements OnInit {

  @Output() public onClick = new EventEmitter<CadastrarInformacaoBancaria>()

  form!: FormGroup;
  public disabled: boolean = false;

  situacaoDataSource: SituacaoOption[] = [
    { text: 'Entrada', value: true },
    { text: 'Saída', value: false }
  ]

  constructor(
    public formService: FormService,
    private fb: FormBuilder,
    private toaster: ToastrService,
    private notificacoesService: NotificacoesService
  ) {}

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.form = this.fb.group({
      titulo: ['', [Validators.maxLength(60), Validators.required]],
      tipo: [this.situacaoDataSource[0], Validators.required],
      valor: ['' , [Validators.maxLength(5), Validators.required]]
    })
    console.log(this.form)
  }

  onSubmit() {

  }

  onInputChange() {
    this.form.markAsDirty
  }

  CadastrarInformacaoBancaria() {
    console.log(this.form.value)
    this.notificacoesService.success('Valor cadastrado com sucesso!')
  }

  DesistirCadastrarInformacao() {
    this.form.reset();
  }


}
