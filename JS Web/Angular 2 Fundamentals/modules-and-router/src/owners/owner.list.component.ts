import { Component, OnInit } from '@angular/core'
import { Owner } from '../models/Owner'
import { CarService } from '../_services/car.service'

import * as _ from 'underscore';

import { PagerService } from '../_services/index'

@Component({
  selector: 'all-owners',
  templateUrl: './owner.list.component.html',
  styleUrls: ['./owner.list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[]

  pager: any = {}
  pagedOwners: Owner[]

  sortedTypes: string[] = ['ascending', 'descending']

  constructor(private carService: CarService,
              private pagerService: PagerService) { }
 
  getOwners(): void {
    this.carService.getOwners()
      .then(owners => {
        this.owners = owners.sort((a, b) => a.name.localeCompare(b.name))
        this.setPage(1)
      })
  }
 
  ngOnInit(): void {
    this.getOwners()
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return
    }
    this.pager = this.pagerService.getPager(this.owners.length, page)
    this.pagedOwners = this.owners.slice(this.pager.startIndex, this.pager.endIndex + 1)
  }

  onChange(value, page) {
    if (value === 'ascending') {
       this.pagedOwners = this.owners.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (value === 'descending') {
       this.pagedOwners = this.owners.sort((a, b) => b.name.localeCompare(a.name))
    }

    this.setPage(page)
  }
}