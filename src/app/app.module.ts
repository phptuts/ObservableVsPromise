import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthClass } from '@aws-amplify/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPromiseComponent } from './components/login-promise/login-promise.component';
import { LoginObservableComponent } from './components/login-observable/login-observable.component';
import { WinningComponent } from './components/winning/winning.component';
import { environment } from '../environments/environment';
import { AuthObservableService } from './providers/auth-observable.service';
import { CognitoObservableService } from './providers/cognito-observable.service';
import { AuthPromisService } from './providers/auth-promis.service';
import { CognitoPromiseService } from './providers/cognito-promise.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPromiseComponent,
    LoginObservableComponent,
    WinningComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: AuthClass,
      useFactory: () => {
        return new AuthClass( { userPoolId: environment.userPoolId, userPoolWebClientId: environment.userPoolWebClientId } );
      },
      useExisting: true
    },
    {
      provide: AuthObservableService,
      useClass: CognitoObservableService,
      deps: [AuthClass]
    },
    {
      provide: AuthPromisService,
      useClass: CognitoPromiseService,
      deps: [AuthClass]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
