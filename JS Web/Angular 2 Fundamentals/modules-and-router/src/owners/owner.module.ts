import { NgModule }           from '@angular/core'
import { CommonModule }       from '@angular/common'
import { OwnerListComponent }   from './owner.list.component'
import { OwnerDetailsComponent }   from './owner.details.component'


@NgModule({
  imports: [ CommonModule],
  declarations: [ 
    OwnerListComponent,
    OwnerDetailsComponent
  ],
  exports: [
    OwnerListComponent,
    OwnerDetailsComponent
  ],
  providers: []
})
export class OwnerModule { }
