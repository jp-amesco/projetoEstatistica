
function decil(dados,parte){

  const posicao = (dados.length*parte)/10
  return dados[Math.round(posicao)-1];
}

exports.init = decil;

