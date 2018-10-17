const percentil = require('../../../js/medidasSeparatrizes/medidasSeparatrizesContinua.js');
const intervalo = require('../../../js/intervaloClasse.js');
const calculaFacContinua = require('../../../js/calculaFacContinua.js');

it('Espera-se que a função calcule e retorne o percentil 8 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  parte = 8;
  arrayIntervalo = intervalo.init(dados);
  facs = calculaFacContinua.init(dados, arrayIntervalo);
  medida = 100;
  response = percentil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(54.2);
});

it('Espera-se que a função calcule e retorne o percentil 27 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  parte = 27;
  arrayIntervalo = intervalo.init(dados);
  facs = calculaFacContinua.init(dados, arrayIntervalo);
  medida = 100;
  response = percentil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(65.61875);
});

it('Espera-se que a função calcule e retorne o percentil 52 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  parte = 52;
  arrayIntervalo = intervalo.init(dados);
  facs = calculaFacContinua.init(dados, arrayIntervalo);
  medida = 100;
  response = percentil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(69.8375);
});

it('Espera-se que a função calcule e retorne o percentil 79 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  parte = 79;
  arrayIntervalo = intervalo.init(dados);
  facs = calculaFacContinua.init(dados, arrayIntervalo);
  medida = 100;
  response = percentil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(75.575);
});

it('Espera-se que a função calcule e retorne o percentil 95 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 71, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  parte = 95;
  arrayIntervalo = intervalo.init(dados);
  facs = calculaFacContinua.init(dados, arrayIntervalo);
  medida = 100;
  response = percentil.init(dados, arrayIntervalo, facs, parte, medida);
  expect(response).toBe(94.25);
});



