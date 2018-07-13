 document.addEventListener('DOMContentLoaded', function() {

    getLocation();

     //watch(document.querySelectorAll("[scrollable]"));
  });/*
function initMap() {
        window.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }*/
  var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
          });
        }
  function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position);
        //  myMap(position.coords);
        });
    } else {
       console.warn("Geolocation is not supported by this browser.");
    }
  }

  function myMap(coords) {

   mapboxgl.accessToken = 'pk.eyJ1IjoiZW1lci1pc2F1IiwiYSI6ImNqamprMndjeTFlOHUzcXJtcG1sMXpzYmsifQ.X7lp-9XoPFI-uXaZurGYmw';
var map = new mapboxgl.Map({
    container: 'map',
     zoom: 15,
    center: [coords.longitude, coords.latitude],
    style: 'mapbox://styles/mapbox/streets-v9'
});
var marker = new mapboxgl.Marker()
  .setLngLat([coords.longitude,coords.latitude])
  .addTo(map);
}

function watch(els){
  console.log(els);
  window.is_desktop=window.innnerWidth>992;
  let  desktop_ignore=120;
  let  mobile_ignore=100;
  let handle=(ignore)=>{
for(let el of els){
        el.style.height=(window.innerHeight-ignore)+'px';
      }
  };
  handle(is_desktop?desktop_ignore:mobile_ignore);
window.addEventListener('resize',()=>{
  if(window.innnerWidth<=992){
     if(!is_desktop)return;
     is_desktop=false;
     handle(mobile_ignore);
  }else{
    if(is_desktop)return;
    is_desktop=true;
      handle(desktop_ignore);
  }
});
}

function find_parkings(e){
  e.preventDefault();
  console.log($("#global-search").val())
}
