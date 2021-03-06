/* 
Trump Jo Approval
*/

var trace1 = 
{
  x: TrumpJobApproval_Data.Pollster,
  y: TrumpJobApproval_Data.TrumpJobApproval,
  type: "box",
  name: "Trump Job Approval - Pollsters",
  marker:
  {
    color: '#751108',
    outliercolor: 'rgba(219, 64, 82, 0.6)',
    line:
    {
      outliercolor: 'rgba(219, 64, 82, 1.0)',
      outlierwidth: 1
    }
  },
  boxpoints: "all"
};

var data = [trace1];

var layout =
{
  title: "Trump Job Approval - Pollsters",
  xaxis: { title: "Pollster" },
  yaxis: { title: "Trump Job Approval" }
};

Plotly.newPlot("plot", data, layout);