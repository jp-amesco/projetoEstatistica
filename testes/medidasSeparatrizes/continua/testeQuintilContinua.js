const quintil = require('../../../js/medidasSeparatrizes/quintilContinua.js');

it('Espera-se que a função calcule e retorne o quintil 1 da variavel continua, (QUINTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 1;
  response = quintil.init(dados, separatriz);
  expect(response).toBe(62.75);
});

it('Espera-se que a função calcule e retorne o quintil 2 da variavel continua, (QUINTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 2;
  response = quintil.init(dados, separatriz);
  expect(response).toBe(67.81);
});

it('Espera-se que a função calcule e retorne o quintil 3 da variavel continua, (QUINTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 3;
  response = quintil.init(dados, separatriz);
  expect(response).toBe(71.18);
});

it('Espera-se que a função calcule e retorne o quintil 4 da variavel continua, (QUINTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 4;
  response = quintil.init(dados, separatriz);
  expect(response).toBe(76.25);
});


