 document.addEventListener('DOMContentLoaded', function() {

    getLocation();

     //watch(document.querySelectorAll("[scrollable]"));
     $.get("https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyC5ViXXiO1AxSocJbj3uR4QaPcJbBlQN34",function(r){
       console.log(r);
     });
  });
  var map,autocomplete,places,markers = [];
  var marker;
  var infowindow;
        function initMap(coords) {
      map = new google.maps.Map(document.getElementById('map'), {
       zoom: 18,
       center: coords
     });
 infowindow = new google.maps.InfoWindow();
      marker= new google.maps.Marker({
       position: coords,
       map: map,
       title: 'Posición actual'
     });
     marker.addListener('click', toggleBounce);
     var service = new google.maps.places.PlacesService(map);
           service.textSearch({
             location: coords,
             radius: 500,
              query: 'parkings'
           }, function(results,status){
             console.log(results);
             if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
             createMarker(results[i]);
             }
         }
           });

           autocomplete = new google.maps.places.Autocomplete(
           /** @type {!HTMLInputElement} */ (
               document.getElementById('global-search')), {
             types: ['(parkings)'],
             componentRestrictions: {'country': 'pe'}
           });
       places = new google.maps.places.PlacesService(map);

       autocomplete.addListener('place_changed', onPlaceChanged);


        }
        function onPlaceChanged() {
       var place = autocomplete.getPlace();
       if (place.geometry) {
         map.panTo(place.geometry.location);
         map.setZoom(15);
         search();
       } else {
         document.getElementById('global-search').placeholder = 'Ingresa algo para buscar';
       }
     }
     // Search for hotels in the selected city, within the viewport of the map.
      function search() {
        var search = {
          bounds: map.getBounds(),
          types: ['lodging']
        };

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              // If the user clicks a hotel marker, show the details of that hotel
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              console.log(results[i]);
            }
          }
        });
      }
      function dropMarker(i) {
        return function() {
          markers[i].setMap(map);
        };
      }
      function clearMarkers() {
       for (var i = 0; i < markers.length; i++) {
         if (markers[i]) {
           markers[i].setMap(null);
         }
       }
       markers = [];
     }

     function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }
        function createMarker(place) {

        var image = {
    url: globals.logo,
    size: new google.maps.Size(100, 100),
  };
  var shape = {
   coords: [1, 1, 1, 20, 18, 20, 18, 1],
   type: 'poly'
 };
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon:image,
           shape: shape,
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }

  function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position);
        initMap({lat:position.coords.latitude,lng:position.coords.longitude});
        });
    } else {
       console.warn("Geolocation is not supported by this browser.");
    }
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

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
