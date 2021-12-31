import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent}

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
