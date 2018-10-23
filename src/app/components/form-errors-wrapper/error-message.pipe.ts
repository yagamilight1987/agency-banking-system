import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'error_message'
})
export class ErrorMessagePipe implements PipeTransform {
    transform(errorName: string, field: string, error: any, errorMessages: any[]): string {
        const errorMessage = ERROR_MESSAGES[errorName] || (errorMessages && errorMessages[errorName]);
        return (
            (typeof errorMessage == 'function'
                ? errorMessage.call(null, error)
                : errorMessage) || DEFAULT_ERROR_MESSAGE)
            .replace(/{{field}}/g, field);
    }
}

export const DEFAULT_ERROR_MESSAGE: string = '{{field}} has invalid data.';

export const ERROR_MESSAGES: any = {
    required: '{{field}} is a required field.',
    email: 'Enter a valid email.',
    onlyNumbers: 'Only numbers are allowed.',
    decimal: '{{field}} must be decimal.',
    minlength: error => `{{field}} should be atleast ${error.requiredLength} characters in length.`,
    maxlength: error => `{{field}} should have maximum ${error.requiredLength} characters in length.`,
    minVal: error => `{{field}} must be greater than ${error.minVal}`,
    maxVal: error => `{{field}} must be less than ${error.maxVal}`
};
