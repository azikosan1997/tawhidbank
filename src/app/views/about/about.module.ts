import {NgModule} from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from "@angular/material/expansion";

import {AboutRoutingModule} from './about-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {PersonalModule} from "../personal/personal.module";
import {AboutBankComponent} from './about-bank/about-bank.component';
import {DocumentsComponent} from './documents/documents.component';
import {JobComponent} from './job/job.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {GoogleMapsModule} from "@angular/google-maps";
import { BranchesComponent } from './branches/branches.component';
import { AtmsComponent } from './atms/atms.component';
import { TerminalsComponent } from './terminals/terminals.component';
import { GraphicComponent } from './graphic/graphic.component';
import { RequisitesComponent } from './requisites/requisites.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AboutBankComponent,
    DocumentsComponent,
    JobComponent,
    BranchesComponent,
    AtmsComponent,
    TerminalsComponent,
    GraphicComponent,
    RequisitesComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    PersonalModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    NgFor,
    MatCardModule,
    GoogleMapsModule,
  ]
})
export class AboutModule {
}
