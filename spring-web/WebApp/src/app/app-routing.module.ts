import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KycformComponent } from './kycform/kycform.component';
import { AadhardetailsComponent } from './aadhardetails/aadhardetails.component';
import { UpdateformComponent } from './updateform/updateform.component';


const routes: Routes = 
[
  {path:'',component:KycformComponent},
  {path:'kycform',component:KycformComponent},
  {path:'aadhardetails',component:AadhardetailsComponent},
  {path:'updatedetails/:firstName/:adharId',component:UpdateformComponent},
  {path:'**',redirectTo:'/kycform'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
