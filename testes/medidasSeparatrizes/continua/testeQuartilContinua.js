const quartil = require('../../../js/medidasSeparatrizes/quartilContinua.js');

it('Espera-se que a função calcule e retorne o quartil 1 da variavel continua, (QUARTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 1;;
  response = quartil.init(dados, separatriz)
  expect(response).toBe(65.28);
});

it('Espera-se que a função calcule e retorne o quartil 2 da variavel continua, (QUARTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 2;
  response = quartil.init(dados, separatriz);
  expect(response).toBe(69.5);
});

it('Espera-se que a função calcule e retorne o quartil 3 da variavel continua, (QUARTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 3;
  response = quartil.init(dados, separatriz);
  expect(response).toBe(73.76);
});
