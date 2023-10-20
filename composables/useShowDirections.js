export const useShowDirections=async()=> {
    let map;
    let markers = [];
    let polyline;

    if (markers){
      markers.forEach((marker) => {
        marker.setMap(null); // Remove marker from the map
      });
      markers = []; // Clear the array
    }
    const {data :id} = useNuxtData('id')
    const {data :places} = useNuxtData('places')
    const directions = await useGetDirections(id)

    const placesForMarkers = places.value.locations
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

      if (polyline) {
        polyline.setMap(null);
        polyline = null;
      }
    
      const overviewPolyline = directions.overview_polyline.points;
      
  
      const decodedPolyline = google.maps.geometry.encoding.decodePath(
        overviewPolyline
      );
  
        polyline = new google.maps.Polyline({
        path: decodedPolyline,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        map: map,
      });

      const bounds = new google.maps.LatLngBounds();
     decodedPolyline.forEach((point) => bounds.extend(point));
 
     map.fitBounds(bounds);
     
  
  }