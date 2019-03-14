import { AuthObservableService } from './auth-observable.service';
import { from, Observable } from 'rxjs';
import { AuthClass } from '@aws-amplify/auth';
import {  map, tap } from 'rxjs/operators';
import { CognitoUser } from '@aws-amplify/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class CognitoObservableService implements AuthObservableService {

    constructor( private awsAuth: AuthClass ) { }

    signIn( email: string, password: string ): Observable<string | undefined> {
        return from( this.awsAuth.signIn( email, password ) )
            .pipe(tap( ( user: CognitoUser ) => {
                const jwtToken =
                    user.getSignInUserSession().getAccessToken().getJwtToken();
                const refreshToken =
                    user.getSignInUserSession().getRefreshToken().getToken();
                localStorage.setItem( 'jwt_token', jwtToken );
                localStorage.setItem( 'refresh_token', refreshToken );
            }))
            .pipe( map( () => undefined ) );
    }

}
