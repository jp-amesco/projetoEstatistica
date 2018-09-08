const decil = require('../../../js/medidasSeparatrizes/decilContinua.js');

it('Espera-se que a função calcule e retorne o decil 1 da variavel continua, (DECIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 1;
  response = decil.init(dados, separatriz);
  expect(response).toBe(56);
});


it('Espera-se que a função calcule e retorne o decil 3 da variavel continua, (DECIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 3;
  response = decil.init(dados, separatriz);
  expect(response).toBe(66.125);
});

it('Espera-se que a função calcule e retorne o decil 7 da variavel continua, (DECIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 7;
  response = decil.init(dados, separatriz);
  expect(response).toBe();
});


it('Espera-se que a função calcule e retorne o decil 9 da variavel continua, (DECIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 9;
  response = decil.init(dados, separatriz);
  expect(response).toBe(83);
});


