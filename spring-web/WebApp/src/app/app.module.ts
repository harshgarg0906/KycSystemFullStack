import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { KycformComponent } from './kycform/kycform.component';
import { AadhardetailsComponent } from './aadhardetails/aadhardetails.component';
import { UpdateformComponent } from './updateform/updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    KycformComponent,
    AadhardetailsComponent,
    UpdateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
