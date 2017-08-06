import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Car } from '../models/Car'
import { Owner } from '../models/Owner'
import { Comment } from '../models/Comment'
import { CarService } from '../_services/car.service'

@Component({
  selector: 'car-details',
  templateUrl: './car.details.component.html',
  styleUrls: ['./car.details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carId: string
  car: Car
  owner: Owner
  comments: Comment[]
  message: string = '';

  constructor(private route: ActivatedRoute, 
              private carService: CarService) {
    this.carId = this.route.snapshot.paramMap.get('id');
  }
 
  getCar(carId): void {
    this.carService.getCarById(carId)
      .then(car => {
        this.car = car
      })
  }

  getOwner(carId) : void {
    this.carService.getOwnerByCar(carId)
      .then(owner => {
        this.owner = owner
      })
  }

  getComments(carId): void {
    this.carService.getCommentByCar(carId)
      .then(comments => {
        this.comments = comments
      })
  }

  submitComment() {
    this.carService.createComment(this.carId, this.message)
    this.getComments(this.carId)
    this.message = ''
  }
 
  ngOnInit(): void {
    this.getCar(this.carId)
    this.getOwner(this.carId)
    this.getComments(this.carId)
  }
}