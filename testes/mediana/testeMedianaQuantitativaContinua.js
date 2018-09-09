const medianaQuantitativaContinua = require('../../js/mediana/medianaQuantitativaContinua.js');
const array = require('../../js/intervaloClasse.js');
const calculaFac = require('../../js/calculaFac.js');

it('espera-se que a função retorne a mediana da variavel quantitativa continua (MEDIANA_CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  intervalo = array.init(dados);
  facs = calculaFac.init(dados, intervalo);
  response = medianaQuantitativaContinua.init(dados, facs, intervalo);
  expect(response).toBe(56.5);
});
