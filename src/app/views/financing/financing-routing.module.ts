import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MurabahaConsumptionComponent} from "./murabaha-consumption/murabaha-consumption.component";
import {MurabahaHouseComponent} from "./murabaha-house/murabaha-house.component";
import {MurabahaBusinessComponent} from "./murabaha-business/murabaha-business.component";


const routes: Routes = [
  {path: 'financing/murabaha-consumption', component: MurabahaConsumptionComponent},
  {path: 'financing/murabaha-house', component: MurabahaHouseComponent},
  {path: 'financing/murabaha-business', component: MurabahaBusinessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancingRoutingModule { }
