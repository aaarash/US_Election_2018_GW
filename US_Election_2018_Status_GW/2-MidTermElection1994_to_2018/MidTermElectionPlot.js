/*
 */

/* Creating traces */

var x1Value = ["1994_Clinton", "1998_Clinton", "2002_BUsh", "2006_BUsh", "2010_Obama", "2014_Obama", "2018_Trump"];

var y1Value = [41, 62, 64, 39, 45, 42, 44];

var trace1 = 
{
  // x: ["1994_Clinton", "1998_Clinton", "2002_BUsh", "2006_BUsh", "2010_Obama", "2014_Obama", "2018_Trump"],
  // y: [41, 62, 64, 39, 45, 42, 44],
  x: x1Value,
  y: y1Value,
  name: "President Job Approval",
  type: "bar",
  text: y1Value,
  textposition: 'auto',
  marker:
  {
    color: 'purple',
    opacity: 0.5
  }
};

var x2Value = ["1994_Clinton", "1998_Clinton", "2002_BUsh", "2006_BUsh", "2010_Obama", "2014_Obama", "2018_Trump"];

var y2Value = [-5.5, -1.5, -4.6, 7.9, -6.8, -5.7, 7.2];

var trace2 =
{
  // x: ["1994_Clinton", "1998_Clinton", "2002_BUsh", "2006_BUsh", "2010_Obama", "2014_Obama", "2018_Trump"],
  // y: [-5.5, -1.5, -4.6, 7.9, -6.8, -5.7, 7.2],
  x: x2Value,
  y: y2Value,
  name: "Generic Congressional Vote",
  type: "bar",
  text: y2Value,
  textposition: 'auto',
  marker:
  {
    color: '#E6B0AA',
    opacity: 0.8
  },
};

var x3Value = ["1994_Clinton", "1998_Clinton", "2002_BUsh", "2006_BUsh", "2010_Obama", "2014_Obama", "2018_Trump"];

var y3Value = [-54, 5, -7, 31, -63, -13];

var trace3 =
{
  // x: ["1994_Clinton", "1998_Clinton", "2002_BUsh", "2006_BUsh", "2010_Obama", "2014_Obama", "2018_Trump"],
  // y: [-54, 5, -7, 31, -63, -13],
  x: x3Value,
  y: y3Value,
  name: "Seats Gain/Lost by Democrates",
  type: "bar",
  text: y3Value,
  textposition: 'auto',
  marker:
  {
    // color: 'rgb(158,202,225)',
    color: ['darkred', 'rgb(158,202,225)', 'rgb(158,202,225)', 'darkblue', 'darkred', 'rgb(158,202,225)', 'rgb(158,202,225)']
    // opacity: 0.7
  }
};

var x4Value = ["1994_Clinton", "1998_Clinton", "2002_BUsh", "2006_BUsh", "2010_Obama", "2014_Obama", "2018_Trump"];

var y4Value = [-7.1, -1.1, -4.8, 8, -6.8, -5.7];

var trace4 =
{
  // x: ["1994_Clinton", "1998_Clinton", "2002_BUsh", "2006_BUsh", "2010_Obama", "2014_Obama", "2018_Trump"],
  // y: [-7.1, -1.1, -4.8, 8, -6.8, -5.7],
  x: x4Value,
  y: y4Value,
  name: "Dem Participation Difference",
  type: "bar",
  text: y4Value,
  textposition: 'auto',
  marker:
  {
    color: 'pink',
    opacity: 0.8
  }
};

var layout = {
  title: 'Mid-Term Elections, 1994 to 2018'
};

/* The data array consists of both traces */
var data = [trace1, trace2, trace3, trace4];

/* By omitting the layout object, default parameters for the layout will be returned */
/* layout in the plotly code is also removed */
Plotly.newPlot("plot", data, layout);
