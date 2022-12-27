import { StaticTradesman } from 'src/app/models/staticTradesman';
import { ActivatedRoute } from '@angular/router';
import { WholesalerService } from './../../services/wholesaler.service';
import { WholesalerDebtService } from './../../services/wholesaler-debt.service';
import { WholesalerIdAndNameResponse } from './../../models/dtos/wholesaler/wholesalerIdAndNameResponse';
import { WholesalerDebtGetAllColumn } from './../../models/dtos/wholesalerDept/wholesalerDebtGetAllColumn';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wholesaler-debt-detail',
  templateUrl: './wholesaler-debt-detail.component.html',
  styleUrls: ['./wholesaler-debt-detail.component.css']
})
export class WholesalerDebtDetailComponent implements OnInit {
  wholesalerDebtGetAllColumn : WholesalerDebtGetAllColumn = {
    wholesalerDebtId : 0,
    debtAmount : 0,
    date : new Date(),
    description : "",
    wholesalerId : 0
  };

  wholesalerIdAndNameResponses : WholesalerIdAndNameResponse[] = [];
  clickedDeleteButton : boolean = false;
  wholesalerIdForBack : number = 0;

  constructor(
    private wholesalerDebtService : WholesalerDebtService,
    private wholesalerService : WholesalerService,
    private activatedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.wholesalerService.getAllWholesalersByTradesmanId(StaticTradesman.tradesmanId).subscribe(response => {
      this.wholesalerIdAndNameResponses = response.data;
    });

    this.wholesalerDebtService.getById(this.activatedRoute.snapshot.params['wholesalerDebtId'])
      .subscribe(response => {
        let wholesalerDebt = response.data;
        this.wholesalerDebtGetAllColumn = wholesalerDebt;
        this.wholesalerIdForBack = wholesalerDebt.wholesalerId;
      })
  }

  updateWholesalerDebt(){
    this.wholesalerDebtService.putWholesalerDebt(this.wholesalerDebtGetAllColumn).subscribe(response => {
      if (response.success) {
        alert("Güncelleme işlemi başarılı");
      } else {
        alert("Güncelleme yapılamadı!\n" + response.message);
      }
    })
  }

  deleteWholesalerDebt(){
    this.wholesalerDebtService.deleteWholesalerDebt(this.wholesalerDebtGetAllColumn.wholesalerDebtId)
      .subscribe(response => {
        if (response.success) {
          alert("Borç başarılı bir şekilde silindi");
        } else {
          alert("Borç silinemedi!\n" + response.message);
        }
    })
  }

}
