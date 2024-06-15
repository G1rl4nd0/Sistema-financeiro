import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxAccordionModule, DxButtonModule } from 'devextreme-angular';
import { FiltrosComponent } from './filtros.component';

@NgModule({
  declarations: [FiltrosComponent],
  imports: [
    CommonModule,
    DxButtonModule,
    DxAccordionModule
  ],
  exports: [FiltrosComponent]
})
export class FiltrosModule {}
