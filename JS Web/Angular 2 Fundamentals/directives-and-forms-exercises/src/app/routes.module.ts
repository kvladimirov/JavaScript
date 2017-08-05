import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../cars/home.component'
import { CarListComponent } from '../cars/car.list.component'
import { CarDetailsComponent } from '../cars/car.details.component'
import { CarFormComponent } from '../cars/car.form.component'
import { OwnerListComponent } from '../owners/owner.list.component'
import { OwnerDetailsComponent } from '../owners/owner.details.component'
import { PageNotFoundComponent } from './pageNotFound.component '

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars/all', component: CarListComponent },
  { path: 'cars/create', component: CarFormComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'owners/all', component: OwnerListComponent },
  { path: 'owners/:id', component: OwnerDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
