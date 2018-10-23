import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'form-errors-wrapper',
    template: `
    <div class="form-group">
        <ng-content></ng-content>
        <div class="error-container">
            <div [ngxErrors]="control | control_name">
                <div *ngFor="let error of control.errors | object_keys" [ngxError]="error" [when]="['touched']" class="error">
                    {{ error | error_message : label : control.getError(error) : errorMessages }}
                </div>
            </div>
        </div>
    </div>
    `
})

export class FormErrorsWrapperComponent {
    @Input() control: FormControl;
    @Input() label: string = 'Field';
    @Input() errorMessages: {};
}