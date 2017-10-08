import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {ToasterModule, ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'app-home',
    templateUrl: './jobs.component.html',
    styleUrls:['../../app.component.css']
})
export class JobsComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    jobs = [
        {   
            id:1,
            title:"Web Developer",
            description:"Must be proficient with Laravel 5.+ Framework for building RESTful API",
            level:"more than 1 year experience",
            qualifications:[
                {
                    skills:"Laravel"
                },
                {
                    skills:"PHP"
                },
                
            ]
        },
        {
            id:2,
            title:"Full Stack Software Engineer",
            description:"Must be proficient with Laravel 5.+ Framework, Linux Configuration, Cloud Architecture, Front-end frameworks, Node.JS, Continous Integration and Delivery",
            level:"5+ years experience",
            qualifications:[
                {
                    skills:"Laravel"
                },
                {
                    skills:"Test Automation"
                },
                {
                    skills:"RESTful API"
                },
                {
                    skills:"Angular 2/4.0"
                },
                {
                    skills:"React"
                },
                {
                    skills:"Linux"
                },
                {
                    skills:"AWS - Amazon EC2"
                }
            ]
        }
    ];

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        // private authService: AuthService
        ) { 
        }

    ngOnInit() { 
        //this.onLoggedin();
        // localStorage.setItem('isLoggedin','true');
        // localStorage.setItem('currentUser','true');
        // if(localStorage.getItem('isLoggedin') && localStorage.getItem('currentUser')){
        //   //localStorage.setItem('currentUser','admin123');
        //    if(this.route.snapshot.queryParams['returnUrl']){
        //       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //       this.router.navigate([this.returnUrl]);
        //     }else{
        //       this.router.navigate(['/dashboard']);
        //     }
        // }else{
        //   this.returnUrl = '/home';
        // }
        
    }

    // onLoggedin() {
    //     localStorage.setItem('isLoggedin', 'true');
    // }

   

}
