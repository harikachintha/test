import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
url = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) { }

  getData() {
    
  }

}
