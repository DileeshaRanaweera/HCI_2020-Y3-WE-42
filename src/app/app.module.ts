import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BellStoreContactUsComponent } from './bell-store-contact-us/bell-store-contact-us.component';
import { BellStoreRegisterComponent } from './bell-store-register/bell-store-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    BellStoreContactUsComponent,
    BellStoreRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
