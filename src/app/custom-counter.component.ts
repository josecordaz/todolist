import { Component, Input, forwardRef, Output } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'styled-checkbox',
    template: `
        <style>
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
                cursor:default;
                background-size: cover;
            }

            .textDisabled {
                text-decoration: none;
                color : lightgrey ;
                cursor:default;
            }
            
        </style>
        
            <span 
                [ngClass] = "
                    {
                        'tmpOn':isChecked && !disabled,
                        'tmpOff':!isChecked && !disabled,
                        'disabled':disabled
                    }" 
                (click) = 'changeValue()'
            ></span>
            <span [ngClass]="{'textDisabled':disabled}">
                <ng-content></ng-content>
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