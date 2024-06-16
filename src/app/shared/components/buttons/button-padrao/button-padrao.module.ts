import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxAccordionModule, DxButtonModule } from 'devextreme-angular';
import { ButtonComponent } from './button-padrao.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    DxButtonModule,
    DxAccordionModule
  ],
  exports: [ButtonComponent]
})
export class ButtonComponentModule {}
