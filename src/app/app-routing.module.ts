import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPromiseComponent } from './components/login-promise/login-promise.component';
import { LoginObservableComponent } from './components/login-observable/login-observable.component';
import { WinningComponent } from './components/winning/winning.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'login-promise',
    component: LoginPromiseComponent
  },
  {
    path: 'login-observable',
    component: LoginObservableComponent
  },
  {
    path: 'winning',
    component: WinningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
