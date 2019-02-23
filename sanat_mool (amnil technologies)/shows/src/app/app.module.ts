import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';

import { AppComponent } from './app.component';
import { ShowCalendarComponent } from './show-calendar/show-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCalendarComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    NgxFullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
