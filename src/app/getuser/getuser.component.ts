import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetUserComponent {
  url='http://127.0.0.1:3000/users';
  constructor(private http: HttpClient) { 
    this.http.get(this.url).toPromise().then( data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
