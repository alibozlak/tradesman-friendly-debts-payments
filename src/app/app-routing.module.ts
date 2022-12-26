import { WholesalerDebtDetailComponent } from './components/wholesaler-debt-detail/wholesaler-debt-detail.component';
import { ListWholesalerDabtsComponent } from './components/list-wholesaler-dabts/list-wholesaler-dabts.component';
import { AddWholesalerPaymentComponent } from './components/add-wholesaler-payment/add-wholesaler-payment.component';
import { AddWholesalerDebtComponent } from './components/add-wholesaler-debt/add-wholesaler-debt.component';
import { WholesalerDebtsPaymentsComponent } from './components/wholesaler-debts-payments/wholesaler-debts-payments.component';
import { ListWholesalersComponent } from './components/list-wholesalers/list-wholesalers.component';
import { AddWholesalerComponent } from './components/add-wholesaler/add-wholesaler.component';
import { IsWholesalerOrBuyerComponent } from './components/is-wholesaler-or-buyer/is-wholesaler-or-buyer.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : "login", component : LoginComponent },
  { path : "", component : LoginComponent },
  { path : "home", component : IsWholesalerOrBuyerComponent },
  { path : "add-wholesaler", component : AddWholesalerComponent },
  { path : "list-wholesalers", component : ListWholesalersComponent },
  { path : "wholesaler-debs-and-payments/:wholesalerId", component : WholesalerDebtsPaymentsComponent },
  { path : "wholesaler-debs-and-payments/:wholesalerId/add-debt", component : AddWholesalerDebtComponent },
  { path : "wholesaler-debs-and-payments/:wholesalerId/add-payment", component : AddWholesalerPaymentComponent },
  { path : "wholesaler-debs-and-payments/:wholesalerId/list-debts", component : ListWholesalerDabtsComponent },
  { path : "wholesaler-debt-detail/:wholesalerDebtId", component : WholesalerDebtDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
