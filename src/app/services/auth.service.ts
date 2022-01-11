// import { Injectable,NgZone } from '@angular/core';
// import{AngularFireAuth} from '@angular/fire/auth'
// import { provideAuth,getAuth,signInWithEmailAndPassword } from '@angular/fire/auth';
// import{FirebaseApp} from 'firebase/app';
// import { FirebaseSignInProvider } from '@firebase/util';
// import { Auth } from 'firebase/auth';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/switchmap';
// import { Router,ActivatedRoute } from '@angular/router';

// const routes = {
//   dashboard: "/dashboard"
// };
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
// authState:any=null;

//   constructor(
//     private afAuth:AngularFireAuth,
//     public ngZone: NgZone,
//     private router: Router
//   ) {
//     this.afAuth.authState.subscribe((auth:any)=>{
//       this.authState=auth
//     });
//     }
//     get isUserAnonymousLoggedIn(): boolean {
//       return (this.authState !== null) ? this.authState.isAnonymous : false
//     }

//     get currentUserId(): string {
//       return (this.authState !== null) ? this.authState.uid : ''
//     }
  
//     get currentUserName(): string {
//       return this.authState['email']
//     }
  
//     get currentUser(): any {
//       return (this.authState !== null) ? this.authState : null;
//     }
  
//     get isUserEmailLoggedIn(): boolean {
//       if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
//         return true
//       } else {
//         return false
//       }
//     }

//     loginWithEmail(email: string, password: string) {
//       return this.afAuth.auth.signInWithEmailAndPassword(email, password)
//         .then((user:any) => {
//           this.authState = user
//         })
//         .catch(error => {
//           console.log(error)
//           throw error
//         });
//     }
  
//     signOut(): void {
//       this.afAuth.auth.signOut();
//       this.router.navigate(['/'])
//     }
  

   
//    }
