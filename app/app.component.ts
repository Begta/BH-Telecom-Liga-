import { Component } from '@angular/core';

import { ClubService } from './clubs/club.service';

@Component({
    selector: 'bh-app',
    template: `
       <div><tb-clubs></tb-clubs></div>
    `,
    providers: [ClubService]
})
export class AppComponent {
 }
