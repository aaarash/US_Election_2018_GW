/* 
*/

var trace1 = 
{
  x: TrumpJobDisApproval_Data.Pollster,
  y: TrumpJobDisApproval_Data.TrumpJobDisApproval,
  type: "box",
  name: "Trump Job Dis-Approval - Pollsters",
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
  title: "Trump Job Dis-Approval - Pollsters",
  xaxis: { title: "Pollster" },
  yaxis: { title: "Trump Job Dis-Approval" }
};

Plotly.newPlot("plot", data, layout);