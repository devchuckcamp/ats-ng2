import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    constructor(
        public router: Router,
        private route: ActivatedRoute
        // private authService: AuthService
        ) { }

    ngOnInit() { 
        this.onLoggedin();        
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');

    }

}
