import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';
import { HttpClient } from '@angular/common/http';
import { ShowCalendarService } from './show-calendar.service';

@Component({
  selector: 'app-show-calendar',
  templateUrl: './show-calendar.component.html',
  styleUrls: ['./show-calendar.component.css'],
  providers: [ ShowCalendarService ]
})
export class ShowCalendarComponent implements OnInit {
  currentDate;
  options: FullCalendarOptions;
  events: EventObject[];
  shows = [];

  constructor(private http: HttpClient, private calendarService: ShowCalendarService) {
    var today = new Date();
    this.currentDate = today.getFullYear() + '-' + ('0'+(today.getMonth()+1)).slice(-2) + '-' + ('0'+today.getDate()).slice(-2);

    this.calendarService.getShows().subscribe((shows: any) => {
        for(var i=0; i<shows.length; i++){
          this.shows.push({
            'id': shows[i].ShowId,
            'title': shows[i].Movie.MovieName,
            'start': shows[i].ShowDateTime
          });
        }
    });
  }

  ngOnInit() {
  	this.options = {
  	  defaultDate: this.currentDate,
  	  editable: true
  	};

  	this.events = this.shows;
  }	

}
