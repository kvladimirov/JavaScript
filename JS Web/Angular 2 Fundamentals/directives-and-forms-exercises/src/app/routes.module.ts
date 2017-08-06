import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../cars/home.component'
import { CarListComponent } from '../cars/car.list.component'
import { CarDetailsComponent } from '../cars/car.details.component'
import { CarFormComponent } from '../cars/car.form.component'
import { CarEditComponent } from '../cars/car.edit.component'
import { OwnerListComponent } from '../owners/owner.list.component'
import { OwnerDetailsComponent } from '../owners/owner.details.component'
import { OwnerFormComponent } from '../owners/owner.form.component'
import { OwnerEditComponent }   from '../owners/owner.edit.component'
import { CommentEditComponent }   from '../comments/comment.edit.component'
import { PageNotFoundComponent } from './pageNotFound.component '


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars/all', component: CarListComponent },
  { path: 'cars/create', component: CarFormComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'cars/edit/:id', component: CarEditComponent },
  { path: 'owners/all', component: OwnerListComponent },
  { path: 'owners/create', component: OwnerFormComponent },
  { path: 'owners/:id', component: OwnerDetailsComponent },
  { path: 'owners/edit/:id', component: OwnerEditComponent },
  { path: 'comments/edit/:id', component: CommentEditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
