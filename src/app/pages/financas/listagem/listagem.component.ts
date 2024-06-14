import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {


  dataSource: any[] = [
    {
      Id: 1,
      Nome: 'Item 1',
      Icone: 'icone1.png',
      Ativo: true,
      CriadoPor: {
        Data: new Date(2024, 5, 12),
        Nome: 'João',
        Id: 101
      },
      ModificadoPor: {
        Data: new Date(2024, 5, 13),
        Nome: 'Maria',
        Id: 102
      }
    },
    {
      Id: 2,
      Nome: 'Item 1',
      Icone: 'icone1.png',
      Ativo: true,
      CriadoPor: {
        Data: new Date(2024, 5, 12),
        Nome: 'João',
        Id: 101
      },
      ModificadoPor: {
        Data: new Date(2024, 5, 13),
        Nome: 'Maria',
        Id: 102
      }
    },
    {
      Id: 3,
      Nome: 'Item 1',
      Icone: 'icone1.png',
      Ativo: true,
      CriadoPor: {
        Data: new Date(2024, 5, 12),
        Nome: 'João',
        Id: 101
      },
      ModificadoPor: {
        Data: new Date(2024, 5, 13),
        Nome: 'Maria',
        Id: 102
      }
    },
    {
      Id: 4,
      Nome: 'Item 1',
      Icone: 'icone1.png',
      Ativo: true,
      CriadoPor: {
        Data: new Date(2024, 5, 12),
        Nome: 'João',
        Id: 101
      },
      ModificadoPor: {
        Data: new Date(2024, 5, 13),
        Nome: 'Maria',
        Id: 102
      }
    },
    {
      Id: 5,
      Nome: 'Item 1',
      Icone: 'icone1.png',
      Ativo: true,
      CriadoPor: {
        Data: new Date(2024, 5, 12),
        Nome: 'João',
        Id: 101
      },
      ModificadoPor: {
        Data: new Date(2024, 5, 13),
        Nome: 'Maria',
        Id: 102
      }
    },
  ]

  isDarkMode = false

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
