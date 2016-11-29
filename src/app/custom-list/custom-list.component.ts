import { Component, Input } from '@angular/core';

import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.css']
})
export class CustomListComponent implements ControlValueAccessor {

  @Input() disabled: boolean;

  private items = [
    {
      href : "#",
      text : "Action"
    },
    {
      href : "#",
      text : "Another action"
    },
    {
      href : "#",
      text : "Something else here"
    },
    {},
    {
      href : "#",
      text : "Separated link"
    }
  ];

  writeValue(){

  }

  registerOnChange(){

  }

  registerOnTouched(){

  }

  setDisabledState(isDisabled: any): void {
    console.log('I am disabled');
    //this.renderer.setElementProperty(this.textInput.nativeElement, 'disabled', isDisabled);
  }
}