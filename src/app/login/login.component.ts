import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  login(data){
    console.log(data);
    this.httpService.login2service(data)
    .subscribe((val) => {
      console.log(val);
      this.router.navigateByUrl('/admin-main');
    })
  };
}
