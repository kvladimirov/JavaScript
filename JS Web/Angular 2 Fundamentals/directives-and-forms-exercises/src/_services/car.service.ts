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

  getCarByCommentId(commentId): Promise<Car> {
    commentId = parseInt(commentId)
    return Promise.resolve(CARS.filter(car => car.comments.indexOf(commentId) > -1)[0]);
  }

  getCommentById(commentId) {
    commentId = parseInt(commentId)
    return Promise.resolve(COMMENTS.find(comment => comment.id === commentId))
  }

  createCar(car): Promise<Car[]> {
    car.id = CARS.length + 1
    car.date = Date.now()
    car.comments = []
    car.owner = parseInt(car.owner)
    car.ownerName = OWNERS.find(owner => owner.id === car.owner).name
    CARS.push(car)
    OWNERS.find(owner => owner.id === car.owner).cars.push(car.id)
    return Promise.resolve(CARS)
  }

  createOwner(owner) {
    owner.id = OWNERS.length + 1
    owner.cars = []
    OWNERS.push(owner)
  }

  createComment(carId, message) {
    carId = parseInt(carId)
    let id = COMMENTS.length + 1
    COMMENTS.push({
      id: id,
      car: carId,
      message: message
    })
    CARS.find(car => car.id === carId).comments.push(id)
  }

  editCar(car, oldOwner) {
    let editedCar = CARS.find(carData => carData.id === car.id)
    let cars = OWNERS.find(owner => owner.id === oldOwner.id).cars
    OWNERS.find(owner => owner.id === oldOwner.id).cars = cars.filter(c => c !== Number(car.id))

    editedCar.description = car.description
    editedCar.engine = car.engine
    editedCar.image = car.image
    editedCar.make = car.make
    editedCar.model = car.model
    editedCar.owner = parseInt(car.owner)
    editedCar.ownerName = OWNERS.find(owner => owner.id === Number(car.owner)).name
    editedCar.price = car.price
    OWNERS.find(owner => owner.id === editedCar.owner).cars.push(editedCar.id)
  }

  editOwner(owner) {
    let editOwner = OWNERS.find(ownerData => ownerData.id === owner.id)
    editOwner.name = owner.name
    editOwner.image = owner.image
  }

  editComment(commentId, message) {
    commentId = parseInt(commentId)
    let editComment = COMMENTS.find(comment => comment.id === commentId)
    editComment.message = message
  }
}