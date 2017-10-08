import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToasterModule,ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JobsComponent } from './jobs/jobs.component';
// import { AuthService } from './../service/auth/auth.service';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    ToasterModule,
    // NgbModule.forRoot(),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    JobsComponent
    ],
  providers:[]
})
export class HomeModule { }
