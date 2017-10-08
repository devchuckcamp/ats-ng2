export class PatientPrescription {
    id:number;
    fname:string
    lname:string;
    mname:string;
    birth_date:string;
    city:string;
    contact_no:string;
    created_at:string;
    email:string;
    patientcurrentmedication:string;
    patientdiagnosis:Array<any>;
    patientfamilyhistory:Array<any>;
    patienthealthhistory:string;
    patientphysicalexam:Array<any>;
    patientprescription:Array<any>;
    prescriptionitems:Array<any>;
}