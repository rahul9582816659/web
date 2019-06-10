import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../service/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = null;

  constructor(private homeSer: HomeService) { }

  ngOnInit() {
    this.homeSer.getHome().subscribe(
      success => {
        console.log(success);
        this.name = success.name;

      },

      error => {
        console.log(error);
      }
    );
  }
}
