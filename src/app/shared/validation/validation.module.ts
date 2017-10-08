import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlMessagesComponent } from '../../service/validation/control-messages.component';


@NgModule({
    declarations: [ControlMessagesComponent],
    exports: [ ControlMessagesComponent ]
})
export class ControlMessagesModule { }
