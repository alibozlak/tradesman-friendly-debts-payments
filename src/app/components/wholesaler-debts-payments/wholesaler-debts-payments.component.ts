import { WholesalerService } from './../../services/wholesaler.service';
import { WholesalerDetailMoney } from './../../models/dtos/wholesaler/wholesalerDetailMoney';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wholesaler-debts-payments',
  templateUrl: './wholesaler-debts-payments.component.html',
  styleUrls: ['./wholesaler-debts-payments.component.css']
})
export class WholesalerDebtsPaymentsComponent implements OnInit {
  wholesalerDetailMoney : WholesalerDetailMoney = {
    wholesalerId : 0,
    wholesalerName : "",
    totalDebtAmount : 0,
    totalPaymentAmount : 0
  }

  summaryAmount = 0;

  constructor(private wholesalerService : WholesalerService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.wholesalerDetailMoney.wholesalerId = this.activatedRoute.snapshot.params['wholesalerId'];

    this.wholesalerService.getWholesalerDetail(this.wholesalerDetailMoney.wholesalerId).subscribe(response => {
      let totalDept = response.data.totalDebtAmount;
      let totalPayment = response.data.totalPaymentAmount
      this.wholesalerDetailMoney.wholesalerName = response.data.wholesalerName;
      this.wholesalerDetailMoney.totalDebtAmount = totalDept;
      this.wholesalerDetailMoney.totalPaymentAmount = totalPayment;
      this.summaryAmount = totalPayment - totalDept;
      console.log(response);
    })
  }

}
