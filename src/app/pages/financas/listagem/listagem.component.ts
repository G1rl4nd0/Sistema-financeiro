import { Component, Input, OnInit, Renderer2 } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  tipo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Alimentação',
    weight: 2024,
    tipo: 'entrada',
    symbol: '500,00',
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    tipo: 'entrada',
    symbol: 'He',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    tipo: 'entrada',
    symbol: 'Li',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    tipo: 'entrada',
    symbol: 'Be',
  },
  { position: 5, name: 'Boron', weight: 10.811, tipo: 'entrada', symbol: 'B' },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    tipo: 'entrada',
    symbol: 'C',
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    tipo: 'entrada',
    symbol: 'N',
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    tipo: 'entrada',
    symbol: 'O',
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    tipo: 'entrada',
    symbol: 'F',
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    tipo: 'entrada',
    symbol: 'Ne',
  },
];

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {

  isDarkMode = false

  displayedColumns: string[] = ['position', 'name', 'weight', 'tipo', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private renderer: Renderer2) {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.isDarkMode = theme === 'dark';
      this.updateTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  updateTheme() {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.renderer.removeClass(document.body, 'light-mode');
    } else {
      this.renderer.addClass(document.body, 'light-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }



  ngOnInit(): void {}
}
