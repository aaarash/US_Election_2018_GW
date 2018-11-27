/* ##### Geo Json
Plotting markers on a map to represent the occurrence of earthquakes.
  Working with GeoJSON from the [USGS](http://earthquake.usgs.gov) to achieve this.

## Instructions
1. placing an API call to the USGS Earthquake Hazards Program API.
    Taking the "features" array that is extracted from the response.

2. Adding some logic to create a GeoJSON layer containing all features retrieved from the API call and add it directly to the map.
You can reference today's previous activities as well as [Leaflet's Docs for GeoJSON](http://leafletjs.com/examples/geojson/).

3. Creating an `overlayMaps` object using the newly created earthquake GeoJSON layer.
    Passing the `overlayMaps` into the layer control.

## Bonus

* Create a separate overlay layer for the GeoJSON, as well as a base layer using the `streetmap` tile layer and the `darkmap` tile layer. Add these to a layer control. Refer to the previous activity if stuck here.

* Add a popup to each marker to display the time and location of the earthquake at that location.

## Hints

* See Leaflet Documentation on GeoJSON:

  * <http://leafletjs.com/reference.html#geojson>
  * <http://leafletjs.com/examples/geojson/>
*/

// /* Store API endpoint inside queryUrl */
// var queryUrl = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-01-01&endtime=" +
//   "2018-09-16&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

/* API Querying 
https://earthquake.usgs.gov/fdsnws/event/1/
*/

// var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-09-30&endtime=2018-08-23";

// Iran_Kermanshah_Nov 12, 2017
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-11-10&endtime=2018-11-26";

/* Perform a GET request to the query URL */
d3.json
(
  queryUrl, function(data)
  {
    console.log(data);
    // Once getting a response, send the data.features object to the createFeature function
    // Features
    // https://macwright.org/2015/03/23/geojson-second-bite.html#features
    createFeatures(data.features);
  }
);

function createFeatures(earthquakeData)
{
  // Defining a function, running once for each feature in the features array and 
  // giving each feature a popup describing the place anbd time of the earthquake
  function onEachFeature(feature, layer)
  {
    // layer.bindPopup("<h3>" + feature.properties.place +
    // "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    layer.bindPopup("<h3>" + feature.properties.place + "<hr>" + "Magnitude: " + feature.properties.mag + "</hr>" + 
    "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }

  // Creating a GeoJson layer containing the features array on th earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON
  (
    earthquakeData,
    {
      onEachFeature: onEachFeature
    }
  );

  // Sending earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy Arash-Ghaf; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      // Iran
      32.427908, 53.688045
      // 37.09024, -95.712891
    ],
    zoom: 5,
    title: "EarthQuakes",
    layers: [streetmap, earthquakes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
