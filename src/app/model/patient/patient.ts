import { PatientVital } from './vital/vital';
import { PatientDiagnosisDetail } from './diagnosis/diagnosis';

export class Patient {
    id: number;
    fname:string;
    lname:string;
    mname:string;
    suffix:string;
    birth_date:string;
    contact_no:string;
    email:string;
    address:string;
    city:string;
    zip:string;
    patientcurrentmedication:string;
    patientdiagnosis:PatientDiagnosisDetail;
    patientfamilyhistory:Array<any>;
    patienthealthhistory:string;
    patientphysicalexam:PatientVital;
    patientprescription:Array<any>;
    prescriptionitems:Array<any>;    
}