import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/login/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authSer: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUP() {

  }

  logout() {
    console.log('---> logout')
    this.authSer.logout();
  }

  signIn() {
    this.router.navigate(['/login']);
  }
}
