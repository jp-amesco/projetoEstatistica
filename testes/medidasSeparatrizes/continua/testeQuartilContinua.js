const quartil = require('../../../js/medidasSeparatrizes/medidasSeparatrizesContinua.js');
const intervalo = require('../../../js/intervaloClasse.js');
const calculaClassesContinua = require('../../../js/calculaClassesContinua.js');
const calculaFacContinua = require('../../../js/calculaFacContinua.js');

let dados = [
  47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
  68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
];
let arrayIntervalo = intervalo.init(dados);
let facs = calculaFacContinua.init(dados, arrayIntervalo);
classes = calculaClassesContinua.init(dados, arrayIntervalo);
let medida = 4;

it('Espera-se que a função calcule e retorne o quartil 1 da variavel continua, (QUARTIL_CONTINUA)', function(){
  parte = 1;
  response = quartil.init(dados, arrayIntervalo, facs, parte, medida, classes);
  expect(response).toBe(65.28125);
});

it('Espera-se que a função calcule e retorne o quartil 2 da variavel continua, (QUARTIL_CONTINUA)', function(){
  parte = 2;
  response = quartil.init(dados, arrayIntervalo, facs, parte, medida, classes);
  expect(response).toBe(69.5);
});

it('Espera-se que a função calcule e retorne o quartil 3 da variavel continua, (QUARTIL_CONTINUA)', function(){
  parte = 3;
  response = quartil.init(dados, arrayIntervalo, facs, parte, medida, classes);
  expect(response).toBe(73.71875);
});
