import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export type CadastrarInformacaoBancaria = {
  data: string,
  titulo: string,
  valor: number
}


@Component({
  selector: 'editar-nova-informacao-bancaria',
  templateUrl: './editar-informacao-bancaria.component.html',
  styleUrls: ['./editar-informacao-bancaria.component.scss'],
})
export class EditarInformacaoBancariaComponent implements OnInit {

  @Output() public onClick = new EventEmitter<CadastrarInformacaoBancaria>()

  cadastrarNovoBancario!: FormGroup;

  constructor(
    private formBulder: FormBuilder,

  ) {}

  ngOnInit(): void {
    this.inicializarCadastroForm()
  }

  inicializarCadastroForm() {
    this.cadastrarNovoBancario = this.formBulder.group({
      data: [''],
      tipo: ['', Validators.required],
      titulo: [''],
      valor: ['']
    });
  }

  CadastrarInformacaoBancaria() {
    const form = this.cadastrarNovoBancario.value;
    const cadastrarForm: CadastrarInformacaoBancaria = {
      data: form.data,
      titulo: form.titulo,
      valor: form.valor
    }
    this.onClick.emit(cadastrarForm)

  }


}
