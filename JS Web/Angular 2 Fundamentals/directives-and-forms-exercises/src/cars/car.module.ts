import { NgModule }           from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from '../app/routes.module'
import { CommonModule }       from '@angular/common'
import { HomeComponent }   from './home.component'
import { CarListComponent }   from './car.list.component'
import { CarDetailsComponent }   from './car.details.component'
import { CarFormComponent }   from './car.form.component'
import { CarEditComponent } from './car.edit.component'
import { CommentEditComponent } from '../comments/comment.edit.component'

import { BorderRadiusDirective } from '../directives/border.radius.directive'
import {LitrePipe} from '../pipes/litre.pipe'



@NgModule({
  imports: [ CommonModule, FormsModule, AppRoutesModule],
  declarations: [ 
    HomeComponent,
    CarListComponent,
    CarFormComponent,
    CarDetailsComponent,
    CarEditComponent,
    CommentEditComponent,
    BorderRadiusDirective,
    LitrePipe

  ],
  exports: [ 
    HomeComponent,
    CarListComponent,
    CarFormComponent,
    CarDetailsComponent,
    CarEditComponent,
    CommentEditComponent
  ],
  providers: []
})
export class CarModule { }
