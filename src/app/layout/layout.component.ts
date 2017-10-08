import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls:['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    private pageTitle = 'Account';
    model: any = {};
    returnUrl: string;
    loading = false;
    private accountSelected:boolean;

    constructor(
        public router: Router,

        ) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
            this.getAllUser();
        }
    }

     private getAllUser(){

    }

}
