import { createAction, props } from '@ngrx/store';
import { RequestWeather, WeatherItem } from '../models/city.model';

// actions types
export const AddWeather = createAction(
    'Add city',
    props<{ weather: WeatherItem }>()
);
