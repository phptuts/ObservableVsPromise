import { FormGroup } from '@angular/forms';

export abstract class AbstractPromiseFormComponent {

    public form: FormGroup;

    public submitting = false;

    public hasSubmittingError = false;

    public errorMessage = '';

    public canSubmitForm() {
        return !this.submitting && this.form.valid;
    }

    public submittingFormState() {
        this.errorMessage = '';
        this.hasSubmittingError = false;
        this.submitting = true;
    }

    public setErrorMessageState(errorMessage: string) {
        this.hasSubmittingError = true;
        this.errorMessage = errorMessage;
        this.submitting = false;
    }

}
