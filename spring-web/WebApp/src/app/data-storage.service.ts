import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {AdharDataFormat} from './kycform/kycform.component'
import { catchError } from 'rxjs/operators'; 
import { throwError } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8000/user-kyc/data"
  getKycDetail()
  {
    console.log('in the kyc detail')
    this.http.get(this.baseUrl).subscribe((data)=>{
      console.log(data);
    })
  }

  getKycDetailByNameAndAadharrNumber(firstName:string,aadharName:string)
  {
    const name=firstName;
    const aadhar=aadharName;
    let searchparams=new HttpParams();
    searchparams=searchparams.append('firstName',name)
    searchparams=searchparams.append('adharId',aadhar)
   
   
    return this.http.get("http://localhost:8000/user-kyc/data",{ params:searchparams})
  }

  postAddharDetails(data:AdharDataFormat)
  {
    console.log('printing for the lat time')
    console.log(data)
    return this.http.post("http://localhost:8000/user-kyc/data",data).pipe(catchError((error)=>{
      console.log(error)
      const errorMessage='An error has occurerd'
     return  throwError(errorMessage)
    }));
  }
  updateAadharDetail(data:AdharDataFormat)
  {
   this.http.patch("http://localhost:8000/user-kyc/data",data).subscribe((data)=>{
     console.log('in the patch subscriber')
     console.log(data)
   })
  }
}
