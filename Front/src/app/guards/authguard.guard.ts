import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private auth:AuthenticationService, private router: Router) {

  }

  canActivate() {
    if(this.auth.IsLogged()){
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
  
}
