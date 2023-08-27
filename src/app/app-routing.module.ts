import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { CashFlowComponent } from './components/cash-flow/cash-flow.component';
import { SalesComponent } from './components/sales/sales.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { LegalComponent } from './components/legal/legal.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserFeedbackComponent } from './components/user-feedback/user-feedback.component';
import { SalesRecordModalComponent } from './components/sales-record-modal/sales-record-modal.component';
import { SalesTargetComponent } from './components/sales-target/sales-target.component';

const routes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'default', component:DefaultComponent},
  {path:'cash-flow', component:CashFlowComponent},
  {path:'utilities', component:UtilitiesComponent},
  {path:'sales', component:SalesComponent},
  {path:'vendors', component:VendorsComponent},
  {path:'legal', component:LegalComponent},
  {path:'marketing', component:MarketingComponent},
  {path:'userSettings', component:SettingsComponent},
  {path:'feedback', component:UserFeedbackComponent},
  {path:'salesRecord', component:SalesRecordModalComponent},
  {path:'salesTarget', component:SalesTargetComponent},
  {path:'**',component:NotFoundComponent},


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
