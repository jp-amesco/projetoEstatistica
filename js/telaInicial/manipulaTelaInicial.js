function manipulaTelaInicial () {
  document.querySelector('#comece_agora').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#comece_agora').classList.add('d-none');
    const todosTiposPesquisa = document.querySelector('#todos_tipos_pesquisa');
    todosTiposPesquisa.classList.remove('d-none');
    const tiposPesquisa = document.querySelectorAll('.tipo_pesquisa');
    for (let i = 0; i < tiposPesquisa.length; i++) {
      tiposPesquisa[i].addEventListener('click', function(event){
        event.preventDefault();
        teste(tiposPesquisa[i].id);
      });
    }
  });
}


function teste(a) {
  alert(a);
}
exports.init = manipulaTelaInicial;
