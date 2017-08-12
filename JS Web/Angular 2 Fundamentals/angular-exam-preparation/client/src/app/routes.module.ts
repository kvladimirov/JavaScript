import {  NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StatsComponent } from './stats/stats.component'
import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login.component'
import { ProfileComponent } from './users/profile.component'
import { AddCarComponent } from './cars/add-car.component'
import { CarDetailsComponent } from './cars/car-details.component'
import { ListCarsComponen } from './cars/list-cars.component'

import { PrivateRoute } from './core/private-route'



const routes: Routes = [
    { path: '', component: StatsComponent},
    { path: 'users/register', component: RegisterComponent  },
    { path: 'users/login', component: LoginComponent  },
    
    { 
      path: 'cars/add', 
      component: AddCarComponent,
      canActivate: [PrivateRoute] 
    },
    { path: 'cars/all', component: ListCarsComponen },
    { path: 'cars/details/:id', component: CarDetailsComponent },
    { path: 'users/profile', component: ProfileComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CarRoutesModule{

}