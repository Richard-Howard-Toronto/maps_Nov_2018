
  const app = {};

  app.mapColors = [
  {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
          {
              "hue": "#ff4400"
          },
          {
              "saturation": -68
          },
          {
              "lightness": -4
          },
          {
              "gamma": 0.72
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [
          {
              "hue": "#0077ff"
          },
          {
              "gamma": 3.1
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#44ff00"
          },
          {
              "saturation": -23
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "saturation": -64
          },
          {
              "hue": "#ff9100"
          },
          {
              "lightness": 16
          },
          {
              "gamma": 0.47
          },
          {
              "weight": 2.7
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": -48
          },
          {
              "hue": "#ff5e00"
          },
          {
              "gamma": 1.2
          },
          {
              "saturation": -23
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#00ccff"
          },
          {
              "gamma": 0.44
          },
          {
              "saturation": -33
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "hue": "#007fff"
          },
          {
              "gamma": 0.77
          },
          {
              "saturation": 65
          },
          {
              "lightness": 99
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "gamma": 0.11
          },
          {
              "weight": 5.6
          },
          {
              "saturation": 99
          },
          {
              "hue": "#0091ff"
          },
          {
              "lightness": -86
          }
      ]
  }
]



  app.loadMap = function() {

    console.log('yes! loaded map..., developers.google.com/maps/documentation')

    const mapOptions = {
      center: {lat: 43.6929016, lng: -79.379688},
      zoom: 8,
      gestureHandling: "cooperative",
      styles: app.mapColors,
    }

    // 1. all the options for the google map are held in an object

    // 2. we also select the map div with jquery, but only the first item in the array

    const mapDiv = $('.map')[0]

    // 3. which we then pass to the map method and store

    app.map = new google.maps.Map(mapDiv, mapOptions)

  } // end app.loadMap definition


  app.eatoncenter = function () {

    console.log('inside eaton center')

    const eatoncenter = {
      center: {lat: 45, lng: -80},
      zoom: 8,
      gestureHandling: "cooperative",
      styles: app.mapColors,
    }

    const mapDiv2 = $('.map')[0]

    // 3. which we then pass to the map method and store

    app.map = new google.maps.Map(mapDiv, mapOptions)

  }

// HOW DO YOU PASS THIS TO THE FUNCTION BELOW??????

  function findLocationLat() {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        console.log(`lat is ${lat}`)

        var elLat = document.getElementById('lat');
        elLat.textContent = position.coords.latitude;
      })

  }
  findLocationLat();



  function findLocationLon() {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lon = position.coords.longitude;
        console.log(`lon is ${lon}`)

        var elLon = document.getElementById('lon');
        elLon.textContent = position.coords.longitude;
      })
  }
  findLocationLon();


  app.loadMarkers = function() {
    const home = new google.maps.Marker ({
      position: new google.maps.LatLng(43.6929016,-79.379688),
      map: app.map,
      icon: 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png'
    })

    const eatoncenter = new google.maps.Marker ({
      position: new google.maps.LatLng(44,-80),
      map: app.map,
      icon: 'igloo.jpg'
    })

    const london = new google.maps.Marker ({
      position: new google.maps.LatLng(43,-81.3),
      map: app.map,
      icon: 'london.jpg'
    })



    const infowindow = new google.maps.InfoWindow()


    google.maps.event.addListener(home, 'click', function() {
      infowindow.setContent('This is where I am right now, except is isnt'),
      infowindow.open(app.map, home)
    })

    google.maps.event.addListener(eatoncenter, 'click', function() {
      infowindow.setContent('Eaton Center, New Northern Location'),
      infowindow.open(app.map, eatoncenter)
    })


    google.maps.event.addListener(london, 'click', function() {
      infowindow.setContent('THis is... London - Ontario'),
      infowindow.open(app.map, london)
    })

  }


// this is the end of that function for finding lat and long

  $(function() {

    app.loadMap();
    app.loadMarkers();

    // 4. call load map when the document is ready

  }); // end doc ready
