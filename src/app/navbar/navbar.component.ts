import { Component, OnInit } from '@angular/core';
let show;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})




export class NavbarComponent implements OnInit {






  constructor() { }

  ngOnInit(): void {
  }
  show = false;

  showdedicated() {

    console.log('clic');

  }
}
