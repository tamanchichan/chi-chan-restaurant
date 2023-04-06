'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation is not supported by this browser');
  };
});

function showPosition() {
  const latitude = 49.87850272853492;
  const longitude = -97.15008011662897;

  mapboxgl.accessToken = 'pk.eyJ1IjoidGFtYW5jaGljaGFuIiwiYSI6ImNsZzU3MHlqaDAwbG4zam15dHMxZTl2dW0ifQ.6E_DrY13I1EStpo4sJ0vKg';
  
  let map = new mapboxgl.Map({
    center: [longitude, latitude],
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15
  });

  new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
  
  map.addControl(new mapboxgl.NavigationControl());
};