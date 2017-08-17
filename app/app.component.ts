import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ClubService } from './clubs/club.service';
@Component({
    selector: 'bh-app',
    template: `
       <div>
            <nav class='navbar navbar-default navbar-fixed-top'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Početna</a></li>
                        <li><a [routerLink]="['/clubs']">Spisak Timova</a></li>
                    </ul>
                    <div class='margin-right'>
                        <form class='navbar-form navbar-right'>
                            <div class="form-group">
                                <input type="text" class="form-control searchcss"  (keyup)="onKey($event)" placeholder="Search">
                            </div>
                            <button type="submit" class="btn btn-default submitcss" (click)="onClickMe()">Submit</button>
                        </form>
                    </div>
            </nav> 
                <router-outlet></router-outlet>
        </div>
    `,
    providers: [ClubService]
})
export class AppComponent {
    pageTitle: string;
    clickMessage: string;      
    values: string;

    onKey(event: any) { // without type info
            this.values = event.target.value;

    }

    onClickMe() {
    }

}
