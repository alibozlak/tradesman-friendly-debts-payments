import { LoginTradesmanRequest } from './../models/loginTradesmanRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResult } from '../models/dataResult';
import { TradesmanResponseIdAndName } from '../models/tradesmanResponseIdAndName';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = "http://localhost:8080/api/v1/tradesmans/login-by-email-and-password";

  constructor(private httpClient : HttpClient) { }

  postLogin(loginTradesmanRequest : LoginTradesmanRequest) {
    return this.httpClient.post<DataResult<TradesmanResponseIdAndName>>(this.loginUrl,loginTradesmanRequest);
  }
}
