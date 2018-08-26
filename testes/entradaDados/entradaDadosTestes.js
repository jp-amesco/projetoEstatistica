const entradaDados = require('../../js/dados/entradaDados.js');

it('espera-se que a função retorne um array', function(){
	array = entradaDados.init();
	expect(typeOf(array)).toBe('array');
});

it('espera-se que a função retorne false caso os dados recebidos seja nulo', function(){
	array = entradaDados.init();
	expect(array).toBe(false);
});

it('espera-se que a função retorne false caso os dados recebidos seja inválidos', function(){
	dados = ['A', 1, 5, '2', 125];
	array = entradaDados.init(dados);
	expect(typeOf(array)).toBe(false);
});