import { Component } from '@angular/core'


@Component({
  selector: 'style-article',
  templateUrl: './style.component.html'
})

export class StyleArticle {
  colours = ['red', 'green', 'blue']
  bgColor = null

  onChange(value) {
    console.log(value)
    this.bgColor = value
  }
}
