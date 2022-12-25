import { DataResult } from 'src/app/models/dataResult';
import { WholesalerNameAndTotalAmount } from './../models/dtos/wholesaler/wholesalerNameAndTotalAmount';
import { Result } from './../models/result';
import { CreateWholesalerRequest } from './../models/dtos/wholesaler/CreateWholesalerRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WholesalerService {
  private wholesalerUrl = "http://localhost:8080/api/v1/wholesalers";

  constructor(private httpClient : HttpClient) { }

  postWholesaler(createWholesalerRequest : CreateWholesalerRequest){
    return this.httpClient.post<Result>(this.wholesalerUrl,createWholesalerRequest);
  }

  getWholesalerNamesAndTotalAmounts(tradesmanId : number){
    let newUrl = this.wholesalerUrl + "/get-wholesaler-names-and-total-amounts/" + tradesmanId;
    return this.httpClient.get<DataResult<WholesalerNameAndTotalAmount[]>>(newUrl);
  }
}
