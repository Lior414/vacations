import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { vacation } from '../vacation.model';
import { HttpService } from '../http.service';
import { Inject } from '@angular/core';
import { getDiffieHellman } from 'crypto';

@Component({
  selector: 'app-edit-vacation',
  templateUrl: './edit-vacation.component.html',
  styleUrls: ['./edit-vacation.component.css']
})
export class EditVacationComponent implements OnInit {

  vacation: any = {
    id: null,
    description: '',
    destination: '',
    image: '',
    dates: '',
    price: '',
    followers: null
  };

  editVacation = new FormGroup({
     description : new FormControl(''),
     destination : new FormControl(''),
     image : new FormControl(''),
     dates : new FormControl(''),
     price : new FormControl(''),
    followers : new FormControl(''),
  });

  constructor(private dialogRef:MatDialogRef<EditVacationComponent>,@Inject(MAT_DIALOG_DATA) data, private httpService: HttpService) { }

  close() {
    this.dialogRef.close();
  }

  vacationID(id){
    this.httpService.vacationID(id).subscribe();
  }

  editVacationFunction(id){
    this.httpService.editVacation(this.editVacation.value).subscribe(this.editVacation.value, id);
    console.log(this.editVacation.value);
    close();
  }

  ngOnInit() {
    console.log(this.vacation.id);
  }

}
