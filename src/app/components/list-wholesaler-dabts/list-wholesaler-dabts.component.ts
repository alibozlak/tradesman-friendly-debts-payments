import { ActivatedRoute } from '@angular/router';
import { WholesalerDebtService } from './../../services/wholesaler-debt.service';
import { WholesalerAmountAndDateResponse } from './../../models/dtos/wholesalerDept/wholesalerAmountAndDateResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-wholesaler-dabts',
  templateUrl: './list-wholesaler-dabts.component.html',
  styleUrls: ['./list-wholesaler-dabts.component.css']
})
export class ListWholesalerDabtsComponent implements OnInit {
  wholesalerAmountAndDateResponses : WholesalerAmountAndDateResponse[] = [];

  constructor(
    private wholesalerDebtService : WholesalerDebtService,
    private activetedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    let wholesalerId : number = this.activetedRoute.snapshot.params['wholesalerId'];
    this.wholesalerDebtService.getAllWholesalerDebts(wholesalerId).subscribe(response => {
        this.wholesalerAmountAndDateResponses = response.data;
    })
  }

}
