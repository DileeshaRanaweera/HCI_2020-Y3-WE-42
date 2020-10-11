import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BellStoreContactUsComponent } from './bell-store-contact-us/bell-store-contact-us.component';
import { BellStoreRegisterComponent } from './bell-store-register/bell-store-register.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { StorehomeComponent } from './storehome/storehome.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [{path:"shoppingCart" ,component:ShoppingCartComponent },
{path:"contactus" ,component:BellStoreContactUsComponent },{path:"register" ,component:BellStoreRegisterComponent },{path: "storehome", component: StorehomeComponent}, 
{path: "addressbook", component: AddressbookComponent}, 
{path: "wishlist", component: WishlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
