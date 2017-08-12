import { Component } from '@angular/core'
import { NgRedux } from 'ng2-redux'
import { Router } from '@angular/router'
import { IAppState } from '../store'

import { AddCarModel } from './add-car.model'

import { CarsActions } from '../store/cars/cars.actions'


@Component({
  selector: 'add-car',
  templateUrl: './add-car.component.html',
})
export class AddCarComponent {
  car: AddCarModel = new AddCarModel()

  constructor (
      private carsActions: CarsActions,
      private router: Router,
      private ngRedux: NgRedux<IAppState>) {}

  addCar () {
    this.carsActions.addCar(this.car)
    this.ngRedux
      .select(state => state.cars)
      .subscribe(cars => {
        if (cars.carAdded) {
          const carId = cars.carAddedId
          this.router.navigateByUrl(`/cars/details/${carId}`)
        }
      })
  }
}