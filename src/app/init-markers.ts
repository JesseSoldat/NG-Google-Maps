export class Init {
	load(){
		if(localStorage.getItem('markers') === null ||
		 localStorage.getItem('markers') === undefined){
			var markers = [
		    {
            name: 'Saitama',
            lat: 35.861729,
            lng: 139.645482,
            draggable: true
        },
        {
            name: 'Shinjiku',
            lat: 35.693840,
            lng: 139.703549,
            draggable: true
        },
        {
            name: 'Yokohama',
            lat: 35.443708,
            lng: 139.638026,
            draggable: false
        }
      ];
      localStorage.setItem('markers', JSON.stringify(markers));
      // console.log('markers set.........');
      return;
		} else {
			// console.log('Loading markers....');
		}
	}
}