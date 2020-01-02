import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  api = 'http://api.openweathermap.org/data/2.5/weather?q=Zagreb&APPID='; 
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getWeather() : Observable<Weather>{
    return this.http.get<Weather>(this.api + this.apiKey);
  }
}
