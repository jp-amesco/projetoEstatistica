const Highcharts = require('highcharts');

function createChart(variavel, fi, dados = null, array = null, classes = null) {
  const data = preparaDados(classes, array, variavel, fi);
  const chart = defineGrafico(data, variavel, array, classes);

  Highcharts.chart('myChart', chart);
  if (variavel == 'continua') {
    const responseLabels = preparaLabels(classes, array, variavel);
    const width = 810 - responseLabels[1] * -2;
    const widthChart = width.toString() + 'px';
    document.querySelector('.highcharts-container').style.width = widthChart;
    document.querySelector('.highcharts-credits').classList.add('d-none');
  }
}


function preparaDados(classes, array, variavel, fi) {
  const data = [];
  if(variavel == 'continua'){
    const dadosCol = [];
    for (let i = 0; i < array.quantClasse; i++) {
      dadosCol.push(classes['classe' + (i + 1)].length);
    }
    return dadosCol;
  } else if (variavel == 'discreta'){
    let somaFi = 0;
    for (let i = 0; i < fi[0].length; i++) {
      somaFi+= fi[0][i];
    }
    for (let i = 0; i < fi[0].length; i++) {
      data[i] = {
        name: fi[1][i],
        y: fi[0][i] * 100 / somaFi
      }
    }
    return data;
  } else {
    for (let i = 0; i < fi[0].length; i++) {
      data[i] = {
        name: fi[1][i],
        y: fi[0][i],
        drilldown: fi[1][i],
      }
    }
    return data;
  }
}

function preparaLabels(classes, array) {
  const response = [];
  const nomesLabels = [];
  const positionLabels = (723 / (array.quantClasse + 1) / 2) * -1;
  for (let i = 0; i <= array.quantClasse; i++) {
    nomesLabels.push(classes['classe1'][0] + i * array.intervalo)
  }
  response.push(nomesLabels, positionLabels);
  return response;
}

function defineGrafico(data, variavel, array, classes = null) {
  if (variavel == 'continua') {
    const responseLabels = preparaLabels(classes, array, variavel);
    data.push(0);
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Gráfico Continua'
      },
      xAxis: {
        categories: responseLabels[0],
        labels: {
          x: responseLabels[1],
        },
      },
      yAxis: {
        min: 0,
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
          pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0,
          shadow: false,
        }
      },
      series: [{
        name: 'Variavel',
        data: data,
      }]
    }
  } else if(variavel == 'discreta'){
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Gráfico Discreta'
      },
      yAxis: {
        min: 0,
        title: {
          text: 'porcentagem'
        }
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        },
        series: {
          borderWidth: 5,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> do total<br/>'
      },
      series: [{
        name: 'Variável',
        colorByPoint: true,
        data: data,
      }]
    }
  } else {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Gráfico Qualitativa'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        ame: 'Brands',
        colorByPoint: true,
        data: data
      }]
    }
  }
}
exports.init = createChart;
