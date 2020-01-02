import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ApplicationRef} from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';
import { Weather } from './weather-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'ing-wind';

  weather: Weather;

  constructor(private weatherService: WeatherService, private app: ApplicationRef) {
  }

  ngOnInit(){
    // this.cd.markForCheck();
    this.weatherService.getWeather().subscribe(
      (data: Weather) => {
        this.weather = data;
        console.log(this.weather);
        this.app.tick();
      }
    )
  }
}
