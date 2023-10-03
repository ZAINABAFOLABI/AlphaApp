import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
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
import { NgxsModule } from '@ngxs/store';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesService } from './services/sales.service';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserFeedbackComponent } from './components/user-feedback/user-feedback.component';
import { SalesRecordModalComponent } from './components/sales-record-modal/sales-record-modal.component';
import { SalesTargetComponent } from './components/sales-target/sales-target.component';
import { FeedbackService } from './services/feedback.service';
import { VendorService } from './services/vendor.service';




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
    RegisterComponent,
    TooltipComponent,
    UploadComponent,
    DonutChartComponent,
    BarChartComponent,
    LineChartComponent,
    TableComponent,
    SettingsComponent,
    UserFeedbackComponent,
    SalesRecordModalComponent,
    SalesTargetComponent,




  ],
  imports: [
    // NgModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxDatatableModule,
    NgChartsModule,
    BrowserAnimationsModule,
    NgxsModule,
    // MatPaginatorModule,
    // MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
providers: [AuthService,SalesService,DatePipe,FeedbackService,VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
