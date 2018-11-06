/* 

*/

/* Create the Traces */
var trace1 = 
{
  x: data.Districts,
  y: data.GOP,
  mode: "markers",
  type: "scatter",
  name: "GOP",
  marker: {color: "red", symbol: "hexagram", size: 8} 
};

var trace2 = 
{
  x: data.Districts,
  y: data.DEM,
  mode: "markers",
  type: "scatter",
  name: "DEM",
  marker: {color: "blue", symbol: "diamond-x", size: 8} 
};

var data = [trace1, trace2];

var layout =
{
  title: "Districts - TossUp + Hillary Land", 
  xaxis: { title: "Districts"},
  yaxis: { title: "CPVI" , range: [0, 20]},
  legend: 
  {
    y: 0.5,
    yref: 'paper',
    font: {family: 'Arial, sans-serif', size: 20, color: 'grey'}
  }
};

Plotly.newPlot("plot", data, layout);
