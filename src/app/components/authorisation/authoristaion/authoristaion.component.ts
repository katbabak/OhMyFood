import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authoristaion',
  templateUrl: './authoristaion.component.html',
  styleUrls: ['./authoristaion.component.scss']
})
export class AuthoristaionComponent implements OnInit {
  msg: string;
  constructor() { }

  ngOnInit() {
  }
  showUser(name) {
    this.msg = 'Welcome, ' + name;
  }
}

