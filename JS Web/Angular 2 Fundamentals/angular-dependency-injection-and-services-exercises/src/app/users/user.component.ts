import { Component, OnInit } from '@angular/core';
import { UserData } from './user.data';
import { User } from './User';


@Component({
    selector: 'profile',
    providers: [UserData],
    template: `
      <div class="profile-sidebar" *ngIf="user !== undefined">
        <h1>Profile - {{user.name}}</h1>
        <img src={{user.avatar_url}} alt={{user.name}} />
        <p>Company - {{user.company}}</p>
        <p>Bio - {{user.bio}}</p>
        <p>Location - {{user.location}}</p>
        <p>Total count of repos: {{user.public_repos}}   <button (click)="showRepositories()">{{repositoriesShow ? "Hide" : "Show"}} Details</button></p>     
        <p>Followers: {{user.followers}}   <button (click)="showFollowers()">{{followersShow ? "Hide" : "Show"}} Details</button></p>
        <p>Link to GitHub: <a href={{user.html_url}}>{{user.html_url}}</a></p>
      </div>
      <repositories *ngIf="repositoriesShow"></repositories>
      <followers *ngIf="followersShow"></followers> 
    `,
    styleUrls: ['user.component.css']
})

export class UserComponent implements OnInit{

    user : User
    followersShow: boolean = false
    repositoriesShow: boolean = false

    constructor(private userData : UserData){}

    ngOnInit(){
      this.userData
        .getUserData()
        .then(userData => {
          this.user = userData
        })
    }

    showFollowers() {
      if (this.repositoriesShow) {
        this.repositoriesShow = !this.repositoriesShow
      }
      this.followersShow = !this.followersShow
    }

    showRepositories() {
      if (this.followersShow) {
        this.followersShow = !this.followersShow
      }
      this.repositoriesShow = !this.repositoriesShow
    }
}

