function decil(){
  const dados = [1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,5,5,5,5];
  const parte = 1

  posicao = (dados.length*parte)/10
  return dados[posicao-1];
}

exports.init = decil;
const test = decil();
console.log(test);
