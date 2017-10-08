import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
//import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent,FooterComponent } from '../common';
//import { ControlMessagesComponent } from '../service/validation/control-messages.component';
//import { AccountModule } from '../account/account.module';
import {MaterialModule} from '../material/material.module';
//Pagination
//import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        MaterialModule
    ],
   
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    providers:[
        
    ]
})
export class LayoutModule { }
