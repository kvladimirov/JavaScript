import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component'
import { FollowersComponent } from './followers/followers.component'
import { RepositoriesComponent } from './repositories/repositories.component'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FollowersComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
