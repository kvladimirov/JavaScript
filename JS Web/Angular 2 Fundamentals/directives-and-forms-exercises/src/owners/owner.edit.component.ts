import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Owner } from '../models/Owner'
import { CarService } from '../_services/car.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'owner-edit',
  templateUrl: './owner.edit.component.html',
  styleUrls: []
})

export class OwnerEditComponent implements OnInit {
  owner: Owner
  ownerId: number

  constructor (private carService: CarService, private route: ActivatedRoute,
               private router: Router) {
    this.ownerId = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit () {
    this.carService.getOwnerById(this.ownerId)
      .then(owner => this.owner = owner)
  }

  submitOwner () {
    this.carService.editOwner(this.owner)
    this.router.navigate([`./owners/${this.ownerId}`])
  }
}