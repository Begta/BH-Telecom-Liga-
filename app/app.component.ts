import { Component } from '@angular/core';

import { ClubService } from './clubs/club.service';

@Component({
    selector: 'bh-app',
    template: `
       <div>
            <nav class='navbar navbar-default'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Početna</a></li>
                        <li><a [routerLink]="['/clubs']">Spisak Timova</a></li>
                    </ul>
            </nav> 
                <router-outlet></router-outlet>
        </div>
    `,
    providers: [ClubService]
})
export class AppComponent {
    pageTitle: string = ''
}
