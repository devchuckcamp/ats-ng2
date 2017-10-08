import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from './../shared';
import { ControlMessagesComponent } from '../service/validation/control-messages.component';
const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'dashboard/schedule', loadChildren: '../schedule/schedule.module#ScheduleModule' },

            // //Profile
            // { path: 'dashboard/profile/:id', loadChildren: './../profile/profile-detail.module#ProfileDetailModule' },

            // //Patient
            // { path: 'dashboard/patient', loadChildren: './../patient/patient.module#PatientModule' },
            // { path: 'dashboard/patient/create', loadChildren: './../patient/patient-create.module#PatientCreateModule' },
            // { path: 'dashboard/patient/:id', loadChildren: './../patient/patient-detail.module#PatientDetailModule' },
            
            // //Doctor
            // { path: 'dashboard/doctor', loadChildren: './../doctor/doctor.module#DoctorModule' },
            // { path: 'dashboard/doctor/create', loadChildren: './../doctor/doctor-create.module#DoctorCreateModule' },
            // { path: 'dashboard/doctor/:id', loadChildren: './../doctor/doctor-detail.module#DoctorDetailModule' },
            
            // //Clinic
            // { path: 'dashboard/clinic', loadChildren: './../clinic/clinic.module#ClinicModule' },
            // { path: 'dashboard/clinic/create', loadChildren: './../clinic/clinic-create.module#ClinicCreateModule' },
            // { path: 'dashboard/clinic/:id', loadChildren: './../clinic/clinic-detail.module#ClinicDetailModule' },

            // //Pharmacist
            // { path: 'dashboard/pharmacist', loadChildren: './../pharmacist/pharmacist.module#PharmacistModule' },
            // { path: 'dashboard/pharmacist/create', loadChildren: './../pharmacist/pharmacist-create.module#PharmacistCreateModule' },
            // { path: 'dashboard/pharmacist/:id', loadChildren: './../pharmacist/pharmacist-detail.module#PharmacistDetailModule' },

            // //Pharmacy
            // { path: 'dashboard/pharmacy', loadChildren: './../pharmacy/pharmacy.module#PharmacyModule' },
            // { path: 'dashboard/pharmacy/create', loadChildren: './../pharmacy/pharmacy-create.module#PharmacyCreateModule' },
            // { path: 'dashboard/pharmacy/:id', loadChildren: './../pharmacy/pharmacy-detail.module#PharmacyDetailModule' },

            // //Appointment
            // { path: 'dashboard/appointment', loadChildren: './../schedule/schedule.module#ScheduleModule' },

            // //Secretary
            // { path: 'dashboard/secretary', loadChildren: './../secretary/secretary.module#SecretaryModule' },
            // { path: 'dashboard/secretary/create', loadChildren: './../secretary/secretary-create.module#SecretaryCreateModule' },
            // { path: 'dashboard/secretary/:id', loadChildren: './../secretary/secretary-detail.module#SecretaryDetailModule' },
            
            // //Audit Trail
            // { path: 'dashboard/audit', loadChildren: './../audit/audit.module#AuditModule' },

           

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
