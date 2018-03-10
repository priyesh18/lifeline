import { ListPage } from './../list/list';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  lat: number=19.0760;
  lng: number=72.8777;
  locationChosen=false;
  listarray=[];

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,private geoloaction:Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  // onChoseLocation(event)
  // {
  //   this.lat=event.coords.lat;
  //   this.lng=event.coords.lng;
  //   this.locationChosen=true;
  // }
  // onLocate()
  // {
  //   this.geoloaction.getCurrentPosition()
  //   .then(
  //     location =>{
  //       console.log(location);
  //       this.lat=location.coords.latitude;
  //       this.lng=location.coords.longitude;
        
  //       this.locationChosen=true;

  //       console.log(this.lat);
  //       console.log(this.lng);
        

  //     }

  //   )
  //   .catch(
  //     error=>{
  //       console.log(error);

  //     }
  //   )
  // }
  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: 19.0813, lng: 72.8887
        },
        zoom: 14
      }); 
      this.createM( 19.0813,72.8887);
  
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: 19.0813, lng:72.8887 },
        radius: 1000,
        type: ['hospital'],
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
    //var myplace = {lat: -33.8665, lng: 151.1956};
  }
  // addMarker()
  // {
  //   var marker=new google.maps.Marker({
  //     map:map,
  //     animation:'DROP',
  //     position: {lat: 19.0813, lng:72.8887 },
      
  //     icon:'blue'

  //   });
  //   console.log()
  // }
  createMarker(place) {
    console.log(place);
    var placeLoc = place.geometry.location;
    var hosname=place.name;
    console.log(hosname);
    this.listarray.push(hosname);
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });
  
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
  createM(l,lo) {
    var placeLoc={lat :l,lng :lo};
    console.log(placeLoc);
    var marker = new google.maps.Marker({
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',

      position: placeLoc
    });
  
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, this);
    });
  }

  listShow()
  {
    this.navCtrl.push(ListPage,{array:this.listarray});
  }
  

}
