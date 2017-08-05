import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { CARS } from '../Data'
import { Owner } from '../models/Owner';
import { OWNERS } from '../Data'
import { Comment } from '../models/Comment';
import { COMMENTS } from '../Data'


@Injectable()
export class CarService {

  getCars(): Promise<Car[]> {
    return Promise.resolve(CARS);
  }

  getCarById(carId): Promise<Car> {
    carId = parseInt(carId)
    return Promise.resolve(CARS.filter(car => car.id === carId)[0]);
  }

  getCarsByOwner(ownerId): Promise<Car[]> {
    ownerId = parseInt(ownerId)
    return Promise.resolve(CARS.filter(car => car.owner === ownerId));
  }

  getOwners(): Promise<Owner[]> {
    return Promise.resolve(OWNERS);
  }

  getOwnerById(ownerId): Promise<Owner> {
    ownerId = parseInt(ownerId)
    return Promise.resolve(OWNERS.filter(owner => owner.id === ownerId)[0]);
  }

  getOwnerByCar(carId): Promise<Owner> {
    carId = parseInt(carId)
    return Promise.resolve(OWNERS.filter(owner => owner.cars.indexOf(carId) > -1)[0]);
  }

  getCommentByCar(carId): Promise<Comment[]> {
    carId = parseInt(carId)
    return Promise.resolve(COMMENTS.filter(comment => comment.car === carId));
  }

  createCar(car): void{
    car.id = CARS.length + 1
    car.date = Date.now()
    car.owner = OWNERS.find(owner => owner.name === car.ownerName).id
    car.comments = []
    CARS.push(car)
    OWNERS.find(o => o.id === Number(car.owner)).cars.push(Number(car.id))
    console.log(CARS)
  }
}