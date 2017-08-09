import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { NgRedux } from 'ng2-redux'
import { IAppState } from '../store'

import { AuthService } from '../core/auth.service'
import { UsersActions } from '../store/users/users.actions'

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
  authenticated: boolean = false
  username: string = null

  constructor (
      private usersActions: UsersActions,
      private authService: AuthService,
      private router: Router,
      private ngRedux: NgRedux<IAppState>) { }

  ngOnInit () {
      this.ngRedux
        .select(state => state.users)
        .subscribe(users => {
          this.authenticated = users.userAuthenticated
          this.username = users.username
        })
       
  }

  logout () {
    this.usersActions.logout()
    this.authService.deauthenticateUser()
    this.authService.removeUser()
    this.router.navigateByUrl('')
  }
}