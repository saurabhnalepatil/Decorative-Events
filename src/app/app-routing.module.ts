import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BackdropsComponent } from './backdrops/backdrops.component';
import { BallonDecorationComponent } from './ballon-decoration/ballon-decoration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventIdeaComponent } from './event-idea/event-idea.component';
import { GallaryComponent } from './gallary/gallary.component';
import { RentalDecorComponent } from './rental-decor/rental-decor.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'backdrops', component: BackdropsComponent },
  { path: 'balloon-deco', component: BallonDecorationComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'event-idea', component: EventIdeaComponent },
  { path: 'gallery', component: GallaryComponent },
  { path: 'rental-decor', component: RentalDecorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
