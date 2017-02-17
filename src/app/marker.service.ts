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
				console.log('deleted');
				markers.splice(i, 1);
			}
		localStorage.setItem('markers', JSON.stringify(markers));

		}
	}
}