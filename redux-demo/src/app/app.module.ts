import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {AppState, INITIAL_STATE, rootReducer} from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<Readonly<AppState>>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
