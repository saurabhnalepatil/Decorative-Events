import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BallonDecorationComponent } from './ballon-decoration/ballon-decoration.component';
import { EventIdeaComponent } from './event-idea/event-idea.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RentalDecorComponent } from './rental-decor/rental-decor.component';
import { BackdropsComponent } from './backdrops/backdrops.component';
import { CustomSignsComponent } from './custom-signs/custom-signs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { SliderComponent } from './slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    GallaryComponent,
    BallonDecorationComponent,
    EventIdeaComponent,
    ContactUsComponent,
    RentalDecorComponent,
    BackdropsComponent,
    CustomSignsComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ServicesComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
