import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  color = 'primary';
  label = 'Blue Button';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.color = 'danger';
      this.label = 'I am red';
    },1000);
  }

}
