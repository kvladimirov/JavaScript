import { NgModule }           from '@angular/core'
import { CommonModule }       from '@angular/common'
import { HomeComponent }   from './home.component'
import { CarListComponent }   from './car.list.component'
import { CarDetailsComponent }   from './car.details.component'


@NgModule({
  imports: [ CommonModule],
  declarations: [ 
    HomeComponent,
    CarListComponent,
    CarDetailsComponent
  ],
  exports: [ 
    HomeComponent,
    CarListComponent,
    CarDetailsComponent
  ],
  providers: []
})
export class CarModule { }
