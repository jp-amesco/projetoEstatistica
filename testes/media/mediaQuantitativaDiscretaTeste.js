const modaQuantitativaDiscreta = require('../../js/media/mediaQuantitativaDiscreta.js');
const equivalente = require('../comparaVetor.js');

it('espera-se que a função retorne a media da variavel quantitativa discreta (MEDIA_DISCRETA)', function(){
  dados = [3, 3.5, 3.5, 4, 4, 4, 5, 5, 5, 5.5];
  resposta = [4.25];
  response = modaQuantitativaDiscreta.init(dados);
  responseEqui = equivalente.init(resposta, response);
  expect(responseEqui).toBe(true);
});
