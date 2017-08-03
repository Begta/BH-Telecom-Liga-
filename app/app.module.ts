import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WelcomeComponent} from './home/welcome.component';
import { ClubsComponent } from './clubs/clubs.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: 
  [ 
    AppComponent,
    WelcomeComponent,
    ClubsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
