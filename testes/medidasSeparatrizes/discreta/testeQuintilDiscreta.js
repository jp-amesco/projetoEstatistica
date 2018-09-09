const quintil = require('../../../js/medidasSeparatrizes/quintil.js');

it('Espera-se que a função calcule e retorne o quintil 1 da variavel discreta, (QUINTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 1;
  response = quintil.init(dados, separatriz);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o quintil 2 da variavel discreta, (QUINTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 2;
  response = quintil.init(dados, separatriz);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o quintil 3 da variavel discreta, (QUINTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 3;
  response = quintil.init(dados, separatriz);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o quintil 4 da variavel discreta, (QUINTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 4;
  response = quintil.init(dados, separatriz);
  expect(response).toBe(7);
});


