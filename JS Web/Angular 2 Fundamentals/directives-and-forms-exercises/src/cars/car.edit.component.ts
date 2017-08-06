import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { Car } from '../models/Car'
import { Owner } from '../models/Owner'
import { CarService } from '../_services/car.service'

@Component({
  selector: 'car-edit',
  templateUrl: './car.edit.component.html'
})

export class CarEditComponent implements OnInit {
  carId: number
  car: Car
  owner: Owner
  owners: Owner[]

  constructor (private carService: CarService, private route: ActivatedRoute,
               private router: Router) {
    this.carId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit () {
    this.carService.getCarById(this.carId).then(car => { 
      this.car = car
      this.carService.getOwnerByCar(this.car.id).then(owner => this.owner = owner)
    })
    this.carService.getOwners().then(owners => this.owners = owners)
  }

  submitCar () {
    this.carService.editCar(this.car, this.owner)
    this.router.navigate([`./cars/${this.carId}`])
  }
}