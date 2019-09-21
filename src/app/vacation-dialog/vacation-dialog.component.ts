import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { HttpService } from '../http.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-vacation-dialog',
  templateUrl: './vacation-dialog.component.html',
  styleUrls: ['./vacation-dialog.component.css']
})
export class VacationDialogComponent implements OnInit {

  vacationForm = new FormGroup({
    //  id: null,
     description : new FormControl(''),
     destination : new FormControl(''),
     image : new FormControl(''),
     dates : new FormControl(''),
     price : new FormControl(''),
    followers : new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
      private dialogRef:MatDialogRef<VacationDialogComponent>, @Inject(MAT_DIALOG_DATA) data, private httpService: HttpService
  ){}

  close() {
      this.dialogRef.close();
  }

  vacation(){
    this.httpService.vacation2server(this.vacationForm.value).subscribe(this.vacationForm.value);
    console.log(this.vacationForm.value);
    close();
  }

  ngOnInit() {
    // getVacations(){};
  }
}
