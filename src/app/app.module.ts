import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule ,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { DirectoryComponent } from './directory/directory.component';
import { CareerComponent } from './career/career.component';
import { PortalLoginComponent } from './portal-login/portal-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BranchesComponent } from './branches/branches.component';
import { FaqsComponent } from './faqs/faqs.component';
//import { HomeComponent } from './home/home.component';
//import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    OnlinePaymentComponent,
    DirectoryComponent,
    CareerComponent,
    PortalLoginComponent,
    ContactUsComponent,
    BranchesComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
