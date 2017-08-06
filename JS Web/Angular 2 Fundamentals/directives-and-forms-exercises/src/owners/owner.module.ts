import { NgModule }           from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from '../app/routes.module'
import { CommonModule }       from '@angular/common'
import { OwnerListComponent }   from './owner.list.component'
import { OwnerDetailsComponent }   from './owner.details.component'
import { OwnerFormComponent }   from './owner.form.component'
import { OwnerEditComponent }   from './owner.edit.component'


@NgModule({
  imports: [ CommonModule, FormsModule, AppRoutesModule ],
  declarations: [ 
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerFormComponent,
    OwnerEditComponent
  ],
  exports: [
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerFormComponent,
    OwnerEditComponent
  ],
  providers: []
})
export class OwnerModule { }
