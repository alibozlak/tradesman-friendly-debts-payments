import { Result } from './../../models/result';
import { ActivatedRoute } from '@angular/router';
import { WholesalerDebtService } from './../../services/wholesaler-debt.service';
import { CreateWholesalerDebtRequest } from './../../models/dtos/wholesalerDept/createWholesalerDeptRequest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-wholesaler-debt',
  templateUrl: './add-wholesaler-debt.component.html',
  styleUrls: ['./add-wholesaler-debt.component.css']
})
export class AddWholesalerDebtComponent implements OnInit {
  createWholesalerDebtRequest: CreateWholesalerDebtRequest = {
    wholesalerId: 0,
    debtAmount: 0,
    date: new Date(),
    description: ""
  }

  constructor(
    private wholesalerDebtService: WholesalerDebtService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createWholesalerDebtRequest.wholesalerId = this.activatedRoute.snapshot.params['wholesalerId'];
  }

  postWholesalerDebt() {
    this.wholesalerDebtService.postWholesalerDebt(this.createWholesalerDebtRequest).subscribe(response => {
      if (response.success) {
        alert("Borç eklendi");
        this.createWholesalerDebtRequest = {
          wholesalerId: this.activatedRoute.snapshot.params['wholesalerId'],
          debtAmount: 0,
          date: new Date(),
          description: ""
        }
      } else {
        alert("Borç eklenemedi!\n" + response.message)
      }
    });
  }
}
