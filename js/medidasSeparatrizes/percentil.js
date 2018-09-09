function porcentil(){
  const dados = [1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,5,5,5,5];
  const parte = 1

  posicao = (dados.length*parte)/100
  return dados[posicao-1];
}

exports.init = porcentil;
const test = porcentil();
console.log(test);
