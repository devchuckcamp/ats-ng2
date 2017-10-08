import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
//import { StatModule } from '../../shared';
// import { CalendarModule } from '../../shared/calendar/calendar.module';

//Custom
// import { MimsService } from '../../service/mims/mims.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        // CalendarModule,
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent
    ],
    providers:[

    ],
})
export class DashboardModule { }
