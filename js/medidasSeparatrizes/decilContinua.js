const dados = [
19,19,19,19,19,20,20,20,21,21,22,22,22,23,25,25,26,27,28,28,30,32,35,39,40,41,42,46
];
const parte = 6;
const array = {intervalo: 7, quantClasse: 4};
let fac = [17,18,19,20,21,22];
let facAnterior = 16;

function decilContinua () {
  const posicao = (dados.length*parte)/10 //resultado disso = 16,8
  let classes = [];
  let vetDados = []
  let cont = 1;
  let primeiroInter = [];
  let frequencia = [];
  let decCont = 0;

  decCont = Math.round(posicao);

  for (let i = 0; i < dados.length; i++) {
    if (dados[i] < dados[0] + array.intervalo * cont) {
      vetDados.push(dados[i]);
    }else{
      classes['classe' + cont] = vetDados;
      vetDados = [dados[i]];
      cont++;
    }
  }
  classes['classe' + cont] = vetDados;
  console.log(classes)


  for (let i = 0; i < array.quantClasse; i++) {
    primeiroInter[i] = dados[0] + array.intervalo * i;
    frequencia[i] = classes['classe' + (i + 1)].length;
  }
}

const teste = decilContinua();
console.log(teste);
exports.init = decilContinua;
