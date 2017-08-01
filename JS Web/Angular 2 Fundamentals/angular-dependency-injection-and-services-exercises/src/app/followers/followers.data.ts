import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const url = "https://api.github.com/users/ivaylokenov/followers"

@Injectable()
export class FollowersData {
   constructor(private http: Http){}

   getFollowersData(): Promise<User[]> {
     return this.http
       .get(url)
       .toPromise()
       .then(resp => resp.json() as User[])
       .catch(err => {
          console.log(err);
          return new User
       })
   }
}