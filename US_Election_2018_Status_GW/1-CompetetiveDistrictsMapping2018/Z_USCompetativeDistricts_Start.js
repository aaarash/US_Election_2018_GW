// for (var i = 0; i < locations.length; i++)
// {
//   function chooseColor(party)
//   {
//     if (locations[i].district2018[party] = "R")
//     {
//       return "darkred";
//     }
//     else if (locations[i].district2018[party] = "D")
//     {
//       return "blue";
//     }
//     else
//     {
//       color = "purple";
//     }
//   };
// }

/* An array containing all of the information needed to create Competative Districts Map markers
party R: Republican
party D: Democrate
party C: Competative
*/

var locations =
[
  {
    coordinates: [37.942848, -121.260222],
    StateDistrict: "California10",
    district2018:
    {
      PVI: "0",
      coordinates: [37.942848, -121.260222],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [37.942848, -121.260222],
      party: "R"
    }
  },
  {
    coordinates: [36.778259, 	-119.417931],
    StateDistrict: "California25",
    district2018:
    {
      PVI: "",
      coordinates: [36.778259, 	-119.417931],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [36.778259, 	-119.417931],
      party: "R"
    }
  },
  {
    coordinates: [33.993175, -117.901631],
    StateDistrict: "California39",
    district2018:
    {
      PVI: "",
      coordinates: [33.993175, -117.901631],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [33.993175, -117.901631],
      party: "R"
    }
  },
  {
    coordinates: [33.672528, -117.843868],
    StateDistrict: "California45",
    district2018:
    {
      PVI: "",
      coordinates: [33.672528, -117.843868],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [33.672528, -117.843868],
      party: "R"
    }
  },
  {
    coordinates: [35.748146, -119.24659],
    StateDistrict: "California48",
    district2018:
    {
      PVI: "",
      coordinates: [35.748146, -119.24659],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [35.748146, -119.24659],
      party: "R"
    }
  },
  {
    coordinates: [26.183577, -81.70219],
    StateDistrict: "Florida2",
    district2016:
    {
      PVI: "",
      coordinates: [26.183577, -81.70219],
      party: "R"
    },
    district2014:
    {
      PVI: "",
      coordinates: [26.183577, -81.70219],
      party: "D"
    }
  },
  {
    coordinates: [25.765041, -80.192058],
    StateDistrict: "Florida7",
    district2016:
    {
      PVI: "",
      coordinates: [25.765041, -80.192058],
      party: "D"
    },
    district2014:
    {
      PVI: "",
      coordinates: [25.765041, -80.192058],
      party: "R"
    }
  },
  {
    coordinates: [26.648886, -80.146291],
    StateDistrict: "Florida27",
    district2018:
    {
      PVI: "",
      coordinates: [26.648886, -80.146291],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [26.648886, -80.146291],
      party: "R"
    }
  },
  {
    coordinates: [41.878002, -93.097702],
    StateDistrict: "Iowa3",
    district2018:
    {
      PVI: "",
      coordinates: [41.878002, -93.097702],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [41.878002, -93.097702],
      party: "R"
    }
  },
  {
    coordinates: [41.590261, -87.693112],
    StateDistrict: "Illinois6",
    district2018:
    {
      PVI: "",
      coordinates: [41.590261, -87.693112],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [41.590261, -87.693112],
      party: "R"
    }
  },
  {
    coordinates: [42.384807, -88.240052],
    StateDistrict: "Illinois12",
    district2018:
    {
      PVI: "",
      coordinates: [42.384807, -88.240052],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [42.384807, -88.240052],
      party: "R"
    }
  },
  {
    coordinates: [37.191093, -95.715201],
    StateDistrict: "Kansas2",
    district2018:
    {
      PVI: "",
      coordinates: [37.191093, -95.715201],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [37.191093, -95.715201],
      party: "R"
    }
  },
  {
    coordinates: [37.1578, -94.849899],
    StateDistrict: "Kansas3",
    district2018:
    {
      PVI: "",
      coordinates: [37.1578, -94.849899],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [37.1578, -94.849899],
      party: "R"
    }
  },
  {
    coordinates: [39.04453, -84.577124],
    StateDistrict: "Kentucky6",
    district2018:
    {
      PVI: "",
      coordinates: [39.04453, -84.577124],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [39.04453, -84.577124],
      party: "R"
    }
  },
  {
    coordinates: [43.647568, -70.277889],
    StateDistrict: "Maine2",
    district2018:
    {
      PVI: "",
      coordinates: [43.647568, -70.277889],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [43.647568, -70.277889],
      party: "R"
    }
  },
  {
    coordinates: [41.721726, -86.311469],
    StateDistrict: "Michigan8",
    district2018:
    {
      PVI: "",
      coordinates: [41.721726, -86.311469],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [41.721726, -86.311469],
      party: "R"
    }
  },
  {
    coordinates: [44.733155, -85.617441],
    StateDistrict: "Michigan11",
    district2018:
    {
      PVI: "",
      coordinates: [44.733155, -85.617441],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [44.733155, -85.617441],
      party: "R"
    }
  },
  {
    coordinates: [36.067393, -80.244333],
    StateDistrict: "NorthCarolina9",
    district2018:
    {
      PVI: "",
      coordinates: [36.067393, -80.244333],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [36.067393, -80.244333],
      party: "R"
    }
  },
  {
    coordinates: [36.149181, -79.754309],
    StateDistrict: "NorthCarolina13",
    district2018:
    {
      PVI: "",
      coordinates: [36.149181, -79.754309],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [36.149181, -79.754309],
      party: "R"
    }
  },
  {
    coordinates: [40.338646, -74.46195],
    StateDistrict: "NewJersey3",
    district2018:
    {
      PVI: "",
      coordinates: [40.338646, -74.46195],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [40.338646, -74.46195],
      party: "R"
    }
  },
  {
    coordinates: [40.908664, -74.18753],
    StateDistrict: "NewJersey7",
    district2018:
    {
      PVI: "",
      coordinates: [40.908664, -74.18753],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [40.908664, -74.18753],
      party: "R"
    }
  },
  {
    coordinates: [35.594228, -105.206611],
    StateDistrict: "NewMexico2",
    district2018:
    {
      PVI: "",
      coordinates: [35.594228, -105.206611],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [35.594228, -105.206611],
      party: "R"
    }
  },
  {
    coordinates: [40.663783, -73.893258],
    StateDistrict: "NewYork19",
    district2018:
    {
      PVI: "",
      coordinates: [40.663783, -73.893258],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [40.663783, -73.893258],
      party: "R"
    }
  },
  {
    coordinates: [40.740942, -73.990777],
    StateDistrict: "NewYork22",
    district2018:
    {
      PVI: "",
      coordinates: [40.740942, -73.990777],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [40.740942, -73.990777],
      party: "R"
    }
  },
  {
    coordinates: [40.773437, -84.094331],
    StateDistrict: "Ohio1",
    district2018:
    {
      PVI: "",
      coordinates: [40.773437, -84.094331],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [40.773437, -84.094331],
      party: "R"
    }
  },
  {
    coordinates: [41.612676, -80.096237],
    StateDistrict: "Pennsylvania1",
    district2018:
    {
      PVI: "",
      coordinates: [41.612676, -80.096237],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [41.612676, -80.096237],
      party: "R"
    }
  },
  {
    coordinates: [29.758112, -95.362939],
    StateDistrict: "Texas7",
    district2018:
    {
      PVI: "",
      coordinates: [29.758112, -95.362939],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [29.758112, -95.362939],
      party: "R"
    }
  },
  {
    coordinates: [32.916107, -96.773016],
    StateDistrict: "Texas32",
    district2018:
    {
      PVI: "",
      coordinates: [32.916107, -96.773016],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [32.916107, -96.773016],
      party: "R"
    }
  },
  {
    coordinates: [37.431573, -78.656894],
    StateDistrict: "Virginia2",
    district2018:
    {
      PVI: "",
      coordinates: [37.431573, -78.656894],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [37.431573, -78.656894],
      party: "R"
    }
  },
  {
    coordinates: [39.041602, -80.470345],
    StateDistrict: "Virginia",
    district2018:
    {
      PVI: "",
      coordinates: [39.041602, -80.470345],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [39.041602, -80.470345],
      party: "R"
    }
  },
  {
    coordinates: [47.219199, -124.203328],
    StateDistrict: "Washington8",
    district2018:
    {
      PVI: "",
      coordinates: [47.219199, -124.203328],
      party: "R"
    },
    district2016:
    {
      PVI: "",
      coordinates: [47.219199, -124.203328],
      party: "R"
    }
  },
  {
    coordinates: [44.288764, -93.257889],
    StateDistrict: "Minnesota1",
    district2018:
    {
      PVI: "",
      coordinates: [44.288764, -93.257889],
      party: "D"
    },
    district2016:
    {
      PVI: "",
      coordinates: [44.288764, -93.257889],
      party: "D"
    }
  },
  {
    coordinates: [45.665749, -94.810239],
    StateDistrict: "Minnesota8",
    district2018:
    {
      PVI: "",
      coordinates: [45.665749, -94.810239],
      party: "D"
    },
    district2016:
    {
      PVI: "",
      coordinates: [45.665749, -94.810239],
      party: "D"
    }
  }
];

