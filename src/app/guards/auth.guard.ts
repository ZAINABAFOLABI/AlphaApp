// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
//   constructor(
//     public authService: AuthService,
//     public router: Router
//   ){

//   }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if(this.authService.isLoggedIn !== true) {
//         this.router.navigate(['login'])
//       }
//     return true;
//   }
//   canDeactivate(
//     component: unknown,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
  
// }
