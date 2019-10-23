import { AbstractControl } from '@angular/forms';

export function RetypeConfirm(confirmpassword: string) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== confirmpassword) {
            return { 'mismatch': true };
        }
        return null;
    };
}