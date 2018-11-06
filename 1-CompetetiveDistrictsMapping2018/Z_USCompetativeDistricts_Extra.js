/* 
*/
/* An array containing all of the information needed to create Competative Districts Map markers
Party R: Republican
Party D: Democrate
CPVI_Party: Cook Partisan Voting index - R, D, E(Even)
CPVI_M: Cook Partisan Voting Magnitude
CPVI_D: Cook Partisan Voting Direction: TossUp, Lean, Likely, Solid
*/

var locations =
[
  {
    State: "Arizona",
    District: "2",
    Spec:
    {
      Year: 2016,
      Propertise:
      {
        Coordinates: [37.6, -121.0],
        CPVI_Party: "E",
        CPVI_M: 0,
        CPVI_D: "TossUp",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      },
      Year: 2014,
      Propertise: 
      {
        Coordinates: [37.6, -121.0],
        CPVI_Party: "R",
        CPVI_M: 1,
        CPVI_D: "Likely_R",
        Winners_Vote_Percentage: 0,
        Color: "blue",
        Party: "D"
      },
      Year: 2012,
      Propertise:
      {
        Coordinates: [37.6, -121.0],
        CPVI_Party: "R",
        CPVI_M: 2,
        CPVI_D: "Likely_R",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      },
      Year: 2010,
      Propertise:
      {
        Coordinates: [37.6, -121.0],
        CPVI_Party: "R",
        CPVI_M: 4,
        CPVI_D: "Lean_R",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      }
    }
  },
  {
    State: "Arizona",
    District: "9",
    Spec:
    {
      Year: 2016,
      Propertise:
      {
        Coordinates: [31.5469, -109.5619],
        CPVI_Party: "E",
        CPVI_M: 0,
        CPVI_D: "TossUp",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      },
      Year: 2014,
      Propertise: 
      {
        Coordinates: [31.5469, -109.5619],
        CPVI_Party: "D",
        CPVI_M: 4,
        CPVI_D: "TossUp",
        Winners_Vote_Percentage: 0,
        Color: "blue",
        Party: "D"
      },
      Year: 2012,
      Propertise:
      {
        Coordinates: [31.5469, -109.5619],
        CPVI_Party: "E",
        CPVI_M: 0,
        CPVI_D: "TossUp",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      },
      Year: 2010,
      Propertise:
      {
        Coordinates: [31.5469, -109.5619],
        CPVI_Party: "D",
        CPVI_M: 5,
        CPVI_D: "TossUp",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      }
    }
  },
  {
    State: "California",
    District: "3",
    Spec:
    {
      Year: 2016,
      Propertise:
      {
        Coordinates: [38.9, -122.0],
        CPVI_Party: "D",
        CPVI_M: 12,
        CPVI_D: "TossUp",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      },
      Year: 2014,
      Propertise: 
      {
        Coordinates: [38.9, -122.0],
        CPVI_Party: "D",
        CPVI_M: 14,
        CPVI_D: "Solid_D",
        Winners_Vote_Percentage: 0,
        Color: "blue",
        Party: "D"
      },
      Year: 2012,
      Propertise:
      {
        Coordinates: [38.9, -122.0],
        CPVI_Party: "D",
        CPVI_M: 13,
        CPVI_D: "Solid_D",
        Winners_Vote_Percentage: 0,
        Color: "blue",
        Party: "D"
      },
      Year: 2010,
      Propertise:
      {
        Coordinates: [38.9, -122.0],
        CPVI_Party: "D",
        CPVI_M: 10,
        CPVI_D: "Likely_D",
        Winners_Vote_Percentage: 0,
        Color: "blue",
        Party: "D"
      }
    }
  },
  {
    State: "Florida",
    District: "3",
    Spec:
    {
      Year: 2016,
      Propertise:
      {
        Coordinates: [29.5005, -82.4409],
        CPVI_Party: "R",
        CPVI_M: 1,
        CPVI_D: "Lean_R",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      },
      Year: 2014,
      Propertise: 
      {
        Coordinates: [29.5005, -82.4409],
        CPVI_Party: "E",
        CPVI_M: 0,
        CPVI_D: "TossUp",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      },
      Year: 2012,
      Propertise:
      {
        Coordinates: [29.5005, -82.4409],
        CPVI_Party: "E",
        CPVI_M: 0,
        CPVI_D: "TossUp",
        Winners_Vote_Percentage: 0,
        Color: "blue",
        Party: "D"
      },
      Year: 2010,
      Propertise:
      {
        Coordinates: [29.5005, -82.4409],
        CPVI_Party: "D",
        CPVI_M: 1,
        CPVI_D: "Lean_D",
        Winners_Vote_Percentage: 0,
        Color: "red",
        Party: "R"
      }
    }
  },
];

/* Looping through locations and creating district markers */
var District2016Markers = [];
for (var i = 0; i < locations.Spec.Year==2016; i++)
{
  // Setting the marker radius for the District2018 by passing population into the markerSize function
  District2016Markers.push(
    L.circle
    (
      locations.Spec.Propertise.Coordinates[i],
      {
        stroke: false,
        fillOpacity: 0.99,
        // color: "black",
        fillColor: "red",
        radius: 60000
      }
    )
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
var DistrictS2016 = L.layerGroup(District2016Markers);

/* Creating a baseMaps object */
var baseMaps =
{
  "Street Map": streetmap,
  "Dark Map": darkmap
};

/* Creatig an overlay object */
var overlayMaps =
{
  "2018CompetativeDistricts": DistrictS2016
};

/* Defining a map object */
var myMap = L.map("map",
{
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap, DistrictS2016]
});

/* Passing map layers into layer control, adding the layer control to the map */
L.control.layers(baseMaps, overlayMaps,
{
  collapsed: false
}).addTo(myMap);