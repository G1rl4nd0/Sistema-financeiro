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


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastrarInformacaoBancariaComponent,
    EditarInformacaoBancariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
