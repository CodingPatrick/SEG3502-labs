import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatriceBaseComponent } from './calculatrice-base/calculatrice-base.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatriceBaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
