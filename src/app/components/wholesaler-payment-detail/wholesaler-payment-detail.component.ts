import { StaticTradesman } from 'src/app/models/staticTradesman';
import { WholesalerPaymentService } from './../../services/wholesaler-payment.service';
import { ActivatedRoute } from '@angular/router';
import { WholesalerPaymentAllColumns } from '../../models/dtos/wholesalerPayment/wholesalerPaymentAllColumns';
import { Component, OnInit } from '@angular/core';
import { WholesalerIdAndNameResponse } from 'src/app/models/dtos/wholesaler/wholesalerIdAndNameResponse';
import { WholesalerService } from 'src/app/services/wholesaler.service';

@Component({
  selector: 'app-wholesaler-payment-detail',
  templateUrl: './wholesaler-payment-detail.component.html',
  styleUrls: ['./wholesaler-payment-detail.component.css']
})
export class WholesalerPaymentDetailComponent implements OnInit {
  wholesalerPaymentAllColumnsResponse : WholesalerPaymentAllColumns = {
    wholesalerPaymentId : 0,
    paymentAmount : 0,
    date : new Date(),
    description : "",
    wholesalerId : 0
  }

  wholesalerIdAndNameResponses : WholesalerIdAndNameResponse[] = [];
  clickedDeleteButton : boolean = false;
  wholesalerIdForBack : number = 0;

  constructor(
    private activatedRoute : ActivatedRoute,
    private wholesalerService : WholesalerService,
    private wholesalerPaymentService : WholesalerPaymentService
  ){}

  ngOnInit(): void {
    let wholesalerPaymentId : number = this.activatedRoute.snapshot.params['wholesalerPaymentId'];
    this.wholesalerPaymentService.getPaymentDetailById(wholesalerPaymentId).subscribe(response => {
      let wholesalerPaymentAllColumns = response.data;
      this.wholesalerPaymentAllColumnsResponse = wholesalerPaymentAllColumns;
      this.wholesalerIdForBack = wholesalerPaymentAllColumns.wholesalerId;
    });

    this.wholesalerService.getAllWholesalersByTradesmanId(StaticTradesman.tradesmanId)
      .subscribe(response => {
        this.wholesalerIdAndNameResponses = response.data;
    })
  }

  updateWholesalerPayment(){
    this.wholesalerPaymentService.updateWholesalerPayment(this.wholesalerPaymentAllColumnsResponse)
      .subscribe(response => {
        if (response.success) {
          alert("Ödeme bilgileri güncellendi");
        } else {
          alert("Güncelleme yapılamadı!\n" + response.message);
        }
    })
  }

  deleteWholesalerPayment(){
    this.wholesalerPaymentService
      .deleteWholesalerPayment(this.wholesalerPaymentAllColumnsResponse.wholesalerPaymentId)
      .subscribe(response => {
        if (response.success) {
          alert("Ödeme başarılı bir şekilde silindi");
        } else {
          alert("Ödeme silinemedi!\n" + response.message);
        }
    })
  }

}
