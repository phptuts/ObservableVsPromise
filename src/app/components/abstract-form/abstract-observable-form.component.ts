import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';


export abstract class AbstractObservableFormComponent {

    public form: FormGroup;

    public readonly requestSubject = new Subject();

    public readonly submittingSubject = new BehaviorSubject( false );

    public readonly submitting$ = this.submittingSubject.asObservable();

    public readonly request$ = this
        .requestSubject
        .asObservable()
        .pipe( filter( () => this.form.valid ) )
        .pipe( tap( () => this.submittingSubject.next( true ) ) )
        .pipe( switchMap( () => this.request()
            .pipe(
                tap(() => this.success()),
                catchError(err => of(err.message))
            )
        ))
        .pipe( tap( () => this.submittingSubject.next( false ) ) );

    abstract request(): Observable<undefined | string>;

    abstract success(): void;
}

