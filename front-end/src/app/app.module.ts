import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtComponent } from './jwt/jwt.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PtoductDetailsComponent } from './ptoduct-details/ptoduct-details.component';


@NgModule({
  declarations: [
    AppComponent,
    JwtComponent,
    ProductsComponent,
    SignupComponent,
    ContactUsComponent,
    HomeComponent,
    PtoductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}