/* Looping through locations and creating district2016 and district2018 markers */
var district2018Markers = [];
var district2016Markers = [];
var district2014Markers = [];

for (var i = 0; i < locations.length; i++)
{
  // Setting the marker radius for the district2018 by passing population into the markerSize function
  district2018Markers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "red",
      fillColor: "purple",
      radius: 60000
    })
  );
  // Setting the marker radius for the district2016 by passing population into the markerSize function
  district2016Markers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.50,
      color: "red",
      fillColor: "red",
      radius: 40000
    })
  );
  // Setting the marker radius for the district2018 by passing population into the markerSize function
  district2014Markers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "red",
      fillColor: "blue",
      radius: 20000
    })
  );
}

/* Defining variables for base layers */
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
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

/* Creating two separate layer groups: one for districtS2016 and one for districtS2018 */
var districtS2018 = L.layerGroup(district2018Markers);
var districtS2016 = L.layerGroup(district2016Markers);
var districtS2014 = L.layerGroup(district2014Markers);

/* Creating a baseMaps object */
var baseMaps =
{
  "Street Map": streetmap,
  "Dark Map": darkmap
};

/* Creatig an overlay object */
var overlayMaps =
{
  "2018CompetativeDistricts": districtS2018,
  "2016Districts": districtS2016,
  "2014Districts": districtS2014
};

/* Defining a map object */
var myMap = L.map("map",
{
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap, districtS2018, districtS2016, districtS2014]
});

/* Passing map layers into layer control, adding the layer control to the map */
L.control.layers(baseMaps, overlayMaps,
{
  collapsed: false
}).addTo(myMap);
