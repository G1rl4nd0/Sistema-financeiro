import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormService } from 'src/app/shared/services/form/form.service';
import { NotificacoesService } from 'src/app/shared/services/notificacoes/notificacoes.service';
import { confirm } from 'devextreme/ui/dialog';

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
    if (this.form.valid) {
      this.notificacoesService.success('Valor cadastrado com sucesso!')
    }
    console.log(this.form.value)

  }

  DesistirCadastrarInformacao() {
    const result: any = confirm(
      ('Tem certeza de que deseja desistir?'),
      ('Confirmação')
    );

    result.then((dialogResult: any) => {
      if (dialogResult) this.form.reset()
    })
  }
}
