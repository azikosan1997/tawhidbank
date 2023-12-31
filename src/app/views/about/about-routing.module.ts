import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutBankComponent} from "./about-bank/about-bank.component";
import {DocumentsComponent} from "./documents/documents.component";
import {JobComponent} from "./job/job.component";
import {BranchesComponent} from "./branches/branches.component";
import {AtmsComponent} from "./atms/atms.component";
import {TerminalsComponent} from "./terminals/terminals.component";
import {RequisitesComponent} from "./requisites/requisites.component";
import {GraphicComponent} from "./graphic/graphic.component";
import {HelpComponent} from "./help/help.component";

const routes: Routes = [
  {path: '', component: AboutBankComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'job', component: JobComponent},
  {path: 'location', component: BranchesComponent},
  {path: 'atms', component: AtmsComponent},
  {path: 'terminals', component: TerminalsComponent},
  {path: 'graphic', component: GraphicComponent},
  {path: 'requisites', component: RequisitesComponent},
  {path: 'help', component: HelpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
