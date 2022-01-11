import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  
  submitForm: FormGroup ;

  constructor(
    private _router: Router,
    private _apiservice: APIService,
    public fb: FormBuilder
  ){
    this.submitForm= this.fb.group({
  firstname : new FormControl(''),
  lastname : new FormControl(''),
  email: new FormControl(''),
  budget: new FormControl(''),
  phone: new FormControl('')
})
}


ngOnInit(){}

  onSubmit() {
    this._apiservice.sendData(this.submitForm.value)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    )
    this.submitForm.reset();
    }
}