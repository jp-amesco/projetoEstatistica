const Highcharts = require('highcharts');

function createChart(dados, array, classes) {
  const data = preparaDados(classes, array);
  const nomesLabels = preparaLabels(dados, array);
  data.push(0);
  Highcharts.chart('myChart', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Monthly Average Rainfall'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: nomesLabels,
    crosshair: true,
    labels: {
      align: 'right'
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      groupPadding: -0.34
    }
  },
  series: [{
    name: 'Tokyo',
    data: data

  }]
});

  const labels = document.querySelector('.highcharts-xaxis-labels')
  let dist = 65;
  let teste = (15 * 5) - (array.quantClasse * 5) + 42;
  console.log(labels.children[0].getAttribute('x'));
  console.log(labels.children[1].getAttribute('x'));
  for (let i = 1; i <= labels.children.length; i++) {
    labels.children[i - 1].removeAttribute('x');
    labels.children[i - 1].setAttribute('x', dist);
    dist += teste;
  }
}


function preparaDados(classes, array) {
  const dadosCol = [];
  for (let i = 0; i < array.quantClasse; i++) {
    dadosCol.push(classes['classe' + (i + 1)].length);
  }
  return dadosCol;
}

function preparaLabels(dados, array) {
  const nomesLabels = [];
  for (var i = 0; i <= array.quantClasse; i++) {
    nomesLabels.push(dados[0] + i * array.intervalo)
  }
  return nomesLabels;
}

exports.init = createChart;
