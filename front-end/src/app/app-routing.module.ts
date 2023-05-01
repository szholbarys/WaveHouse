import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtComponent } from './jwt/jwt.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:"jwt", component : JwtComponent},
  {path:"products", component: ProductsComponent},
  {path:'signup', component: SignupComponent},
  {path:'contact-us', component: ContactUsComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
