import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatMenuTrigger, MatMenuModule, MatCheckboxModule, MatButtonToggleModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatMenuTrigger
  ]
})
export class MaterialModule {}