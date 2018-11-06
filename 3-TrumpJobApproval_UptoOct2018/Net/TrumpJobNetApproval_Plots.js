/* 
*/

var trace1 = 
{
  x: TrumpJobNetApproval_Data.Pollster,
  y: TrumpJobNetApproval_Data.TrumpJobNetApproval,
  type: "box",
  name: "Trump Job Approval (Net) - Pollsters",
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
  title: "Trump Job Approval (Net) - Pollsters",
  xaxis: { title: "Pollster" },
  yaxis: { title: "Trump Job Approval (Net)" }
};

Plotly.newPlot("plot", data, layout);