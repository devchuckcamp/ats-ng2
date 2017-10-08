import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//Model
import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls:['./sidebar.component.css']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';
    
    private AdminID = JSON.parse(localStorage.getItem("user"));

    //Sidebar Menus
    private dashboardMenu = '';
    private accountMenu = '';
    private ticketMenu = '';
    // private accountMenu = '';
    // private ticketMenu = '';
    private routedMenu = '';
    private systemMenu = '';
    private openMenu = '';
    private viewInfoRoute:string;
    //Model
    private loggedIn:LoggedIn;

    private account:number;
    private dashboar:number;
    private role:number;


    /* ====== For Optimization =======
    *  ======  High Priority   =======
    * Make these helpers reusable
    * by putting this into a module or something.
    * Injectable
    *
    */
    //Menu Restriction Helpers via Boolean
        private viewInfoMenu:boolean;
        private viewAppointmentMenu:boolean;
        private viewScheduleMenu:boolean;
        private viewPatientMenu:boolean;
        private viewDoctorMenu:boolean;
        private viewSecretaryMenu:boolean;
        private viewPharmacistMenu:boolean;
        private viewStatisticMenu:boolean;
        private viewLogMenu:boolean;
        private viewClinicMenu:boolean;
        private viewPharmacyMenu:boolean;
    // Menu Restriction Helpers Ends

    constructor(
        private _router: Router
    ) { 
        this.account = 0;
    }

    ngOnInit(){
        this.viewInfoMenu = false;
        this.loggedIn = JSON.parse(localStorage.getItem('user'));
        // console.log(this.loggedIn.role_id);
        this.role = 1;
        //Menu Restriction
        this.isAdmin();
        this.canViewPatient();
        this.canViewSchedule();
        this.canViewUserInfo();
        this.canRequestAppointment();
        this.canViewDoctor();
        this.canViewSecretary();
        this.canViewPharmacy();
        this.canViewClinic();
        this.canViewPharmacist();
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    getRole(){
        return this.role;
    }
    //Check if admin
    isAdmin(){
        let role = this.role;
        if(role == 1){
            this.viewStatisticMenu = true;
            this.viewLogMenu = true;
        }
    }
    //Schedule Restriction
    canViewSchedule(){
        let role = this.role;
        if(role == 2 || role == 3){
            this.viewScheduleMenu =  true;
        }else{
            this.viewScheduleMenu = false;  
        }
          
    }
    //Appointment
    canRequestAppointment(){
        let role = this.role;
        if(role == 5){
            this.viewAppointmentMenu = true;
        }else{
            this.viewAppointmentMenu = false; 
        }
        
    }
    //Doctor Restriction
    canViewDoctor(){
        let role = this.role;
        if(role == 1 ){
            this.viewDoctorMenu =  true;
        }else{
            this.viewDoctorMenu = false;
        }
        
    }
    //Secretary Restriction
    canViewSecretary(){
        let role = this.role;
        if(role == 1 ){
            this.viewSecretaryMenu = true;
        }else{
            this.viewSecretaryMenu = false; 
        }
        
    }
    //Patient Restriction
    canViewPatient(){
        let role = this.role;
        if(role == 1 || role == 2 || role == 3 || role == 4){
            this.viewPatientMenu = true;
        }else{
            this.viewPatientMenu = false;
        }
        
    }
    //Pharmacist Restriction
    canViewPharmacist(){
        let role = this.role;
        if(role == 1){
            this.viewPharmacistMenu = true;
        }else{
            this.viewPharmacistMenu =  false;
        }
    }
    //Pharmacy Restriction
    canViewPharmacy(){
        let role = this.role;
        if(role == 1 || role==4){
            this.viewPharmacyMenu = true;
        }else{
            this.viewPharmacyMenu =  false;
        }
    }
    //Clinic Restriction
    canViewClinic(){
        let role = this.role;
        if(role == 1 || role==4){
            this.viewClinicMenu = true;
        }else{
            this.viewClinicMenu =  false;
        }
    }
    //User Info Restriction
    canViewUserInfo():void{
        let role = this.role;
       
        if(role == 2){
            this.viewInfoRoute = '/dashboard/doctor/'+this.AdminID;
            this.viewInfoMenu = true;
        }
        if(role == 3){
            this.viewInfoRoute = '/dashboard/secretary/'+this.AdminID;
            this.viewInfoMenu = true;
        }
        if(role == 4){
            this.viewInfoRoute = '/dashboard/pharmacist/'+this.AdminID;
            this.viewInfoMenu = true;
        }
        if(role == 5){
            this.viewInfoRoute = '/dashboard/patient/'+this.AdminID;
            this.viewInfoMenu = true;
        }
        if(role == 1){
            this.viewInfoMenu = false;
        }
        console.log(this.viewInfoMenu);
        //return this.viewInfoMenu;
    }


    private checkRoute(target:string){
        console.log(this._router.url);
        var urlRoute = this._router.url.split("/");
        // console.log(urlRoute[1]);
        // console.log(urlRoute[2]);
        if(target===urlRoute[2]){
            return true;
        }
        return false;
    }
    private routeActive(route:string){
        // console.log(this._router.url);
        var urlRoute = this._router.url.split("/");
        // console.log(urlRoute);
        // console.log(urlRoute[2]);
        let currentRoute = urlRoute[2];
        if(currentRoute === route){
            return true;
        }
        return false;
    }

    private openToggle(route:string){
         //console.log(this._router.url);
        var urlRoute = this._router.url.split("/");
       //console.log(urlRoute);
        //console.log(urlRoute[2]);
        let currentRoute;
        if(urlRoute.length>2){
            currentRoute = urlRoute[2];
        }else{
            currentRoute = urlRoute[1];
        }
        
        if(currentRoute === route){
            //this.accountMenu = route;
            return true;
        }
        return false;
    }

    private toggleSidebar(target:string,classes: string):void {
       
        //Account
        if(target==='account'){
            if(this.accountMenu === classes){
                this.accountMenu = '';
            }else{
                this.accountMenu = classes;
            }
            this.ticketMenu = '';
        }
        //Ticket
        if(target==='ticket'){
            if(this.ticketMenu === classes){
                this.ticketMenu = '';
            }else{
                this.ticketMenu = classes;
            }
            this.accountMenu = '';
        }
    }

    


}
