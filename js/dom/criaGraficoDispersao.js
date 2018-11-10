const Highcharts = require('highcharts');

function criaGraficodispersao (dados, calculos, tipo, regressao, select, newDado, relacaoVariaveis) {
  let chart;
  let dataReta;
  const data = preparaDadosParaGraficoCorrelacao(dados);
  if (tipo == 'correlacao') {
    chart = optionsCorrelacao(data);
  } else {
    dataRegressao = preparaDadosParaGraficoRegressao(data, dados, calculos, select, regressao, relacaoVariaveis, newDado)
    chart = optionsRegressao(data, dataRegressao);
  }
  Highcharts.chart('grafico-dispersao', chart);
}

function preparaDadosParaGraficoCorrelacao(dados) {
  const dadosParaGrafico = [];
  for (let i = 0; i < dados.dependente.length; i++) {
    const aux = [];
    aux.push(dados.independente[i], dados.dependente[i]);
    dadosParaGrafico.push(aux);
  }
  return dadosParaGrafico;
}

function preparaDadosParaGraficoRegressao(data, dados, calculos, select, regressao, relacaoVariaveis, newDado = null){
  let secondPoint;
  const firstPoint = [
    regressao.init(calculos, 'dependente', dados.dependente[0]),
    dados.dependente[0],
  ]
  const lastPoint = [
    regressao.init(calculos, 'dependente', dados.dependente[dados.dependente.length - 1]),
    dados.dependente[dados.dependente.length - 1],
  ];

  if (isNaN(newDado)) {
    return [firstPoint, lastPoint];
  }

  if (select == 'Dependente') {
    secondPoint = [
      regressao.init(calculos, select, newDado),
      newDado,
    ]
    data.push(secondPoint);
    if(newDado > dados.dependente[0] && newDado < dados.dependente[dados.dependente.length - 1]){
      return [firstPoint, lastPoint];
    }else if (newDado < dados.dependente[0]) {
      return [secondPoint, lastPoint];
    }
    return [firstPoint, secondPoint]
  }

  secondPoint = [
    newDado,
    regressao.init(calculos, select, newDado)
  ];
  data.push(secondPoint);

  if (relacaoVariaveis == 'inversamente') {
    if (newDado < dados.independente[0] && newDado > dados.independente[dados.independente.length - 1]) {
      return [firstPoint, lastPoint];
    }else if (newDado > dados.independente[0]) {
      return [secondPoint, lastPoint];
    } else if(newDado < dados.independente[dados.independente.length - 1]) {
      return [firstPoint, secondPoint];
    }
  }

  if (newDado < dados.independente[0]) {
    return [secondPoint, lastPoint];
  }
  return [firstPoint, secondPoint];
}

function optionsCorrelacao(data) {
  return {
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'variavel1 + x + variavle2'
    },
    subtitle: {
      text: 'Gráfico de dispersão'
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
}

function optionsRegressao(data, dataRegressao) {
  return {
    title: {
      text: "variavel1 + x + variavle2"
    },
    subtitle:{
      text: 'Gráfico projeção futura'
    },
    series: [{
      type: 'line',
      name: 'Regression Line',
      data: dataRegressao,
      marker: {
        enabled: false
      },
      states: {
        hover: {
          lineWidth: 0
        }
      },
      enableMouseTracking: false
    }, {
      type: 'scatter',
      name: 'Observations',
      data: data,
      tooltip:{
        pointFormat: 'variavle1{point.x}, variavle1{point.y}'
      },
      marker: {
        radius: 4
      }
    }]
  }
}
exports.init = criaGraficodispersao;
