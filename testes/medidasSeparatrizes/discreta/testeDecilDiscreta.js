const decil = require('../../../js/medidasSeparatrizes/decil.js');

it('Espera-se que a função calcule e retorne o decil 1 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 1;
  response = decil.init(dados, separatriz);
  expect(response).toBe(2);
});

it('Espera-se que a função calcule e retorne o decil 2 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 2;
  response = decil.init(dados, separatriz);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o decil 3 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 3;
  response = decil.init(dados, separatriz);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o decil 4 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 4;
  response = decil.init(dados, separatriz);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o decil 5 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 5;
  response = decil.init(dados, separatriz);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o decil 6 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 6;
  response = decil.init(dados, separatriz);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o decil 7 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 7;
  response = decil.init(dados, separatriz);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o decil 8 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 8;
  response = decil.init(dados, separatriz);
  expect(response).toBe(7);
});

it('Espera-se que a função calcule e retorne o decil 9 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 9;
  response = decil.init(dados, separatriz);
  expect(response).toBe(7);
});


