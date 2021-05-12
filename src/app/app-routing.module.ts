import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {OurDoctorsComponent} from './our-doctors/our-doctors.component';
import {MapComponent} from './map/map.component';
import {ContactComponent} from './contact/contact.component';
import {ReviewsComponent} from './reviews/reviews.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'our-doctors', component: OurDoctorsComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reviews', component: ReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }