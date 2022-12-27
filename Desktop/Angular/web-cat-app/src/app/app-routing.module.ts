import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { AppComponent } from './components/app/app.component';

const routes: Routes = [
  { path : "products", component: ProductsComponent},
  { path : "", component: HomeComponent},
  { path : "add", component: ProductAddComponent},
  { path : "app", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
