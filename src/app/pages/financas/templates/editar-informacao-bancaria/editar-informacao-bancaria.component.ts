import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export type EditarInformacaoBancaria = {
  data: string;
  titulo: string;
  valor: number;
};

@Component({
  selector: 'editar-nova-informacao-bancaria',
  templateUrl: './editar-informacao-bancaria.component.html',
  styleUrls: ['./editar-informacao-bancaria.component.scss'],
})
export class EditarInformacaoBancariaComponent implements OnInit {
  @Output() public onClick = new EventEmitter<EditarInformacaoBancaria>();

  editarInformacaoBancaria!: FormGroup;

  constructor(private formBulder: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarCadastroForm();
  }

  inicializarCadastroForm() {
    this.editarInformacaoBancaria = this.formBulder.group({
      codigo: ['E7HEF8387F673TF367'],
      tipo: [''],
      titulo: [''],
      valor: [''],
    });
  }

  CadastrarInformacaoBancaria() {
    const form = this.editarInformacaoBancaria.value;
    const cadastrarForm: EditarInformacaoBancaria = {
      data: form.data,
      titulo: form.titulo,
      valor: form.valor,
    };
    this.onClick.emit(cadastrarForm);
  }
}
