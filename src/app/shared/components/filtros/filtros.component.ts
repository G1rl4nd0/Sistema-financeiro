import { Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'filtros-component',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {

  public selectedIndex: number = -1;

  @Input() public title: string = "Filtros";
  @Input() public icon: string = "inf-i-solid-filter";
  @Input() public expanded: boolean = false;
  @Input() public collapsible: boolean = true;
  @Input() public animationDuration: number = 300;
  @Input() public disabled: boolean = false;
  @Input() public visible: boolean = true;

  //btnAplicarFiltros
  @Input() public btnAplicarFiltrosLoadIndicatorVisible: boolean = false;
  @Input() public btnAplicarFiltrosText: string = "Aplicar filtros";
  @Input() public btnAplicarFiltrosIcon: string = "i-brands-sistrix";
  @Input() public btnAplicarFiltrosWidth: string = 'auto';
  @Input() public btnAplicarFiltrosHeight: number = 36;
  @Input() public btnAplicarFiltrosDisabled: boolean = false;
  @Input() public btnAplicarFiltrosVisible: boolean = true;

  @Output() public filtrarClick = new EventEmitter<void>();
  @Output() public limparClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    if (this.expanded) {
      this.selectedIndex = 0;
    }
  }

  btnAplicarFiltrosClick() {

  }

  btnLimparClick() {

  }



}
