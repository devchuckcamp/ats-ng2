import { Component, OnInit } from '@angular/core';
// import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

//Model
import { User } from '../../model/user/index';
import { LoggedIn } from '../../model/loggedin/index';
//Services
// import { UserService } from '../../service/user/index';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private userAvatar:string;
    loggedIn:LoggedIn;
    private user:string;

    constructor(
        private _router: Router
    ) {}

    ngOnInit() {
        this.user = '';
        console.log(this._router.url);
        this.loggedIn = JSON.parse(localStorage.getItem('user'));
        console.log(this.loggedIn);
        
        // this.userService.getCredential(this.loggedIn.id).subscribe(
        //     res=>{ 
        //         console.log(res);
        //         this.user = res.name;
        //     },
        //     err=>{ console.log(err) }
        // );
    }

    private logOut(){
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('user');
            
            this._router.navigate(['/login']);
        
        
    }
        
}
