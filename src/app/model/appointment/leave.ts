export class Leave {
    id: number;
    title: "Appointment Request";
    start: "13:58";
    end: "14:58";
    created_at: "2017-07-03 20:58:47";
    updated_at: "2017-07-03 20:58:47";
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
    };
}