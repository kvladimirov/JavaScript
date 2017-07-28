import { Component, OnInit } from '@angular/core';
import { FollowersData } from './followers.data';
import { User } from '../users/User';


@Component({
    selector: 'followers',
    providers: [FollowersData],
    template: `
    <ul>
      <li *ngFor="let follower of followers">
        <h1>{{follower.login}}</h1>
        <img src={{follower.avatar_url}} alt={{follower.login}} />
        <p>Link to GitHub - <a href={{follower.html_url}}>{{follower.html_url}}</a></p>
      </li>
    </ul>  
    `,
    styleUrls: ['followers.component.css']
})

export class FollowersComponent implements OnInit{

    followers : User[]

    constructor(private followersData : FollowersData){}

    ngOnInit(){
      this.followersData
        .getFollowersData()
        .then(followersData => {
          this.followers = followersData
        })
    }
}