const percentil = require('../../../js/medidasSeparatrizes/percentil.js');

it('Espera-se que a função calcule e retorne o percentil 8 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 8;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(2);
});

it('Espera-se que a função calcule e retorne o percentil 23 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 23;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o percentil 52 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 52;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o percentil 79 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 79;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(7);
});

it('Espera-se que a função calcule e retorne o percentil 95 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 95;
  response = percentil.init(dados, separatriz);
  expect(response).toBe(10);
});



