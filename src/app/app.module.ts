import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModule } from './shared/material.module';
import { WeatherComponent } from './weather/weather.component';
import { AddCityComponent } from './add-city/add-city.component';
import { LayoutComponent } from './layout/layout.component';
import { CityService } from './city.service';
import { HttpClientModule } from '@angular/common/http';
import { reducer } from './store/weather.reducer';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        AddCityComponent,
        LayoutComponent
    ],
    imports: [
        MaterialsModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({'weather': reducer}),
    ],
    providers: [CityService],
    bootstrap: [AppComponent]
})
export class AppModule { }
