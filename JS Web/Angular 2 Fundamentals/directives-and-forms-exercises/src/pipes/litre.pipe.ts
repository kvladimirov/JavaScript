import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'litre'
})

export class LitrePipe implements PipeTransform {
  transform (value: string) {
    return value + ' Litre'
  }
}