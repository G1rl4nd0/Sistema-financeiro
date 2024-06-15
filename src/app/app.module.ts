import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './pages/financas/listagem/listagem.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastrarInformacaoBancariaComponent } from './pages/financas/templates/cadastrar-nova-informacao-bancaria/cadastrar-informacao-bancaria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { EditarInformacaoBancariaComponent } from './pages/financas/templates/editar-informacao-bancaria/editar-informacao-bancaria.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxButtonModule, DxDataGridModule, DxDropDownButtonModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { DxiColumnModule } from 'devextreme-angular/ui/nested';
import { FiltrosModule } from './shared/components/filtros/filtros.module';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastrarInformacaoBancariaComponent,
    EditarInformacaoBancariaComponent
  ],
  imports: [
    FiltrosModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxiColumnModule,
    DxDropDownButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      timeOut: 8000,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
