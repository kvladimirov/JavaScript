import { Component, Input, OnInit } from '@angular/core'
import { Article } from './Article'


@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetails {
  @Input() article: Article
  showHide: boolean = true
  length: number
  colours: string[] = ['white', 'red', 'green', 'blue', 'yellow']
  coloursForText: string[] = ['black', 'red', 'green', 'blue', 'yellow']
  bgColor: string = null
  txColor: string = null
  bgSize: number = 18

  onChange(value) {
    console.log(value)
    this.bgColor = value
  }

  onChangeText(value) {
    this.txColor = value
  }

  ngOnInit(): void {
    this.length = 250
  }

  changeShowStatus(){
    this.showHide = !this.showHide;
  }

  showMore(text) {
    this.length += 250
  }

  add() {
    if (this.bgSize > 30) {
      return
    }
    this.bgSize++
  }

  subtract() {
    if (this.bgSize < 14) {
      return
    }
    this.bgSize--
  }
}
