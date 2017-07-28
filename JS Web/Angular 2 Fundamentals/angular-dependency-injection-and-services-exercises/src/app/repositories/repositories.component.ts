import { Component, OnInit } from '@angular/core'
import { RepositoriesData } from './repositories.data'
import { Repository } from './Repository'
import { User } from '../users/User'


@Component({
    selector: 'repositories',
    providers: [RepositoriesData],
    template: `
      <ul>
        <li *ngFor="let repository of repositories">
          <h3>{{repository.name}}</h3>
          <p>Language: {{repository.language}}</p>
          <p>Stars: {{repository.stargazers_count}}</p>
          <p>Link to Repo: <a href={{repository.html_url}}>{{repository.html_url}}</a></p>
          <button (click)="showContributors(repository, $event)">{{repository.contributorsShow ? "Hide" : "Show"}} Contributors</button>
          <div *ngIf="repository.contributorsShow">
            <li *ngFor="let contributor of repository.contributors">
              <h3>{{contributor.login}}</h3>
              <img src={{contributor.avatar_url}} alt={{contributor.login}} />
              <p>Total contributions for the project - {{contributor.contributions}}</p>
            </li>
          </div>
        </li>
      </ul>
    `,
    styleUrls: ['repositories.component.css']
})

export class RepositoriesComponent implements OnInit{

    repositories : Repository[]

    constructor(private repositoriesData : RepositoriesData){}

    ngOnInit(){
      this.repositoriesData
        .getRepositoriesData()
        .then(repositoriesData => {
          this.repositories = repositoriesData
        })
    }

    showContributors(repository: Repository) {
      this.repositoriesData
        .getContributorsData(repository.name)
        .then(contributorsData => {
          repository.contributors = contributorsData
        })
      repository.contributorsShow = !repository.contributorsShow
    }
}