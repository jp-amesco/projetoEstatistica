const quartil = require('../../../js/medidasSeparatrizes/quartil.js');

it('Espera-se que a função calcule e retorne o quartil 1 da variavel discreta, (QUARTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 1;
  response = quartil.init(dados, separatriz);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o quartil 2 da variavel discreta, (QUARTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 2;
  response = quartil.init(dados, separatriz);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o quartil 3 da variavel discreta, (QUARTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  separatriz = 3;
  response = quartil.init(dados, separatriz);
  expect(response).toBe(7);
});

