import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../data-storage.service';
import { Router } from '@angular/router';

export interface Details
{
  firstName:string;
  aadharNumber:number
}
@Component({
  selector: 'app-aadhardetails',
  templateUrl: './aadhardetails.component.html',
  styleUrls: ['./aadhardetails.component.css']
})


export class AadhardetailsComponent implements OnInit {

  constructor(private dataService:DataStorageService,private router:Router) { }
  detailForm:FormGroup;
  dataSend:Details

  ngOnInit(): void {
    this.detailForm=new FormGroup({
      'firstName':new FormControl(null,[Validators.required]),
      'aadharNumber':new FormControl(null,[Validators.required])
    })
  }

  onSubmit()
  {
    console.log(this.detailForm.value)
    const firstName=this.detailForm.value.firstName;
    const aadharNumber=this.detailForm.value.aadharNumber;
    this.dataService.getKycDetailByNameAndAadharrNumber(firstName,aadharNumber);
    this.router.navigate(['updatedetails',firstName,aadharNumber])
  }

}
