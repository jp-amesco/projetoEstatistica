
function quintil(dados,parte){
  let posicao;

  if (parte == 1) {
    posicao = Math.round((1 * dados.length)/5);
    return dados[posicao-1];
  }
  if (parte == 2) {
    posicao = Math.round((2 * dados.length)/5);
    return dados[posicao-1];
  }
  if (parte == 3) {
    posicao = Math.round((3 * dados.length)/5);
    return dados[posicao-1];
  }
  if (parte == 4) {
    posicao = Math.round((4 * dados.length)/5);
    return dados[posicao-1];
  }

}

exports.init = quintil;
