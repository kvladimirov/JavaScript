import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Owner } from '../models/Owner'
import { Car } from '../models/Car'
import { CarService } from '../_services/car.service'

@Component({
  selector: 'owner-details',
  templateUrl: './owner.details.component.html',
  styleUrls: ['./owner.details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  ownerId: string
  owner: Owner
  cars: Car[]

  constructor(private route: ActivatedRoute,
              private carService: CarService) {
    this.ownerId = this.route.snapshot.paramMap.get('id');
  }
 
  getOwner(ownerId): void {
    this.carService.getOwnerById(ownerId)
      .then(owner => {
        this.owner = owner
      })
  }

  getCars(ownerId): void {
    this.carService.getCarsByOwner(ownerId)
      .then(cars => {
        this.cars = cars
      })
  }
 
  ngOnInit(): void {
    this.getOwner(this.ownerId)
    this.getCars(this.ownerId)
  }
}