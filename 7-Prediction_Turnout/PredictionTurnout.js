/*
 */

/* Creating traces */

var x1Value = ["Ridge", "Lasso", "ElasticNet"];

var y1Value = [-13, -22, -15];

var trace1 = 
{
  x: x1Value,
  y: y1Value,
  name: "Turnout: 36%",
  type: "bar",
  text: y1Value,
  textposition: 'auto',
  marker:
  {
    color: 'darkred',
    opacity: 1
  }
};

var x2Value = ["Ridge", "Lasso", "ElasticNet"];

var y2Value = [-12, -22, -14];

var trace2 =
{
  x: x2Value,
  y: y2Value,
  name: "Turnout: 40%",
  type: "bar",
  text: y2Value,
  textposition: 'auto',
  marker:
  {
    color: '#E6B0AA',
    opacity: 1
  },
};

var x3Value = ["Ridge", "Lasso", "ElasticNet"];

var y3Value = [-11, -22, -13];

var trace3 =
{
  x: x3Value,
  y: y3Value,
  name: "Turnout: 44%",
  type: "bar",
  text: y3Value,
  textposition: 'auto',
  marker:
  {
    color: 'darkblue',
    opacity: 1
  }
};

var layout = {
  title: "Prediction of the U.S Mid-Term Election 2018 - # Of Seat (Gain / Lose) by President's Party",
  legend:{
    xanchor:"center",
    yanchor:"top",
    y:-0.3, // play with it
    x:0.5   // play with it
  }
};

/* The data array consists of both traces */
var data = [trace1, trace2, trace3];

/* By omitting the layout object, default parameters for the layout will be returned */
/* layout in the plotly code is also removed */
Plotly.newPlot("plot", data, layout);
