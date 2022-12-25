import { StaticTradesman } from 'src/app/models/staticTradesman';
import { Result } from './../../models/result';
import { WholesalerService } from './../../services/wholesaler.service';
import { CreateWholesalerRequest } from './../../models/dtos/wholesaler/CreateWholesalerRequest';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-wholesaler',
  templateUrl: './add-wholesaler.component.html',
  styleUrls: ['./add-wholesaler.component.css']
})
export class AddWholesalerComponent {
  createWholesalerRequest : CreateWholesalerRequest = {
    tradesmanId : StaticTradesman.tradesmanId,
    wholesalerName : "",
    description : ""
  };

  result : Result = {
    success : false,
    message : ""
  }

  constructor(private wholesalerService : WholesalerService) {
  }

  addWholesaler(){
    this.wholesalerService.postWholesaler(this.createWholesalerRequest).subscribe(response => {
      this.result = response;
      let wholesalerName = this.createWholesalerRequest.wholesalerName;
      if (response.success) {
        alert(wholesalerName + " adlı toptancı eklendi!");
      } else {
        alert("Toptancı eklenemedi!")
      }
      this.createWholesalerRequest.wholesalerName = "";
      this.createWholesalerRequest.description = "";
    })
  }
}
