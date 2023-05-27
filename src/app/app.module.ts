import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { DefaultComponent } from './components/default/default.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { LegalComponent } from './components/legal/legal.component';
import { SalesComponent } from './components/sales/sales.component';
import { CashFlowComponent } from './components/cash-flow/cash-flow.component';
import { ButtonComponent } from './shared/ui/lib/button/button.component';
import { TooltipComponent } from './shared/ui/lib/tooltip/tooltip.component';
import { UploadComponent } from './shared/ui/lib/upload/upload.component';
import { DonutChartComponent } from './shared/ui/lib/donut-chart/donut-chart.component';
import { BarChartComponent } from './shared/ui/lib/bar-chart/bar-chart.component';
import { LineChartComponent } from './shared/ui/lib/line-chart/line-chart.component';
import { TableComponent } from './shared/ui/lib/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    DefaultComponent,
    UtilitiesComponent,
    VendorsComponent,
    MarketingComponent,
    LegalComponent,
    SalesComponent,
    CashFlowComponent,
    ButtonComponent,
    TooltipComponent,
    UploadComponent,
    DonutChartComponent,
    BarChartComponent,
    LineChartComponent,
    TableComponent,



  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxDatatableModule,
    NgChartsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
