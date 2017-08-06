import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Car } from '../models/Car'
import { CarService } from '../_services/car.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'comment-edit',
  templateUrl: './comment.edit.component.html',
  styleUrls: []
})

export class CommentEditComponent implements OnInit {
  message: string
  commentId: number
  car: Car

  constructor (private carService: CarService, private route: ActivatedRoute,
               private router: Router) {
    this.commentId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit () {
    this.carService.getCommentById(this.commentId)
      .then(comment => this.message = comment.message)
    this.carService.getCarByCommentId(this.commentId)
      .then(car => this.car = car)
  }

  submitComment () {
    this.carService.editComment(this.commentId, this.message)
    this.router.navigate([`./cars/${this.car.id}`])
  }
}