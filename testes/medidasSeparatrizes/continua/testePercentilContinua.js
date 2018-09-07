const percentil = require('../../../js/medidasSeparatrizes/percentil.js');

it('Espera-se que a função calcule e retorne o percentil 8 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 8;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(54.2);
});

it('Espera-se que a função calcule e retorne o percentil 27 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 27;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(65.6);
});

it('Espera-se que a função calcule e retorne o percentil 52 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 52;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(69.83);
});

it('Espera-se que a função calcule e retorne o percentil 79 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 79;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(75.57);
});

it('Espera-se que a função calcule e retorne o percentil 95 da variavel discreta, (PERCENTIL_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  separatriz = 95;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(94.25);
});



