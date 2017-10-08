import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToasterModule,ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../../app.routing.module';
import { AppComponent } from '../../app.component';
//import { AuthGuard } from '../../shared/guard/auth.guard';
//Home
import { HomeRoutingModule } from '../home-routing.module';
import { HomeComponent } from '../home.component';
import { HomeModule } from '../home.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ToasterModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class JobsModule { }