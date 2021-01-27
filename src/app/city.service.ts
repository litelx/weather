import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestWeather, WeatherUnit, apiItem, WeatherItem } from './models/city.model';
import * as actions from './store/weather.actions';
import { IWeatherState } from './store/weather.reducer';

@Injectable({
    providedIn: 'root'
})
export class CityService {

    constructor(private http: HttpClient,
        private stateStore: Store<{ weather: IWeatherState }>
    ) { }

    public getWeather(weather: RequestWeather) {
        const request = this.convertToApi(weather);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: key
            })
        };

        this.http.get(`${url}/data/2.5/find?q=${request.q}&appid=${key}&units=${request.unit}`)
            .pipe(
                catchError(this.handleError))
            .subscribe((observer: any) => {
                if (observer.list.length) {
                    const weather: WeatherItem = {
                        city: observer.list[0].name,
                        temp: Math.floor(observer.list[0].main.temp - 273),
                        description: observer.list[0].weather[0].main
                    }
                    this.setWeather(weather);
                } else {
                    return 'no data found';
                }
            });
    }

    public convertToApi(weather: RequestWeather): apiItem {
        return {
            q: weather.city,
            unit: WeatherUnit[weather.unit].toLowerCase(),
            appid: key
        }
    }

    private setWeather(weather: WeatherItem): void {
        this.stateStore.dispatch(actions.AddWeather({ weather: weather }));
    }

    private handleError(err: any): Observable<never> {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
      }
}
const url = 'https://openweathermap.org/';
const key = '439d4b804bc8187953eb36d2a8c26a02';
// const key = '0d7303c17ee3d3482cd82a2ad273a90d';

