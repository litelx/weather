import * as _ from 'lodash';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './weather.actions';
import { RequestWeather, WeatherItem } from '../models/city.model';

export const weatherFeatureKey = 'weather';

// State Type
export interface IWeatherState {
    weather: WeatherItem[];
}

// Initial state
export const initialState: IWeatherState = {
    weather: []
};

// REDUCER
const weatherReducers = createReducer(
    initialState,
    on(actions.AddWeather, (state, action) => ({ ...state, weather: [...state.weather, action.weather] })),
);

export function reducer(state: IWeatherState | undefined, action: Action) {
    return weatherReducers(state, action);
};
