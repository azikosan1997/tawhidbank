import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepositComponent} from "../views/personal/deposit/deposit.component";
import {FinancingComponent} from "../views/personal/financing/financing.component";
import {TransfersComponent} from "../views/personal/transfers/transfers.component";
import {AutoComponent} from "../views/personal/auto/auto.component";
import {TawhidPayComponent} from "../views/personal/tawhidpay/tawhidpay.component";
import {CardsComponent} from "../views/personal/cards/cards.component";

const routes: Routes = [
  // {path: 'deposit', component: DepositComponent},
  // {path: 'financing', component: FinancingComponent},
  // {path: 'transfers', component: TransfersComponent},
  // {path: 'auto-financing', component: AutoComponent},
  // {path: 'tawhid-pay', component: TawhidPayComponent},
  // {path: 'account-management', component: TawhidPayComponent},
  // {path: 'account-management', component: TawhidPayComponent},
  // {path: 'cards', component: CardsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
