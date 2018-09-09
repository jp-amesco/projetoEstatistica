
function percentil(dados,parte){

  const posicao = (dados.length*parte)/100
  return dados[Math.round(posicao)-1];
}

exports.init = percentil;

