import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ClubsFilterPipe } from './clubs/clubs-filter.pipe';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { WelcomeComponent} from './home/welcome.component';
import { ClubsComponent } from './clubs/clubs.component';

@NgModule({
  imports: 
  [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'clubs', component: ClubsComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'},
      {path: '**',redirectTo:'welcome',pathMatch:'full'}
    ])
   
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
