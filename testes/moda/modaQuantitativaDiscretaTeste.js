const modaQuantitativaDiscreta = require('../../js/moda/modaQuantitativaDiscreta.js');
const equivalente = require('../comparaVetor.js');

it('espera-se que a função retorne as modas se a variavel for quantitativa discreta e tiverem mais que uma resposta(MODA_QUANTITATIVA_DISCRETA)', function(){
  dados = [3, 3.5, 3.5, 4, 4, 4, 5, 5, 5, 5.5];
  resposta = [4, 5]
  response = modaQuantitativaDiscreta.init(dados);
  responseEqui = equivalente.ini(response, resposta);
  expect(responseEqui).toBe(true);
});

it('espera-se que a função retorne a moda se a variavel for quantitativa discreta (MODA_QUANTITATIVA_DISCRETA)', function(){
  dados = [3, 3, 3, 3, 4, 4, 4, 5, 5, 6];
  response = modaQuantitativaDiscreta.init(dados);
  expect(response).toBe(3);
});

it('espera-se que a função retorne a moda se a variavel for quantitativa discreta recebendo poucos dados (MODA_QUANTITATIVA_DISCRETA)', function(){
  dados = [1, 2];
  resposta  = [1, 2];
  response = modaQuantitativaDiscreta.init(dados);
  responseEqui = equivalente.init(response, resposta);
  expect(responseEqui).toBe(true);
});
