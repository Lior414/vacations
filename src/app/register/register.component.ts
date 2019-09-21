import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpService:HttpService,private router:Router) { }

  register(data){
    console.log(data);
    this.httpService.register2server(data)
    .subscribe((val) => {
      console.log(val);
      this.router.navigateByUrl('/');
    })
  }

  ngOnInit() {
  }

}
