import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './weather.reducer';

export const getElementsState = createFeatureSelector<fromReducer.IWeatherState>(fromReducer.weatherFeatureKey);

export const getState = createSelector(getElementsState, (state: fromReducer.IWeatherState) => {
    return state
});

export const getWeathers = createSelector(getElementsState,
    (state: fromReducer.IWeatherState) => {
        console.log(state);
        
        return state.weather;
    });

