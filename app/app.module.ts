import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { WelcomeComponent} from './home/welcome.component';
import { ClubsComponent } from './clubs/clubs.component';

@NgModule({
  imports: 
  [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: 
  [ 
    AppComponent,
    WelcomeComponent,
    ClubsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
