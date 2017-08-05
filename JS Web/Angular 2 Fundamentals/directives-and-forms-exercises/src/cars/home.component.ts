import { Component, OnInit } from '@angular/core'
import { Car } from '../models/Car'
import { CarService } from '../_services/car.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Car[]
  selectedCar: Car

  constructor(private carService: CarService) { }
 
  getCars(): void {
    this.carService.getCars()
      .then(cars => {
        cars = cars.sort((a, b) => b.date - a.date).slice(0, 6)
        this.cars = cars
      })
  }
 
  ngOnInit(): void {
    this.getCars()
  }

  selectCar(car: Car): void {
      this.selectedCar = car
  }
}