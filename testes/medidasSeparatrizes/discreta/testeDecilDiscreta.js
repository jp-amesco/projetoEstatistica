const decil = require('../../../js/medidasSeparatrizes/medidasSeparatrizesDiscreta');

it('Espera-se que a função calcule e retorne o decil 1 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 1;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(2);
});

it('Espera-se que a função calcule e retorne o decil 2 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 2;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o decil 3 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 3;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o decil 4 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 4;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o decil 5 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 5;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o decil 6 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 6;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o decil 7 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 7;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(7);
});

it('Espera-se que a função calcule e retorne o decil 8 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 8;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(7);
});

it('Espera-se que a função calcule e retorne o decil 9 da variavel discreta, (DECIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 9;
  medida = 10;
  response = decil.init(dados, parte, medida);
  expect(response).toBe(7);
});


