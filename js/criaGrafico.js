//const GoogleCharts = require('../node_modules/google-charts/googleCharts.js');
//import {GoogleCharts} from 'google-charts';
//console.log(GoogleCharts);
//const teste = new GoogleCharts();
//Load the charts library with a callback
//teste.load('current', {'packages':['corechart'], 'callback': drawChart});
/*eslint-disable */

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    // Standard google charts functionality is available as GoogleCharts.api after load
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Lorem ipsum', 3],
    ['Dolor sit', 1],
    ['Sit amet', 1],
    ['Pepperoni', 2]
  ]);
  const options = { 'tittle':'teste',
                    'width':400,
                    'height':300};
  const chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}

function defineTipo(variavel){
  if (variavel == 'qualitativa') {
    return 'pie';
  }
  return 'bar';
}
/*eslint-enable */

exports.init = drawChart;
