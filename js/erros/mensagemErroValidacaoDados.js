function mensagemErro (dados) {
  const mensagem = document.querySelector('#mensagem');

  if (dados == 1) {
    mensagem.classList.add('alert-danger');
    mensagem.innerHTML = 'Quantidade de dados insulficiente. Reinsira os dados';
  }else if(dados == 2){
    mensagem.classList.add('alert-danger');
    mensagem.innerHTML = 'Dados incorretos. Insira apenas números ou apenas letras';
  }

  $('#mensagem').fadeIn('300', function(){
    window.setTimeout(function(){
      $('#mensagem').fadeOut();
    }, 5000);
  });
}

exports.init = mensagemErro;
