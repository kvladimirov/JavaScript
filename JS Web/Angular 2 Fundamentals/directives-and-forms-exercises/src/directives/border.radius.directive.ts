import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[border-radius]'
})

export class BorderRadiusDirective {
  constructor (private el: ElementRef) {
    this.el.nativeElement.style.borderRadius = '10%'
  }
}