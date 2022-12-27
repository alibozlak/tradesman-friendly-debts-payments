import { WholesalerPaymentAllColumns } from '../models/dtos/wholesalerPayment/wholesalerPaymentAllColumns';
import { WholesalerPaymentAmountAndDateResponse } from './../models/dtos/wholesalerPayment/wholesalerPaymentAmountAndDateResponse';
import { DataResult } from './../models/dataResult';
import { Result } from './../models/result';
import { CreateWholesalerPaymentRequest } from './../models/dtos/wholesalerPayment/createWholesalerPaymentRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WholesalerPaymentService {
  private url : string = "http://localhost:8080/api/v1/wholesaler-payments";

  constructor(private httpClient : HttpClient) { }

  postWholesalerPayment(createWholesalerPaymentRequest : CreateWholesalerPaymentRequest){
    return this.httpClient.post<Result>(this.url,createWholesalerPaymentRequest);
  }

  updateWholesalerPayment(wholesalerPaymentAllColumn : WholesalerPaymentAllColumns){
    return this.httpClient.put<Result>(this.url,wholesalerPaymentAllColumn);
  }

  deleteWholesalerPayment(wholesalerPaymentId : number){
    let deleteUrl = this.url + "/delete-by-id/" + wholesalerPaymentId;
    return this.httpClient.delete<Result>(deleteUrl);
  }

  getWholesalerPaymentsByWholesalerId(wholesalerId : number){
    let newUrl = this.url + "/get-by-wholesaler-id/" + wholesalerId;
    return this.httpClient.get<DataResult<WholesalerPaymentAmountAndDateResponse[]>>(newUrl);
  }

  getPaymentDetailById(wholesalerPaymentId : number){
    let newUrl = this.url + "/get-detail-by-id/" + wholesalerPaymentId;
    return this.httpClient.get<DataResult<WholesalerPaymentAllColumns>>(newUrl);
  }
}
