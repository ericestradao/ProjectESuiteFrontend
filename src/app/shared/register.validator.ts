import { FormGroup } from '@angular/forms';

export class RegistrationValidator {
    static validate(registrationForm: FormGroup) {
        let password = registrationForm.controls.password.value;
        let confirmPassword = registrationForm.controls.confirmPassword.value;

        if (confirmPassword.length <= 0) {
            return null;
        }

        if (confirmPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }

        return null;

    }
}
