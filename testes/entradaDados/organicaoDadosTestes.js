//variavel que recebe a função a ser testada
const organizacaoDados = require('../../js/dados/organizacaoDados.js');

//mensagem que aparecerá no console em caso de erro
it('espera-se que a função retorne um array organizado por grupos ou em ordem crescente', function(){
	//array passado para ser organizado
	dados = [3, 2, 1];
	//array organizado para comparação
	resposta = [1, 2, 3];
	//resposta da função que organiza o array
	array = organizacaoDados.init(dados);
	//recebe a resposta da função de verificação, pois para comparar objeto não basta simplesmente colocar '==' ou '===', ambos retorna false
	verificado = equivalente(array, resposta)
	//variavel a ser testada, valor esperado
	expect(verificado).toBe(true);
});

it('espera-se que a função retorna um array organizado recenbendo variavel qualitativa', function(){
    //array passado para ser organizado
    dados = ['M', 'F', 'M', 'F', 'F', 'F', 'M'];
    //array organizado para comparação
    resposta = ['F', 'F', 'F', 'F', 'M', 'M', 'M'];
    //resposta da função que organiza o array
    array = organizacaoDados.init(dados);
    //recebe a resposta da função de verificação, pois para comparar objeto não basta simplesmente colocar '==' ou '===', ambos retorna false
    verificado = equivalente(array, resposta)
    //variavel a ser testada, valor esperado
    expect(verificado).toBe(true);
});

//função que verifica se os dados são equivalentes
function equivalente(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    //testa o tamanho dos objetos recebidos
    if (aProps.length != bProps.length) {
    	//se forem diferentes, retorna false
        return false;
    }

    //verifica todos os elementos do objeto
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        //se algum for diferente retorna false
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    //se forem iguais retorna true
    return true;
}
