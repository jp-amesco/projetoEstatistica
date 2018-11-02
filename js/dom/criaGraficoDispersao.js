const Highcharts = require('highcharts');

function criaGraficodispersao (dados) {
  const data = preparaDadosParaGrafico(dados);
  const chart = {
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'Height Versus Weight of 507 Individuals by Gender'
    },
    subtitle: {
      text: 'Source: Heinz  2003'
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Height (cm)'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Weight (kg)'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x} cm, {point.y} kg'
        }
      }
    },
    series: [{
      name: 'Female',
      color: 'rgba(223, 83, 83, .5)',
      data: data
    }]
  }
  Highcharts.chart('grafico-dispersao', chart);
}

function preparaDadosParaGrafico(dados) {
  const dadosParaGrafico = [];
  for (let i = 0; i < dados.dependente.length; i++) {
    const aux = [];
    aux.push(dados.dependente[i], dados.independente[i]);
    dadosParaGrafico.push(aux);
  }
  return dadosParaGrafico;
}
exports.init = criaGraficodispersao;
