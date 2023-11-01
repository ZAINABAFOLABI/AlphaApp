import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      this.authService.logOut();
      this.router.navigate(['/login'])
      return false;
    }
  }


  constructor(private authService:AuthService, private login: LoginComponent,
    private router:Router) { }


}
