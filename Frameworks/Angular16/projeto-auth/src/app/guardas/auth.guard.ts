import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicos/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivateFn {

   constructor (private authService: AuthService, private router: Router) {}

   canActivate():boolean{
     if (this.authService.estaAutenticado()){
      return true;
     }
     this.router.navigate(['/login']);
     return false;
   }
}

