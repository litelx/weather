import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityService } from '../city.service';
import { RequestWeather, WeatherItem, WeatherUnit } from '../models/city.model';
import { IWeatherState } from '../store/weather.reducer';
import { getWeathers } from '../store/weather.selector';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
    public weather$: Observable<WeatherItem[]>

    constructor(private stateStore: Store<{ weather: IWeatherState }>) {
            this.weather$ = stateStore.select(getWeathers);
    }

    ngOnInit() {
    }

}
