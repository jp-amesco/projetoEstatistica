var teste = require('../../js/moda/moda.js');

it('espera-se que a função retorne um array de string ordenado', function(){
	testes = teste.init(1, 2);
	expect(testes).toBe(3);
});