import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Chart,registerables } from 'chart.js';
import{DataService} from './services/data.service';


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
import { HttpClientModule } from '@angular/common/http';
// import { AuthService } from './services/auth.service';


const firebaseConfig = {
  apiKey: "AIzaSyD0z5KApGWO5R_QvsDvh9hFuCJyY3Ub-zs",
  authDomain: "alphaapp-16065.firebaseapp.com",
  projectId: "alphaapp-16065",
  storageBucket: "alphaapp-16065.appspot.com",
  messagingSenderId: "640680362373",
  appId: "1:640680362373:web:e685711c6bd9a3e69cc4ec",
  measurementId: "G-49TQ9D7XXH"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    HttpClientModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
