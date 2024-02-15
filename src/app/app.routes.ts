import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from "@angular/router";
import { ProductComponent } from './components/product/product.component';


export const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }