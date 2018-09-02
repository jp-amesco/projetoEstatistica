//variavel que recebe a função a ser testada
const organizacaoDados = require('../../js/dados/organizacaoDados.js');
const equivalente = require('../comparaVetor.js');

//mensagem que aparecerá no console em caso de erro
it('espera-se que a função retorne um array organizado por grupos ou em ordem crescente (ORGANIZA_DADOS)', function(){
	//array passado para ser organizado
	dados = [3, 2, 1];
	//array organizado para comparação
	resposta = [1, 2, 3];
	//resposta da função que organiza o array
	array = organizacaoDados.init(dados);
	//recebe a resposta da função de verificação, pois para comparar objeto não basta simplesmente colocar '==' ou '===', ambos retorna false
	verificado = equivalente.init(array, resposta)
	//variavel a ser testada, valor esperado
	expect(verificado).toBe(true);
});

it('espera-se que a função retorna um array organizado recenbendo variavel qualitativa (ORGANIZA_DADOS)', function(){
    //array passado para ser organizado
    dados = ['M', 'F', 'M', 'F', 'F', 'F', 'M'];
    //array organizado para comparação
    resposta = ['F', 'F', 'F', 'F', 'M', 'M', 'M'];
    //resposta da função que organiza o array
    array = organizacaoDados.init(dados);
    //recebe a resposta da função de verificação, pois para comparar objeto não basta simplesmente colocar '==' ou '===', ambos retorna false
    verificado = equivalente.init(array, resposta)
    //variavel a ser testada, valor esperado
    expect(verificado).toBe(true);
});
