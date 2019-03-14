import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class AuthObservableService {

    public abstract signIn(email: string, password: string):
        Observable<undefined | string>;
}
