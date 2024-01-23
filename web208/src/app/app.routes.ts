import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { guardGuard } from './Guard/guard.guard';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';

export const routes: Routes = [
{path:'', component:HomeComponentComponent },
{path:'detail/:id',component:ProductDetailComponentComponent},
{path:'detail',component:ProductDetailComponentComponent},
{path:'product',component:ProductComponentComponent},
{path:'login',component:LoginComponent},
{path:'adminproduct',component:ProductComponent},
{path:'dashboard',component:DashboardComponent,canActivate: [guardGuard],
children:[
    {path:'product',component:ProductComponentComponent},
   
]}


];





