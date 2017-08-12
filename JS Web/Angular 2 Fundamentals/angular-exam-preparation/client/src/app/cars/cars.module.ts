import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AddCarComponent } from './add-car.component'
import { CarDetailsComponent } from './car-details.component'
import { ListCarsComponen } from '../cars/list-cars.component'


import { CarsService } from './cars.service'
import { CarsActions } from '../store/cars/cars.actions'

@NgModule({
  declarations: [ 
    AddCarComponent,
    ListCarsComponen,
    CarDetailsComponent
    ],
  imports: [ CommonModule, RouterModule, FormsModule ],
  providers: [ CarsActions, CarsService ]
})
export class CarsModule {}