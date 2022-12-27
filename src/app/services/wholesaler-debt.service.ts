import { WholesalerDebtGetAllColumn } from './../models/dtos/wholesalerDept/wholesalerDebtGetAllColumn';
import { DataResult } from 'src/app/models/dataResult';
import { Result } from './../models/result';
import { CreateWholesalerDebtRequest } from './../models/dtos/wholesalerDept/createWholesalerDeptRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WholesalerAmountAndDateResponse } from '../models/dtos/wholesalerDept/wholesalerAmountAndDateResponse';

@Injectable({
  providedIn: 'root'
})
export class WholesalerDebtService {

  private url = "http://localhost:8080/api/v1/wholesaler-debts";

  constructor(private httpClient : HttpClient) { }

  postWholesalerDebt(createWholesalerDebtRequest : CreateWholesalerDebtRequest){
    return this.httpClient.post<Result>(this.url,createWholesalerDebtRequest);
  }

  getAllWholesalerDebts(wholesalerId : number){
    let newUrl = this.url + "/get-all-wholesaler-debts/" + wholesalerId;
    return this.httpClient.get<DataResult<WholesalerAmountAndDateResponse[]>>(newUrl);
  }

  getById(wholesalerDebtId : number){
    let newUrl = this.url + "/get-by-id/" + wholesalerDebtId;
    return this.httpClient.get<DataResult<WholesalerDebtGetAllColumn>>(newUrl);
  }

  putWholesalerDebt(wholesalerDebtGetAllColumn : WholesalerDebtGetAllColumn){
    return this.httpClient.put<Result>(this.url,wholesalerDebtGetAllColumn);
  }

  deleteWholesalerDebt(wholesalerDebtId : number){
    let deleteUrl = this.url + "/delete-by-id/" + wholesalerDebtId;
    return this.httpClient.delete<Result>(deleteUrl);
  }
}
