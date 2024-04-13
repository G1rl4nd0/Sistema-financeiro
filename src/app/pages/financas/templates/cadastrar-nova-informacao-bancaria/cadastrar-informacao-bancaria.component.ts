import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export type CadastrarInformacaoBancaria = {
  Titulo: string,
  Valor: number
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

  ) {}

  ngOnInit(): void {
    this.inicializarCadastroForm()
  }

  inicializarCadastroForm() {
    this.cadastrarNovoBanco = this.formBulder.group({
      tipo: ['', Validators.required],
      titulo: [''],
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
    console.log(form)
  }
}
