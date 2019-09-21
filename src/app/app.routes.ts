import { DocumentsComponent } from './documents/documents.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { WelcomeComponent} from './welcome/welcome.component';
import { ContributeursComponent } from './contributeurs/contributeurs.component';
import { BibliographieComponent } from './bibliographie/bibliographie.component';
import { HistoireComponent } from './histoire/histoire.component';
import { MemoireComponent } from './memoire/memoire.component';
import { NouveauxComponent } from './nouveaux/nouveaux.component';
import { ConferenceComponent} from './conference/conference.component';
import {ProjetComponent} from './projet/projet.component';
import {TraveauxComponent} from './traveaux/traveaux.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'contributeurs', component: ContributeursComponent},
  {path: 'bibliographie', component: BibliographieComponent},
  {path: 'histoire', component: HistoireComponent},
  {path: 'memoire', component: MemoireComponent},
  {path: 'nouveaux', component: NouveauxComponent},
  {path: 'conference', component: ConferenceComponent},
  {path: 'projet', component: ProjetComponent},
  {path: 'traveaux', component: TraveauxComponent},
  {path: 'documents', component: DocumentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}