import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate{

    constructor(private login:AuthService,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{

       return  this.login.isAuthenticated().then((data)=>{
           console.log('Coming data')
           console.log(data)
            if(data)
            {
                console.log('in the data  function')
                console.log(data)
                return true;
            }
            else{
                this.router.navigate(['/'])
            }
        })
    }
}