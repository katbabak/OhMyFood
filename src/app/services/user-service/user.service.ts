// https://blog.angular.io/improved-querying-and-offline-data-with-angularfirestore-dab8e20a4a06
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
// import { AngularFireAuth } from 'angularfire2/auth';

import {User} from '../../model/user';

@Injectable()
export class UserService {
  public currentUser: User;
  public users: Observable<User[]>;

  // public userCollection: AngularFirestoreCollection<User>

  constructor(private db: AngularFirestore) {
  }

  // validate(userEmail: string): Observable<boolean> {
  //   return Observable.create(observer => {
  //     const isUserValid = false;
  //     const userCollection = this.db.collection('users', ref => {
  //       return ref.where('email', '==', userEmail);
  //     });
  //     userCollection.query.get()
  //       .then((querySnapshot) => {
  //         if (querySnapshot.empty) {
  //           console.log('User with email: "' + userEmail + ' isn\'t in DB');
  //           observer.next(true);
  //         } else {
  //           console.log('User with email: "' + userEmail +
  //             '" (id: ' + querySnapshot.docs[0].id + ') already exists in DB');
  //           observer.next(false);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log('Got an error validating user email: ' + error);
  //         observer.next(false);
  //       });
  //   });
  // }
  //
  checkUser(userEmail: string, userPassword: string): Observable<User> {
    return Observable.create(observer => {
      const userCollection = this.db.collection('users', ref => {
        return ref.where('email', '==', userEmail)
          .where('password', '==', userPassword);
      });

      userCollection.query.get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) { // found user with specified email and pass
            // store found user in this.currentUser
            this.currentUser = querySnapshot.docs[0].data();
            this.currentUser.id = querySnapshot.docs[0].id;

            console.log('Found user (id: ' + this.currentUser.id +
              ') with "' + userEmail + '":"' + userPassword + '"');
            observer.next(this.currentUser);
          } else { // no user with specified email and pass
            console.log('Didn\'t find user "' + userEmail +
              '":"' + userPassword + '"');
            observer.next(null);
          }
        })
        .catch((error) => {
          console.log('Got an error checking if user is in DB: ' + error);
          observer.next(false);
        });
    });
  }
}

// createUser(newUser: User) {
//   // debugger;
//   return Observable.create(observer => {
//     const userCollection = this.db.collection('users', ref => {
//       return ref.where('email', '==', newUser.email);
//     });
//
//     userCollection.query.get()
//       .then((querySnapshot) => {
//         // newUser is not in DB, adding him
//         if (querySnapshot.empty) {
//           this.currentUser = newUser;
//           newUser.setKPCF(newUser.age, newUser.height,
//             newUser.weight, newUser.gender, newUser.activity);
//           const userData = {
//             name: newUser.name,
//             password: newUser.password,
//             gender: newUser.gender,
//             age: newUser.age,
//             height: newUser.height,
//             weight: newUser.weight,
//             activity: newUser.activity,
//           };
//
//           this.db.collection('users').add(userData)
//             .then((docRef) => {
//               // docRef.get();
//             })
//             .catch((error) => {
//               console.log('Error creating newUser: ', error);
//             });
//         // newUser already in DB, returning false
//         } else {
//           console.log('User ' + querySnapshot.docs[0].get('name') +
//             ' (' + querySnapshot.docs[0].id + ') already exists in DB');
//           observer.next(false);
//         }
//       })
//       .catch((error) => {
//         console.log('Error getting newUser document: ', error);
//         observer.next(false);
//       });
//   });
// this.userService.currentUser.kpcf
