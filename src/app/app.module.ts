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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IsWholesalerOrBuyerComponent,
    AddWholesalerComponent,
    ListWholesalersComponent
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
