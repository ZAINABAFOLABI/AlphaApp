import { Injectable } from '@angular/core';
import { provideAuth,getAuth,signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { FirebaseSignInProvider } from '@firebase/util';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private provideAuth:Auth
  ) {
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });

   
    }
 

    // Login(email:string, password:string){
    //   return new Promise((resolve, reject) => {
    //     this.provideAuth.signInWithEmailAndPassword(email,password)
    //     .then(userData=>resolve(userData),
    //     err=>reject(err))
        
    //   })
    // }
   }

 

