import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInformacaoBancariaComponent } from './editar-informacao-bancaria.component';

describe('ListagemComponent', () => {
  let component: CadastrarInformacaoBancariaComponent;
  let fixture: ComponentFixture<CadastrarInformacaoBancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarInformacaoBancariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarInformacaoBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
