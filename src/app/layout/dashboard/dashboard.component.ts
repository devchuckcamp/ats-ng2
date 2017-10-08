import { Component, OnInit } from '@angular/core';
// import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
//Custom
// import { MimsService } from '../../service/mims/';

//Models
import { User } from '../../model/user/';
//import { X2JS } from '../../service/mims/';
import * as xml2js from 'xml2js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    userCount:number;
    showModal:boolean;
    private loggedinID:any;
    
  
    constructor(
        private http:Http
    ) {
        
       
    }
    ngOnInit() {
        this.showModal = false;
        this.countUsers();
        console.log(xml2js); 
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public isLoggedIn(){
        if(localStorage.getItem('currentUser')){
            return true;
        }
        return false;
    }
    setID(){
        
    }
    
    countUsers(){
       
    }

    isModal(){
       if(this.showModal){
           console.log("Show Modal");
        return true;
       }
       console.log("Hide Modal");
       return false;
   }
   closeModal():void{
       this.showModal = false;
   }


   
    
}
