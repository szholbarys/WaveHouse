import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtComponent } from './signin/jwt.component';
import { ProductsComponent } from './surfboards/products.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { WetsuitsComponent } from './wetsuits/wetsuits.component';
import { FinsComponent } from './fins/fins.component';
import { SurfgearsComponent } from './surfgears/surfgears.component';
import { ClubComponent } from './club/club.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JwtComponent,
    ProductsComponent,
    SignupComponent,
    ContactUsComponent,
    HomeComponent,
    WetsuitsComponent,
    FinsComponent,
    SurfgearsComponent,
    ClubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}