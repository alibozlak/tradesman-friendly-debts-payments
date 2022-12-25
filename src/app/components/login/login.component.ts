import { LoginService } from './../../services/login.service';
import { LoginTradesmanRequest } from './../../models/loginTradesmanRequest';
import { Component } from '@angular/core';
import { DataResult } from 'src/app/models/dataResult';
import { TradesmanResponseIdAndName } from 'src/app/models/tradesmanResponseIdAndName';
import { StaticTradesman } from 'src/app/models/staticTradesman';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dataResult: DataResult<TradesmanResponseIdAndName> = {
    success: false,
    message: "",
    data: {
      tradesmanId: 0,
      tradesmanName: ""
    }
  };

  clickedButton : boolean = false;

  loginTradesmanRequest: LoginTradesmanRequest = {
    email: "",
    password: ""
  };

  constructor(private loginService: LoginService) {
  }

  getLink(){
    if (this.dataResult.success) {
      return "/home";
    }
    return "/login";
  }

  postLogin() {
    this.loginService.postLogin(this.loginTradesmanRequest).subscribe(response => {
      let successedLogin = response.success;
      if (successedLogin) {
        this.dataResult.data = response.data;
        StaticTradesman.tradesmanId = response.data.tradesmanId;
        this.loginTradesmanRequest.email = "";
      }

      this.dataResult.success = successedLogin;
      this.dataResult.message = response.message;
      this.clickedButton = true;
      this.loginTradesmanRequest.password = "";
    });
  }
}
