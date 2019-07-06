import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader} from '@agm/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  google: any;
  latitude:any;
  longitude:any;
  base_url='http://localhost:3000/api';
  resturantName:any;
  autoComplete;
  title = 'search-outlet';
  @ViewChild('search', {static: false}) 
  public searchElement: ElementRef;

  constructor(private httpClient: HttpClient, private mapsAPILoader:MapsAPILoader, private ngZone:NgZone){}

  ngOnInit(): void {
    this.mapsAPILoader.load().then(()=>{
      this.autoComplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types:["address"]});
    });
  }

  onSearchBoxClick(){
    this.autoComplete.addListener("place_changed", ()=>{
      this.ngZone.run(()=>{
        let place : google.maps.places.PlaceResult = this.autoComplete.getPlace();
        if(place.geometry == undefined || place.geometry == null){
          return;
        }
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.httpClient.get(this.base_url + '/outlet/'+this.latitude+'/'+this.longitude, {responseType: 'text'}).subscribe((res)=>{
          this.resturantName = res;
       });
    });
    });
  } 
}
