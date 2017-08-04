import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ClubsFilterPipe } from './clubs/clubs-filter.pipe';
import { HttpModule } from '@angular/http';
//import { NgStyle } from '@angular/common';

import { AppComponent }  from './app.component';
import { WelcomeComponent} from './home/welcome.component';
import { ClubsComponent } from './clubs/clubs.component';

@NgModule({
  imports: 
  [ 
    BrowserModule,
    FormsModule,
    HttpModule
  //  NgStyle 
  ],
  declarations: 
  [ 
    AppComponent,
    WelcomeComponent,
    ClubsComponent,
    ClubsFilterPipe, 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
