/*eslint-disable */
function CriaGrafico(variavel, fi){
  const type = DefineTipo(variavel);
  const options = DefineOptions(type, variavel, 'teste', 'teste1', 'teste2');
  google.charts.load('current', {'packages': ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  const dadosProntos = PreparaDados(fi);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Horizontal');
    data.addColumn('number', null);
    data.addRows(dadosProntos);
    const chart = new google.visualization[type](document.getElementById('myChart'));
    chart.draw(data, options);
  }
}

function DefineTipo(variavel){
  if (variavel == 'qualitativa') {
    return 'PieChart';
  }
  return 'ColumnChart';
}

function PreparaDados(fi) {
  const dadosProntos = [];
  for (var i = 0; i < fi[0].length; i++) {
    const data = [];
    data.push((fi[1][i]).toString(), fi[0][i]);
    dadosProntos[i] = data;
  }
  return dadosProntos;
}

function DefineOptions(
  type,
  variavel,
  title = null,
  labelHorizontal = null,
  labelBar = null
) {
  let options = {};
  if (type == 'PieChart') {
   return options = {
      title: title,
    }
  }else if (type == 'ColumnChart' && variavel == 'discreta') {
    return options = {
      title: title,
      hAxis: {
        title: labelHorizontal
      },
      vAxis: {
        labelBar
      }
    }
  }else if (type == 'ColumnChart' && variavel == 'continua') {
    return options = {
      width: 800,
      height: 400,
      title: title,
      hAxis: {
        title: labelHorizontal
      },
      vAxis: {
        labelBar
      },
      bar: { groupWidth: "100%" }
    }
  }
}
/*eslint-enable */

exports.init = CriaGrafico;
