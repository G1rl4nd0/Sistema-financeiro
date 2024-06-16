import { Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { InfButtonStylingModesEnum } from 'src/app/shared/types/enums/buttons/buttonStylingModes';
import { InfButtonTypesEnum } from 'src/app/shared/types/enums/buttons/buttonTypesEnum';

@Component({
  selector: 'button-padrao-component',
  templateUrl: './button-padrao.component.html',
  styleUrls: ['./button-padrao.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input()
  public height: number = 36;

  @Input()
  public text = '';

  @Input()
  public type: InfButtonTypesEnum = InfButtonTypesEnum.Default;

  @Input()
  public icon: string = "";

  @Input()
  public width: string = 'auto';

  @Input()
  public stylingMode: InfButtonStylingModesEnum = InfButtonStylingModesEnum.Contained;

  @Input()
  public visible: boolean = true;

  @Input()
  loadIndicatorVisible: boolean = false;

  @Output()
  public onClick: EventEmitter<void> = new EventEmitter();

  @Input()
  disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
