import { ActivatedRoute } from '@angular/router';
import { WholesalerPaymentService } from './../../services/wholesaler-payment.service';
import { WholesalerPaymentAmountAndDateResponse } from './../../models/dtos/wholesalerPayment/wholesalerPaymentAmountAndDateResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-wholesaler-payments',
  templateUrl: './list-wholesaler-payments.component.html',
  styleUrls: ['./list-wholesaler-payments.component.css']
})
export class ListWholesalerPaymentsComponent implements OnInit {
  wholesalerPaymentAmountAndDateResponses : WholesalerPaymentAmountAndDateResponse[] = [];

  constructor(
    private wholesalerPaymentService : WholesalerPaymentService,
    private activatedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    let wholesalerId : number = this.activatedRoute.snapshot.params['wholesalerId'];
    this.wholesalerPaymentService.getWholesalerPaymentsByWholesalerId(wholesalerId)
      .subscribe(response => {
        console.log(response);
        this.wholesalerPaymentAmountAndDateResponses = response.data;
      })
  }
}
