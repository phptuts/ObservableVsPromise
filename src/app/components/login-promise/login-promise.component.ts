import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractPromiseFormComponent } from '../abstract-form/abstract-promise-form.component';
import { Router } from '@angular/router';
import { AuthPromisService } from '../../providers/auth-promis.service';

@Component( {
    selector: 'app-login-promise',
    templateUrl: './login-promise.component.html',
    styleUrls: [ './login-promise.component.scss' ]
} )
export class LoginPromiseComponent extends AbstractPromiseFormComponent {

    public form = this.formBuilder.group( {
        email: [ '', Validators.compose( [ Validators.email, Validators.required ] ) ],
        password: [ '', Validators.required ]
    });

    constructor( private formBuilder: FormBuilder,
                 private router: Router,
                 private authService: AuthPromisService ) {
        super();
    }

    async login() {
        if (!this.canSubmitForm()) {
            return;
        }

        this.submittingFormState();

        const errorMessage = await this.authService.signIn(
            this.form.get( 'email' ).value,
            this.form.get( 'password' ).value
        );

        if (!errorMessage) {
            this.router.navigate( [ 'winning' ] );
            return;
        }

        this.setErrorMessageState( errorMessage );

    }

}
