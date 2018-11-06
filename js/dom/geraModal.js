function geraModalPergunta () {
  $('#meuModal').modal('show');
  document.getElementById('btnResposta').addEventListener('click', function(e){
    e.preventDefault;

    let aux = document.querySelectorAll('.variavelPergunta');
    let response;

    for (let i = 0; i < aux.length; i++) {
      if (aux[i].checked) {
        response = aux[i].id;
      }
    }

    $('#meuModal').modal('hide');
    return response;
  });
}

exports.init = geraModalPergunta;
