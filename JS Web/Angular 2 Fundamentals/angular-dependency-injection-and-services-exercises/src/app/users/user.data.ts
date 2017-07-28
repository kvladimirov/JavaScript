import { User } from './User';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const url = "https://api.github.com/users/ivaylokenov"

@Injectable()
export class UserData {
   constructor(private http: Http){}

   getUserData(): Promise<User> {
     return this.http
       .get(url)
       .toPromise()
       .then(resp => resp.json() as User)
       .catch(err => {
          console.log(err);
          return new User
       })
   }
}