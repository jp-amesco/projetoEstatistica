const decil = require('../../../js/medidasSeparatrizes/medidasSeparatrizesContinua.js');
const intervalo = require('../../../js/intervaloClasse.js');
const calculaClassesContinua = require('../../../js/calculaClassesContinua.js');
const calculaFacContinua = require('../../../js/calculaFacContinua.js');

let dados = [
  47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
  68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
];
let arrayIntervalo = intervalo.init(dados);
let facs = calculaFacContinua.init(dados, arrayIntervalo);
let medida = 10;
let classes = calculaClassesContinua.init(dados, arrayIntervalo);

it('Espera-se que a função calcule e retorne o decil 1 da variavel continua, (DECIL_CONTINUA)', function(){
  let parte = 1;
  response = decil.init(dados, arrayIntervalo, facs, parte, medida, classes);
  expect(response).toBe(56);
});


it('Espera-se que a função calcule e retorne o decil 3 da variavel continua, (DECIL_CONTINUA)', function(){
  let parte = 3;
  response = decil.init(dados, arrayIntervalo, facs, parte, medida, classes);
  expect(response).toBe(66.125);
});

it('Espera-se que a função calcule e retorne o decil 7 da variavel continua, (DECIL_CONTINUA)', function(){
  let parte = 7;
  response = decil.init(dados, arrayIntervalo, facs, parte, medida, classes);
  expect(response).toBe(72.875);
});


it('Espera-se que a função calcule e retorne o decil 9 da variavel continua, (DECIL_CONTINUA)', function(){
  let parte = 9;
  response = decil.init(dados, arrayIntervalo, facs, parte, medida, classes);
  expect(response).toBe(83)
});


