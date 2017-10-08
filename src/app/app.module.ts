import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToasterModule,ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
// BOOTSTRAP
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// CUSTOM
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// Material
import { MaterialModule } from './material/material.module';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './reducers/todo.reducer';

// SERVICE
import { AuthGuard } from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    ToasterModule,
    StoreModule.forRoot({ todoReducer }),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
