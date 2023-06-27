import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtComponent } from './signin/jwt.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './surfboards/products.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WetsuitsComponent } from './wetsuits/wetsuits.component';
import { FinsComponent } from './fins/fins.component';
import { SurfgearsComponent } from './surfgears/surfgears.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:"jwt", component : JwtComponent},
  {path:"products", component: ProductsComponent},
  {path:'signup', component: SignupComponent},
  {path:'contact-us', component: ContactUsComponent}, 
  {path:'wetsuits', component: WetsuitsComponent},
  {path:'fins', component: FinsComponent},
  {path:'surfgears', component: SurfgearsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
