import { Patient } from '../patient';
import { Doctor } from '../doctor';

export class Appointment {
    id: number;
    appointment_date: string;
    start: string;
    end: string;
    title:string;
    appointment_id:number;
    appointment_type_id:number;
    patient_id:number;
    doctor_id:number;
    set_by:string;
    set_date:string;
    set_time:string;
    is_allday:number;
    appointment_note:string;
    appointmentdetail:{
        appointment_id: number;
        appointment_type_id: number;
        patient_id: number;
        doctor_id: number;
        set_by: string;
        set_date: string;
        set_time: string;
        is_allday: number;
        appointment_note: string;
        patient:Patient;
        doctor:Doctor;
        appointmenttype:{
            id: 1;
            name: string;
            created_at: string;
            updated_at: string;
        }

    };
}