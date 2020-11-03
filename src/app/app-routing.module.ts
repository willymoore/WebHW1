import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TravelRequestComponent} from './travel-request/travel-request.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: 'travel-component', component: TravelRequestComponent},
  {path: 'about-component', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
