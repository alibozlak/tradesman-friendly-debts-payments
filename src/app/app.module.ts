import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { IsWholesalerOrBuyerComponent } from './components/is-wholesaler-or-buyer/is-wholesaler-or-buyer.component';
import { AddWholesalerComponent } from './components/add-wholesaler/add-wholesaler.component';
import { ListWholesalersComponent } from './components/list-wholesalers/list-wholesalers.component';
import { WholesalerDebtsPaymentsComponent } from './components/wholesaler-debts-payments/wholesaler-debts-payments.component';
import { AddWholesalerDebtComponent } from './components/add-wholesaler-debt/add-wholesaler-debt.component';
import { AddWholesalerPaymentComponent } from './components/add-wholesaler-payment/add-wholesaler-payment.component';
import { ListWholesalerDabtsComponent } from './components/list-wholesaler-dabts/list-wholesaler-dabts.component';
import { WholesalerDebtDetailComponent } from './components/wholesaler-debt-detail/wholesaler-debt-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IsWholesalerOrBuyerComponent,
    AddWholesalerComponent,
    ListWholesalersComponent,
    WholesalerDebtsPaymentsComponent,
    AddWholesalerDebtComponent,
    AddWholesalerPaymentComponent,
    ListWholesalerDabtsComponent,
    WholesalerDebtDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
