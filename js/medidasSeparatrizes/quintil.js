
function quintil(){
  const dados = [1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,5,5,5,5];
  const parte = 3

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
const test = quintil();
console.log(test);
