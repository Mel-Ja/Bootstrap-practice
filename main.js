mapboxgl.accessToken = 'pk.eyJ1IjoiZGlzZW1lIiwiYSI6ImNsa2w5M2IwejBiNGEzZG12ZDF3ejNjeHMifQ.fmjgxHRdEiQn1lW8AbVirg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.060982, 42.35725], // latitud & altitud
  zoom: 18
});