import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppBoton } from './app.button';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppBoton ],
  bootstrap:    [ AppComponent, AppBoton ]
})
export class AppModule { }
