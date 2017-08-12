import { Injectable } from '@angular/core'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../app.state'

import { CarsService } from '../../cars/cars.service'

export const ADD_CAR = 'cars/ADD'
export const ALL_CARS = 'cars/ALL'
export const CAR_DETAILS = 'cars/DETAILS'
export const CAR_DELETE = 'cars/DELETE'
export const CAR_LIKE = 'çars/LIKE'
export const MINE_CARS = 'çars/Mine'
export const CAR_ADD_REVIEW = 'çars/ADD_REVIEW'
export const CAR_ALL_REVIEWS = 'cars/ALL_REVIEWS'


@Injectable()
export class CarsActions {
  constructor (
      private carsService: CarsService,
      private ngRedux: NgRedux<IAppState>) {}

  addCar (car) {
    this.carsService
      .addCar(car)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ADD_CAR,
          result
        })
      })
  }

  allCars (page = 1, search = null) {
    this.carsService
      .allCars(page, search)
      .subscribe(cars => {
        this.ngRedux.dispatch({
          type: ALL_CARS,
          cars
        })
      })
  }

  details (id) {
    this.carsService.details(id)
      .subscribe(car => {
        this.ngRedux.dispatch({
          type: CAR_DETAILS,
          car
        })
      })
  }

  like (id) {
    this.carsService.like(id)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: CAR_LIKE,
          result
        })
      })
  }

  mine () {
    this.carsService.mine()
      .subscribe(cars => {
        this.ngRedux.dispatch({
          type: MINE_CARS,
          cars
        })
      })
  }

  allReviews (id) {
    this.carsService.allReviews(id)
      .subscribe(reviews => {
        this.ngRedux.dispatch({
          type: CAR_ALL_REVIEWS,
          reviews
        })
      })
  }

  addReview(id, review) {
    this.carsService.addReview(id, review)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: CAR_ADD_REVIEW,
          result
        })
      })
  }

  delete (id) {
    this.carsService.delete(id)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: CAR_DELETE,
          result,
          id
        })
      })

  }
}