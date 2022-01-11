import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormComponent } from './form/form.component';

@Injectable({
  providedIn:'root'
})

export class APIService {
  _url= 'http://127.0.0.1:3000/users';
  constructor(private _http: HttpClient) { }

sendData(form: FormComponent){
  return this._http.post<any>(this._url, form);
}
}