import { Component } from '@angular/core';
import { AbstractObservableFormComponent } from '../abstract-form/abstract-observable-form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthObservableService } from '../../providers/auth-observable.service';
import { Observable } from 'rxjs';

@Component( {
    selector: 'app-login-observable',
    templateUrl: './login-observable.component.html',
    styleUrls: [ './login-observable.component.scss' ]
} )
export class LoginObservableComponent extends AbstractObservableFormComponent {

    public form = this.formBuilder.group( {
        email: [ '', Validators.compose( [ Validators.email, Validators.required ] ) ],
        password: [ '', Validators.required ]
    });

    constructor( private formBuilder: FormBuilder,
                 private router: Router,
                 private authService: AuthObservableService ) {
        super();
    }

    request(): Observable<string | undefined> {
        return this.authService.signIn(
            this.form.get( 'email' ).value,
            this.form.get( 'password' ).value
        );
    }

    success(): void {
        this.router.navigate( [ 'winning' ] );
    }

    login() {
        this.requestSubject.next();
    }


}
