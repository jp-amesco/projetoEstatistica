const decil = require('../../../js/medidasSeparatrizes/medidasSeparatrizesContinua.js');
const intervalo = require('../../../js/intervaloClasse.js');
const calculaFacContinua = require('../../../js/calculaFacContinua.js');

let dados = [
  47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
  68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
];
let arrayIntervalo = intervalo.init(dados);
let facs = calculaFacContinua.init(dados, arrayIntervalo);
let medida = 5;

it('Espera-se que a função calcule e retorne o quintil 1 da variavel continua, (QUINTIL_CONTINUA)', function(){
  let parte = 1;
  response = decil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(62.75);
});

it('Espera-se que a função calcule e retorne o quintil 2 da variavel continua, (QUINTIL_CONTINUA)', function(){
  let parte = 2;
  response = decil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(67.8125);
});

it('Espera-se que a função calcule e retorne o quintil 3 da variavel continua, (QUINTIL_CONTINUA)', function(){
  let parte = 3;
  response = decil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(71.1875);
});

it('Espera-se que a função calcule e retorne o quintil 4 da variavel continua, (QUINTIL_CONTINUA)', function(){
  let parte = 4;
  response = decil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(76.25);
});


