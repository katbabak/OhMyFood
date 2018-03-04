import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user-service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authoristaion/authoristaion.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() onChanged = new EventEmitter<string>();
  error = false;
  message: string;
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = new User;
  }

  checkUserExistence(userExist) {
    if (userExist) {
      this.error = false;
      console.log('Welcome, ' + userExist.name);
      this.onChanged.emit(userExist.name);
    } else {
      this.error = true;
      this.message = 'Username or password is not right';
    }
  }
  login() {
    if (!this.user.email || !this.user.password) {
      this.error = true;
      this.message = 'Fill in the fields, please';
    } else {
      this.userService.checkUser(this.user.email, this.user.password)
        .subscribe(
          currentUser => { this.checkUserExistence(currentUser); },
          error => { this.message = 'This is the server error!';
          }
        );
    }
  }
}


