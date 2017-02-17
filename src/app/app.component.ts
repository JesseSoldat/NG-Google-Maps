import { Component } from '@angular/core';
import { MarkerService } from './marker.service';
import { 
	FormBuilder, 
	FormGroup, 
	Validators 
} from '@angular/forms';
import {
    MapsAPILoader,
    NoOpMapsAPILoader,
    MouseEvent
} from 'angular2-google-maps/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	zoom: number = 10;
  lat: number = 35.896170141961285;
  lng: number = 139.69335950911045;
  markerForm: FormGroup;
  markers: marker[];

  constructor(private fb: FormBuilder, private markerService: MarkerService){
  	this.markerForm = fb.group({
  		name: ['', Validators.required],
  		lat: ['', Validators.required],
  		lng: ['', Validators.required],
  		draggable: [false]
  	});
    
    this.markers = this.markerService.getMarkers();
  }

  addMarker(marker: any): void {
  	let isDraggable;

  	if(this.markerForm.valid){
  		// console.log(marker);
  		if(marker.draggable = 'yes'){
  			isDraggable = true;
  		} else {
  				isDraggable = false;
  		}

  		let newMarker = {
  			name: marker.name,
  			lat: parseFloat(marker.lat),
  			lng: parseFloat(marker.lng),
  			draggable: isDraggable
  		}

  		this.markers.push(newMarker);
  	} else {
  		alert('Please Fill In All Fields');
  	}
  }

  clickedMarker(marker: marker, index: number){
    console.log('Clicked marker: ' +marker.name+' at index '+index);
  }

  mapClicked($event: MouseEvent){
    var newMarker = {
      name: "Untitled",
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    console.log(newMarker);
  }
}

// Marker Type
interface marker {
    name?:string;
    lat: number;
    lng: number;
    draggable: boolean;
}
