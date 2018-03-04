import { Component } from '@angular/core';

import { User, Gender, Activity, KPCF } from './model/user';
import { UserService } from './services/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public user: User;
  public users: User[];
  public bValid: boolean;

  constructor(private userService: UserService) {
    // this.user = new User;
    /* {
      email: 'test@test.test',
      password: 'test',
      name: 'Test',
      gender: Gender.male,
      age: 42,
      height: 180,
      weight: 75,
      activity: Activity.medium
    }; */
  }
}

//   createUser() {
//     this.userService.createUser(this.user).subscribe(isCreated => { console.log(isCreated) });
//   }
//
//   validate(userEmail: string) {
//     this.userService.validate(userEmail).subscribe(isValid => { console.log(isValid) });
//   }
//
//   checkUser(userEmail: string, userPassword: string) {
//     this.userService.checkUser(userEmail, userPassword)
//       .subscribe(isValid => {console.log(isValid);
//       });
//   }
// }
