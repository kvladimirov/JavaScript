import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutesModule } from './routes.module'

import {PageNotFoundComponent } from './pageNotFound.component '

import { CarModule } from '../cars/car.module'
import { CarService } from '../_services/car.service'

import { OwnerModule } from '../owners/owner.module'

import { PagerService } from '../_services/index';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    CarModule,
    OwnerModule
  ],
  providers: [ CarService, PagerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
