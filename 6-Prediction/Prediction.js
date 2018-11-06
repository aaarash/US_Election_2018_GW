/*
 */

/* Creating traces */

var x1Value = ["Regression", "Ridge", "Lasso", "ElasticNet"];

var y1Value = [1, -13, -22, -15];

var trace1 = 
{
  x: x1Value,
  y: y1Value,
  name: "Features: Mid-Term Election, Turnout, President Job Approval(Begining of the Year, Before the Election & Trend), Party Affiliation, and Economic Factors(Inflation, Unemployment, Growth Rate and the Trends",
  type: "bar",
  text: y1Value,
  textposition: 'auto',
  marker:
  {
    color: 'darkred',
    opacity: 1,
  },
  line:
    {
      width: 1
    }
};

var x2Value = ["Regression", "Ridge", "Lasso", "ElasticNet"];

var y2Value = [-14, -18, -23, -20];

var trace2 =
{
  x: x2Value,
  y: y2Value,
  name: "Features: Mid-Term Election, Turnout, President Job Approval(Begining of the Year, Before the Election & Trend) & Party Affiliation (Rep, Dem, Ind)",
  type: "bar",
  text: y2Value,
  textposition: 'auto',
  marker:
  {
    color: '#E6B0AA',
    // color: 'pink',
    opacity: 1,
  },
  line:
    {
      width: 1.5
    }
};

var x3Value = ["Regression", "Ridge", "Lasso", "ElasticNet"];

var y3Value = [-6, -6, -9, -5];

var trace3 =
{
  x: x3Value,
  y: y3Value,
  name: "Economic Factors(Inflation, Unemployment, Growth Rate and the Trends",
  type: "bar",
  text: y3Value,
  textposition: 'auto',
  marker:
  {
    // color: 'rgb(158,202,225)',
    color: 'darkblue',
    opacity: 1
  },
  line:
    {
      width: 1.5
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
