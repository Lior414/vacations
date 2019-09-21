import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {VacationDialogComponent} from '../vacation-dialog/vacation-dialog.component';
import {EditVacationComponent} from '../edit-vacation/edit-vacation.component';
import { vacation } from '../vacation.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  vacations: vacation[] = [];

  vacationForm = {};

  vacationByID: any = {
      id: null,
      description: '',
      destination: '',
      image: '',
      dates: '',
      price: '',
      followers: null
    };

  constructor(private httpService: HttpService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.getVacations();
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(VacationDialogComponent, dialogConfig);
  }

  openEditDialog(id){
    this.vacationByID.id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(EditVacationComponent, dialogConfig);
  }

  getVacations(){
      this.httpService.getVacations().subscribe(data => this.vacations = data)
  }

  vacationID(id){
    this.httpService.vacationID(id).subscribe();
  }

  removeVacation(id){
    this.httpService.removeVacation(id).subscribe(data => console.log(data));
    console.log('vacation number ' + id + ' deleted');
  }
}

