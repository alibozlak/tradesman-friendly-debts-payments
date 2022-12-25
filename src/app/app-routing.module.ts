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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
