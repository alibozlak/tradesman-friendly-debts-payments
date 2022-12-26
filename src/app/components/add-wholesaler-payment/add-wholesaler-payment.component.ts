import { ActivatedRoute } from '@angular/router';
import { WholesalerPaymentService } from './../../services/wholesaler-payment.service';
import { CreateWholesalerPaymentRequest } from './../../models/dtos/wholesalerPayment/createWholesalerPaymentRequest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-wholesaler-payment',
  templateUrl: './add-wholesaler-payment.component.html',
  styleUrls: ['./add-wholesaler-payment.component.css']
})
export class AddWholesalerPaymentComponent implements OnInit {
  createWholesalerPaymentRequest: CreateWholesalerPaymentRequest = {
    wholesalerId: 0,
    paymentAmount: 0,
    date: new Date(),
    description: ""
  }

  constructor(
    private wholesalerPaymentService: WholesalerPaymentService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createWholesalerPaymentRequest.wholesalerId = this.activatedRoute.snapshot.params['wholesalerId'];
  }

  postWholesalerPayment() {
    this.wholesalerPaymentService.postWholesalerPayment(this.createWholesalerPaymentRequest)
      .subscribe(response => {
        if (response.success) {
          alert("Ödeme Eklendi");
          this.createWholesalerPaymentRequest = {
            wholesalerId: this.activatedRoute.snapshot.params['wholesalerId'],
            paymentAmount: 0,
            date: new Date(),
            description: ""
          }
        } else {
          alert("Ödeme eklenemedi!\n" + response.message)
        }
      })
  }
}
