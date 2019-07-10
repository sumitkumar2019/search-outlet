import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
       /** 
        * Here enter your google api key and enable all the google map geo api available
        * For More Information on how to create see: https://developers.google.com/maps/documentation/javascript/get-api-key
        * Also Enable all the Geo Api like: from https://console.cloud.google.com/google/maps-apis/api-list?project=(as per google project project_name)
        * Directions API
        * Distance Matrix
        * Geocoding API
        * Maps Elevation API
        * Maps JavaScript API
        * Places API
       */
      apiKey:'AIzaSyCm60JE2uyYai4GYuWKIRNN9HsTkpwh31s',
      libraries:['places', 'geometry' ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
