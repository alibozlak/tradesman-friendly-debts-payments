import { WholesalerNameAndTotalAmount } from './../../models/dtos/wholesaler/wholesalerNameAndTotalAmount';
import { WholesalerService } from './../../services/wholesaler.service';
import { Component, OnInit } from '@angular/core';
import { StaticTradesman } from 'src/app/models/staticTradesman';

@Component({
  selector: 'app-list-wholesalers',
  templateUrl: './list-wholesalers.component.html',
  styleUrls: ['./list-wholesalers.component.css']
})
export class ListWholesalersComponent implements OnInit {
  wholesalerNamesAndTotalAmounts : WholesalerNameAndTotalAmount[] = [];

  constructor(private wholesalerService : WholesalerService) {
  }

  ngOnInit(): void {
    this.wholesalerService.getWholesalerNamesAndTotalAmounts(StaticTradesman.tradesmanId)
      .subscribe(response => {
        this.wholesalerNamesAndTotalAmounts = response.data;
        console.log(response);
      });
  }

}
