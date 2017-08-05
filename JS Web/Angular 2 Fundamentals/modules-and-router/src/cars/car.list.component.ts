import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';

import { Car } from '../models/Car'
import { CarService } from '../_services/car.service'
import { PagerService } from '../_services/index'

@Component({
  selector: 'all-cars',
  templateUrl: './car.list.component.html',
  styleUrls: ['./car.list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[]

  pager: any = {}
  pagedCars: Car[]

  sortedTypes: string[] = ['make', 'owner', 'date']

  constructor(private carService: CarService,
              private pagerService: PagerService) {
  }
 
  getCars(): void {
    this.carService.getCars()
      .then(cars => {
        this.cars = cars.sort((a, b) => a.make.localeCompare(b.make))
        this.setPage(1)
      })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return
    }
    this.pager = this.pagerService.getPager(this.cars.length, page)
    this.pagedCars = this.cars.slice(this.pager.startIndex, this.pager.endIndex + 1)
  }
 
  ngOnInit(): void {
    this.getCars()
  }

  onChange(value, page) {
    if (value === 'date') {
       this.pagedCars = this.cars.sort((a, b) => a.date - b.date)
    }

    if (value === 'owner') {
       this.pagedCars = this.cars.sort((a, b) => a.owner - b.owner)
    }

    if (value === 'make') {
       this.pagedCars = this.cars.sort((a, b) => a.make.localeCompare(b.make))
    }

    this.setPage(page)
  }
  
}