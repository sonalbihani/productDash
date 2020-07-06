import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "product-listing",
    component: ProductListingComponent
  },
  {
    path: "create-product",
    component: CreateProductComponent
  },
  {
    path: "edit-product/:productId",
    component: ProductEditComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
