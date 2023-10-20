<template>
    <div class="google-map shadow-[0_4px_9px_-4px_#54b4d3]" ref="mapContainer" id="map" ></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Loader } from "@googlemaps/js-api-loader"
const config = useRuntimeConfig(); 

const mapContainer = ref(null); // Use ref for the map container

onMounted(()=>{
  const loader = new Loader({
  apiKey: config.public.GOOGLE_MAPS_KEY_FRONTEND,
  version: "weekly",
  libraries: ['geometry']
});
loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  let map = new Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
  });
});
})


</script>

<style  scoped>
.google-map {
  width: 100%;
  height: 90vh;
}
</style>