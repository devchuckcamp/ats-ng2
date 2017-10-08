import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlMessagesComponent } from '../../service/validation/control-messages.component';
const routes: Routes = [
    { path: '', component: ControlMessagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationRoutingModule { }
