import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

}
