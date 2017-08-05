import { Component, OnInit } from '@angular/core'
import {Router } from '@angular/router'

import { Car } from '../models/Car'
import { Owner } from '../models/Owner'
import { CarService } from '../_services/car.service'

@Component({
  selector: 'car-form',
  templateUrl: './car.form.component.html'
})
export class CarFormComponent implements OnInit {
  car = new Car('', '', '', '', '', '', 0)
  owners: Owner[]

  constructor(private carService: CarService,
              private router: Router) { }
 
  getOwners(): void {
    this.carService.getOwners()
      .then(owners => {
        this.owners = owners.sort((a, b) => a.name.localeCompare(b.name))
      })
  }

  submitCar() {
      console.log(this.car)
      this.carService.createCar(this.car)
      this.router.navigate(['./cars/all']);
  }

  ngOnInit() {
      this.getOwners()
  }
}
