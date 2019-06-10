import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeModel} from '../../model/employee-model';
import {API_URL} from '../../util/app.constant';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getHome() {
   return this.http.get<EmployeeModel>(`${API_URL}/name`);
  }


}
