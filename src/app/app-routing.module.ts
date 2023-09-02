import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerStoreComponent } from './modules/store-customer/pages/customer-store/customer-store.component';
import { AboutComponent } from './modules/store-customer/pages/about/about.component';
import { ContactComponent } from './modules/store-customer/pages/contact/contact.component';

const routes: Routes = [
  {
    path: "", component: CustomerStoreComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "contact", component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
