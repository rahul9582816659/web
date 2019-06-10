import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeModel} from '../model/employee-model';
import {map} from 'rxjs/operators';
import {API_URL, AUTH_USER, TOKEN} from '../util/app.constant';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  setToken() {
    const username = 'user';
    const password = 'user';

    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString;
  }

  getHome() {
   return this.http.get<EmployeeModel>(`${API_URL}/name`).pipe(
     map(
       data => {
         sessionStorage.setItem(`${AUTH_USER}`, 'true');
         sessionStorage.setItem(`${TOKEN}`, this.setToken());
         return data;
       }
     )
   );
  }


}
