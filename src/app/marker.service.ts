import { Injectable } from '@angular/core';
import { Init } from './init-markers';

@Injectable()
export class MarkerService extends Init {
	constructor(){
		super();
    // console.log('MarkerService Initialized...');
		this.load();
	}

	getMarkers(){
		let markers = JSON.parse(localStorage.getItem('markers'));
		return markers;
	}

	addMarkers(marker: any){
		let markers = JSON.parse(localStorage.getItem('markers'));

		markers.push(marker);

		localStorage.setItem('markers', JSON.stringify(markers));
	}

	removeMarker(marker: any){
		var markers = JSON.parse(localStorage.getItem('markers'));

		for(let i = 0; i < markers.length; i++){
			if(marker.lat === markers[i].lat && marker.lng == markers[i].lng){
			
				markers.splice(i, 1);
			}
		}
		localStorage.setItem('markers', JSON.stringify(markers));	
	}

	updateMarker(marker: any, newLat: number, newLng: number){
		let markers = JSON.parse(localStorage.getItem('markers'));

		for(let i = 0; i < markers.length; i++){
			if(marker.lat === markers[i].lat && marker.lng === markers[i].lng){
				markers[i].lat = newLat;
				markers[i].lng = newLng;
			}
		}
		localStorage.setItem('markers', JSON.stringify(markers));
	}

	editMarker(marker: any){
		let markers = JSON.parse(localStorage.getItem('markers'));
		console.log('editMarker Service')
		console.log(marker)

		for(let i = 0; i < markers.length; i++){
			if(marker.lat === markers[i].lat && marker.lng === markers[i].lng){
				markers[i].name = marker.name;
				markers[i].draggable = marker.draggable;
			}
		}
		//problem when I move and then change the name
		localStorage.setItem('markers', JSON.stringify(markers));

	}
}