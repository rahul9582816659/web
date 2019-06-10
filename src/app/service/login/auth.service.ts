import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL, AUTHENTICATED_USER, TOKEN} from '../../util/app.constant';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username, password) {
    return this.http.post(`${API_URL}/authenticate`,{username, password}).pipe(
      map(
        data => {
          sessionStorage.setItem(`${AUTHENTICATED_USER}`, username);
          sessionStorage.setItem(`${TOKEN}`, `Bearer ${data.token}`);
          return data;
        }
      )
    );;
  }

  isLoggedIn(): boolean {
    const token = sessionStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
    console.clear();
    this.router.navigate(['/login']);
  }



}
