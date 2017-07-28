import { Repository } from './Repository'
import { User } from '../users/User'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

const url = "https://api.github.com/users/ivaylokenov/repos"

@Injectable()
export class RepositoriesData {
   constructor(private http: Http){}

   getRepositoriesData(): Promise<Repository[]> {
     return this.http
       .get(url)
       .toPromise()
       .then(resp => resp.json() as Repository[])
       .catch(err => {
          console.log(err);
          return new Repository
       })
   }

   getRepositoryData(repo_url): Promise<Repository> {
     return this.http
       .get(repo_url)
       .toPromise()
       .then(resp => resp.json() as Repository)
       .catch(err => {
          console.log(err);
          return new Repository
       })
   }

   getContributorsData(repository): Promise<User[]> {
     let url = `https://api.github.com/repos/ivaylokenov/${repository}/contributors`
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