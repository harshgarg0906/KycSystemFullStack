import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class AuthService {
 isLoggedin:boolean=false;

 isAuthenticated(){
     const logedPromise=new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log('inthe settimeout')
             this.isLoggedin=true;
             resolve(this.isLoggedin)
         },8000)
     })

     return  logedPromise;
 }

 login(){
     this.isLoggedin=true
 }
 logout()
 {
     this.isLoggedin=false
 }

}