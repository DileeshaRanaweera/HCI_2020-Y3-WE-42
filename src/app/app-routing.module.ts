import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'
import{AboutUsComponent} from './about-us/about-us.component'
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { DirectoryComponent } from './directory/directory.component';
import { CareerComponent } from './career/career.component';
import { PortalLoginComponent } from './portal-login/portal-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BranchesComponent } from './branches/branches.component';
import { FaqsComponent } from './faqs/faqs.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"onlinepayment",component:OnlinePaymentComponent},
  {path:"directory",component:DirectoryComponent},
  {path:"career",component:CareerComponent},
  {path:"portallogin",component:PortalLoginComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"branches",component:BranchesComponent},
  {path:"faqs",component:FaqsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent=[
  HomeComponent,
  AboutUsComponent,
  OnlinePaymentComponent,
  DirectoryComponent,
  CareerComponent,
  PortalLoginComponent,
  ContactUsComponent,
  BranchesComponent,
  BranchesComponent
]
