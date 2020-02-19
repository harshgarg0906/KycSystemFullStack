import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../data-storage.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AdharDataFormat } from '../kycform/kycform.component';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit ,OnDestroy{

  constructor(private route:ActivatedRoute,private dataStorage:DataStorageService,private _snackBar: MatSnackBar) { }

  aadharUpdatedForm:FormGroup;
  paramsSubscription:Subscription;
  userExist:boolean=false;
  dataUploadImage:string;
  dataUploadAadharImage:string;

  aadharData:AdharDataFormat={
    'aadharId':0,
    'firstName':'',
    'lastName':'',
    'emailId':'',
    'phoneNumber':0,
    'profileImageUrl':'',
    'aadharUrl':'',   
  }
  ngOnInit(): void {

    this.aadharUpdatedForm=new FormGroup({
      'aadharId':new FormControl(null,[Validators.required]),
      'firstName':new FormControl(null,[Validators.required]),
      'lastName':new FormControl(null,[Validators.required]),
      'emailId':new FormControl(null,[Validators.required,Validators.email]),
      'phoneNumber':new FormControl(null,[Validators.required]),
      'profileImageUrl':new FormControl(null,[Validators.required]),
      'aadharUrl':new FormControl(null,[Validators.required]), 
    })
   this.paramsSubscription= this.route.params.subscribe((params:Params)=>{
      console.log(params['firstName'])
      console.log(params['adharId'])
      this.dataStorage.getKycDetailByNameAndAadharrNumber(params['firstName'],params['adharId']).subscribe((data:AdharDataFormat)=>{
        console.log('in the service hello')
        console.log(data)
        this.userExist=true;
        this.aadharUpdatedForm.patchValue({
          'firstName':data.firstName,
          'lastName':data.lastName,
          'emailId':data.emailId,
          'phoneNumber':data.phoneNumber,
          'aadharId':data.aadharId,
        })
      })
    })
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

  onSubmit()
  {
    this.aadharData=this.aadharUpdatedForm.value;
    this.aadharData.profileImageUrl=this.dataUploadImage
    this.aadharData.aadharUrl=this.dataUploadAadharImage;
    console.log(this.aadharData)
    this.dataStorage.updateAadharDetail(this.aadharData) 

    this._snackBar.open("data sent", "cancel", {
      duration: 2000,
    });

    this.aadharUpdatedForm.reset();
  }

  onCancel()
  {
    this.aadharUpdatedForm.reset();
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

}
