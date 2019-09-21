import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRouters} from './app.routes';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { DataService } from './data/data.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { HistoireComponent } from './histoire/histoire.component';
import { MemoireComponent } from './memoire/memoire.component';
import { NouveauxComponent } from './nouveaux/nouveaux.component';
import { ConferenceComponent } from './conference/conference.component';
import { ProjetComponent } from './projet/projet.component';
import { TraveauxComponent } from './traveaux/traveaux.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContributeursComponent } from './contributeurs/contributeurs.component';
import { BibliographieComponent } from './bibliographie/bibliographie.component';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostDialogComponent,
    HistoireComponent,
    MemoireComponent,
    NouveauxComponent,
    ConferenceComponent,
    ProjetComponent,
    TraveauxComponent,
    DocumentsComponent,
    ContributeursComponent,
    BibliographieComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule,

  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [PostDialogComponent],
})
export class AppModule { }
