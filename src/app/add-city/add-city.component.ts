import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { CityService } from '../city.service';
import { RequestWeather, WeatherUnit } from '../models/city.model';

@Component({
    selector: 'add-city',
    templateUrl: './add-city.component.html',
    styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

    weather: RequestWeather;
    unit = WeatherUnit;
    public form: FormGroup;
    message: string = '';


    constructor(
        private formBuilder: FormBuilder,
        private cityService: CityService) {
        this.form = this.formBuilder.group({
            city: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            units: ['', [Validators.required]]
        });

    }
    ngOnInit() {
        this.weather = {
            city: '',
            unit: undefined
        }
    }

    addCity() {
        this.weather.city = this.city.value;
        this.cityService.getWeather(this.weather);
    }
    changeUnit(event: MatRadioChange) {
        this.weather.unit = event.value;
        this.form.setValue({ city: this.city.valid ? this.city.value : '' , units: event.value })
    }

    get city() {
        return this.form.get('city');
    }

    get units() {
        return this.form.get('units')
    }
}
