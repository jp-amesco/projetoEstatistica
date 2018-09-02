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

exports.init = equivalente;
