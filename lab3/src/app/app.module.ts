import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { VoirListeComponent } from './supprimer/voir-liste/voir-liste.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AjouterComponent,
    SupprimerComponent,
    VoirListeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
