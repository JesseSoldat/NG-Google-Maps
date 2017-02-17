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
  editForm: FormGroup;
  markers: marker[];
  edit: boolean;
  editLat: number;
  editLng: number;
  editIndex: number;

  constructor(private fb: FormBuilder, private markerService: MarkerService){
  	this.markerForm = fb.group({
  		name: ['', Validators.required],
  		lat: ['', Validators.required],
  		lng: ['', Validators.required],
  		draggable: [false]
  	});

    this.editForm = fb.group({
      name: ['', Validators.required],
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
      this.markerService.addMarkers(newMarker);
  	} else {
  		alert('Please Fill In All Fields');
  	}
  }

  removeMarker(marker: marker){
    for(let i = 0; i < this.markers.length; i++){
      if(marker.lat === this.markers[i].lat && marker.lng === this.markers[i].lng){
        this.markers.splice(i, 1);
      }
    }
    this.markerService.removeMarker(marker);
  }

  showEdit(m: any, i: number){
    console.log(m);
    console.log(i);
   
    if(this.editLat === undefined && this.editLng === undefined){
      console.log('not moved');
      this.editLat = m.lat;
      this.editLng = m.lng;
      this.editIndex = i;
    } else {
      console.log('moved');
      this.editIndex = i;

    }
    this.edit = true;
    // console.log(this.editLat);
    // console.log(this.editLng);
  }

  editMarker(m: any){
     console.log(m)
     // console.log(this.editInfo)

     let isDraggable;

      if(m.draggable === 'yes'){
        isDraggable = true;
      } else {
          isDraggable = false;
      }

      let newMarker = {
        name: m.name,
        lat: this.editLat,
        lng: this.editLng,
        draggable: isDraggable
      }

     this.markers.splice(this.editIndex, 1);
     this.markers.push(newMarker);

     this.markerService.editMarker(newMarker);
     this.edit = false;
  }

  clickedMarker(marker: marker, index: number){
    // console.log('Clicked marker: ' +marker.name+' at index '+index);
  }

  mapClicked($event: MouseEvent){
    // console.log($event)
    let newMarker = {
      name: "Untitled",
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    // console.log(newMarker);
    this.markers.push(newMarker);
    this.markerService.addMarkers(newMarker);
  }

  markerDragEnd(marker: any, $event: MouseEvent){
    let updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    let newLat = $event.coords.lat;
    let newLng = $event.coords.lng;

    this.editLat = $event.coords.lat;
    this.editLng = $event.coords.lng;

    this.markerService.updateMarker(updMarker, newLat, newLng);

  }
}

// Marker Type
interface marker {
    name?:string;
    lat: number;
    lng: number;
    draggable: boolean;
}
