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
}
