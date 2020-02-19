import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../data-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
export interface AdharDataFormat{
  firstName:string,
  lastName:string,
  emailId:string,
  phoneNumber:number,
  profileImageUrl:string,
  aadharUrl:string,
  aadharId:number
}
@Component({
  selector: 'app-kycform',
  templateUrl: './kycform.component.html',
  styleUrls: ['./kycform.component.css']
})

export class KycformComponent implements OnInit {

  constructor(private dataService:DataStorageService,private _snackBar: MatSnackBar) { }
   dataUploadImage:string;
   dataUploadAadharImage:string;
   error:boolean=false;
   errorMessage:string;
  aadharData:AdharDataFormat={
    'aadharId':0,
    'firstName':'',
    'lastName':'',
    'emailId':'',
    'phoneNumber':0,
    'profileImageUrl':'',
    'aadharUrl':'',   
  }
  aadharForm:FormGroup;
  ngOnInit(): void {
    this.aadharForm=new FormGroup({
      'aadharId':new FormControl(null,[Validators.required]),
      'firstName':new FormControl(null,[Validators.required]),
      'lastName':new FormControl(null,[Validators.required]),
      'emailId':new FormControl(null,[Validators.required,Validators.email]),
      'phoneNumber':new FormControl(null,[Validators.required]),
      'profileImageUrl':new FormControl(null,[Validators.required]),
      'aadharUrl':new FormControl(null,[Validators.required]),     
    })
  }

  onSubmit()
  {
    console.log('in the function')
    this.aadharData=this.aadharForm.value;
    this.aadharData.profileImageUrl=this.dataUploadImage
    this.aadharData.aadharUrl=this.dataUploadAadharImage;
    console.log(this.aadharData)
    this.dataService.postAddharDetails(this.aadharData).subscribe((data)=>{
      console.log('last time printing')
      console.log(data)
    },(error)=>{
      this.error=true;
      this.errorMessage=error;
      console.log(error)
    });

    this._snackBar.open("data sent", "cancel", {
      duration: 2000,
    });

    this.aadharForm.reset();
  }

  onCancel()
  {
    console.log('in the cancle')
    this.aadharForm.reset();
  }


  onFileSelected(event)
  {
    console.log(event.target.files);
    this.dataUploadImage=event.target.files[0].name;
    console.log(event.target.files[0].name);
  }
  onFileSelectedAadhar(event)
  {
    console.log("hello")
    console.log(event);
    this.dataUploadAadharImage=event.target.files[0].name;
    console.log(this.dataUploadAadharImage);
  }
  resetError()
  {
    this.error=false;
    this.errorMessage='';
  }
}
