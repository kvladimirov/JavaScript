import { NgModule }           from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule }       from '@angular/common'
import { HomeComponent }   from './home.component'
import { CarListComponent }   from './car.list.component'
import { CarDetailsComponent }   from './car.details.component'
import { CarFormComponent }   from './car.form.component'



@NgModule({
  imports: [ CommonModule, FormsModule],
  declarations: [ 
    HomeComponent,
    CarListComponent,
    CarFormComponent,
    CarDetailsComponent

  ],
  exports: [ 
    HomeComponent,
    CarListComponent,
    CarFormComponent,
    CarDetailsComponent
  ],
  providers: []
})
export class CarModule { }
