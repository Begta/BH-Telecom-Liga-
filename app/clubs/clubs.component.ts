import { Component, OnInit } from '@angular/core';

import { IClubs } from './clubs';
import { ClubService } from './club.service';

@Component({
    selector: 'tb-clubs',
    templateUrl: 'app/clubs/clubs.component.html',
    styleUrls: ['app/clubs/clubs.component.css']
})
export class ClubsComponent implements OnInit {
    pageTitle: string = 'Spisak klubova učesnika BH Telecom Premier Lige 2017/2018'
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string;
    clubs: IClubs []  = [];
    errorMessage: string;
    constructor( private _clubService: ClubService) {}
    
    ngOnInit(): void{
        this._clubService.getClubs()
            .subscribe(
                clubs => this.clubs = clubs,
                error => this.errorMessage = <any>error);
        }
        
    
}

