import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user-service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  userpassword;
  constructor(private router: Router, private user: UserService) {
  }

  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
   this.username = e.target.elements[0].value;
   this.userpassword = e.target.elements[1].value;
   if (this.username === 'admin' && this.userpassword === 'admin') {
     this.user.setUserLoggedIn();
     this.router.navigate(['/main']);
   }
  }
  routeToSignUp(e) {
    e.preventDefault();
    this.router.navigate(['/signup']);
  }

}
