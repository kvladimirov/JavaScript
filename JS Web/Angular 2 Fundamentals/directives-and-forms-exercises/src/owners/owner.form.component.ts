import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { Car } from '../models/Car'
import { Owner } from '../models/Owner'
import { CarService } from '../_services/car.service'

@Component({
  selector: 'owner-form',
  templateUrl: './owner.form.component.html'
})
export class OwnerFormComponent {
  owner = new Owner('', '')

  constructor(private carService: CarService,
              private router: Router) { }


  submitOwner() {
      this.carService.createOwner(this.owner)
      this.router.navigate(['./owners/all']);
  }
}
