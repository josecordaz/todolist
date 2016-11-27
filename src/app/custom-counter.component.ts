import { Component, Input, forwardRef, Output } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


 /* <input 
    type="checkbox" 
    value="1"
    id="{{identifier || 'styled-checkbox'}}"
    class="styled"
    [checked]="checked"
    (change)="checked=$event.target.checked"
    />
  <label 
    tabindex=0
    (keydown)="onKeyDown($event)"
    htmlFor="{{identifier || 'styled-checkbox'}}">
    <span></span>
    <ng-content></ng-content>
  </label>*/

@Component({
    selector: 'styled-checkbox',
    template: `

        <style>
            label {
                font-weight: 600;
                font-size: 11px;
                margin-bottom: 0px;
            }

            input.styled[type="checkbox"] {
                display:none;
            }

            input.styled[type="checkbox"] + label span {
                display:inline-block;
                width:28px;
                height:28px; 
                margin:-1px 4px 0 0;
                vertical-align:middle;
                background:url('./img/checkbox_unchecked.png') left top no-repeat;
                cursor:pointer;
                background-size: cover;
            }

            input.styled[type="checkbox"]:checked + label span {
                background:url('./img/checkbox_checked.png') left top no-repeat;
                background-size: cover;
            }

            .tmpOn {
                background:url('./img/checkbox_checked.png') left top no-repeat;
                background-size: cover;
                font-weight: 600;
                font-size: 11px;
                margin-bottom: 0px;
                margin:-1px 4px 0 0;
                vertical-align:middle;
                display:inline-block;
                width:28px;
                height:28px;
                cursor:pointer;
                background-size: cover;
            }

            .tmpOff {
                background:url('./img/checkbox_unchecked.png') left top no-repeat;
                background-size: cover;
                font-weight: 600;
                font-size: 11px;
                margin-bottom: 0px;
                margin:-1px 4px 0 0;
                vertical-align:middle;
                display:inline-block;
                width:28px;
                height:28px;
                cursor:pointer;
                background-size: cover;
            }

            .disabled {
                text-decoration: none;
            }

            .disabled:hover {
                cursor : default;
            }
        </style>

         <span 
            [ngClass] = "
                {
                    'disabled':disabled
                }"
        >

        <span 
            [ngClass] = "
                {
                    'tmpOn':isChecked,
                    'tmpOff':!isChecked
                }" 
            (click) = 'changeValue()'
        ></span>
            {{text}}
        </span>

    `,
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting : forwardRef(() => CounterInputComponent),
            multi : true
        }
    ]
})
export class CounterInputComponent implements ControlValueAccessor{

    isChecked = false;

    @Input() text:string;

    @Input() disabled: boolean;

    propagateChange = (_: any) => {};

    writeValue(value: any){
        if(value !== undefined) {
            this.isChecked = value;
        }
    }

    registerOnChange(fn){
        this.propagateChange = fn;
    }

    registerOnTouched(){}

    changeValue(){
        if(!this.disabled){
            this.isChecked = !this.isChecked;
            this.propagateChange(this.isChecked);
        }
    }

}