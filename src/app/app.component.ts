import { Component } from '@angular/core';
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
  lat: number = 13.756331;
  lng: number = 100.501765;
  markerForm: FormGroup;

  constructor(private fb: FormBuilder){
  	this.markerForm = fb.group({
  		name: ['', Validators.required],
  		lat: ['', Validators.required],
  		lng: ['', Validators.required],
  		draggable: [false]
  	});
  }

  addMarker(marker: any): void {
  	if(this.markerForm.valid){
  		console.log(marker);
  	}
  }
}
