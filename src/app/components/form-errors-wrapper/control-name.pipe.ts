import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
    name: 'control_name'
})
export class ControlNamePipe implements PipeTransform {
    transform(control: FormControl): string {
        if (control) {
            const formGroup = control.parent.controls;
            return Object.keys(formGroup).find(name => control === formGroup[name]) || null;
        }
        return '';
    }
}