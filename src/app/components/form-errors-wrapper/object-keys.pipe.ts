import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'object_keys'
})
export class ObjectKeysPipe implements PipeTransform {
    transform(value: string): string[] {
        return value ? Object.keys(value) : [];
    }
}