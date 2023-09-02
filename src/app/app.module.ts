import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CategoryPanelComponent } from './layout/navbar/category-panel/category-panel.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CustomerStoreComponent } from './modules/store-customer/pages/customer-store/customer-store.component';
import { AboutComponent } from './modules/store-customer/pages/about/about.component';
import { ContactComponent } from './modules/store-customer/pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryPanelComponent,
    FooterComponent,
    CustomerStoreComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
