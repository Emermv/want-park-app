 document.addEventListener('DOMContentLoaded', function() {
  
    getLocation();

     //watch(document.querySelectorAll("[scrollable]"));
  });
function initMap() {
        window.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }

  function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position);
        });
    } else {
       console.warn("Geolocation is not supported by this browser.");
    }
  }

  function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.12),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
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

