import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ShowCalendarService {

  constructor(private http: HttpClient) { }

  getShows(){
  	return this.http.get('http://localhost:8080/api/shows');
  }
}
