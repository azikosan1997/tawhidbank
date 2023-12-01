import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancingRoutingModule } from './financing-routing.module';
import { MurabahaConsumptionComponent } from './murabaha-consumption/murabaha-consumption.component';
import { MurabahaHouseComponent } from './murabaha-house/murabaha-house.component';
import { MurabahaBusinessComponent } from './murabaha-business/murabaha-business.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [

    MurabahaConsumptionComponent,
       MurabahaHouseComponent,
       MurabahaBusinessComponent
  ],
  imports: [
    CommonModule,
    FinancingRoutingModule,
    SharedModule
  ]
})
export class FinancingModule { }
