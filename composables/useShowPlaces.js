export const useShowPlaces=async()=> {
    let map;
    let markers = [];

    if (markers){
      markers.forEach((marker) => {
        marker.setMap(null); // Remove marker from the map
      });
      markers = []; // Clear the array
    }

    const id = await useSendData()
    const places= await useGetPlaces()

    const placesForMarkers = places.locations
    const startLat= placesForMarkers[0].lat
    const startLng =placesForMarkers[0].lng
    
    
    if (!map) {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: startLat, lng: startLng },
        zoom: 12,
      });
    }
    placesForMarkers.forEach((locations) => {
  
      const positions = {lat :locations.lat, lng :locations.lng }; 
      const marker = new google.maps.Marker({
         position: positions,
         map,
         title: locations.name,
      });
      markers.push(marker);
     })
}