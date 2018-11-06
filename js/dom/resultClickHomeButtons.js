const btnsCorrelacao = require('./btnsCorrelacao.js');

function resultClickHomeButtons (addEventButtons) {
  const btnInicio = document.querySelectorAll('.btn-inicio');
  const menu =  document.querySelector('#menu-tabs');//div menu
  const insercaoDados = document.querySelector('.insercaoDados');
  const voltar = document.querySelector('#voltar');
  const cr = document.querySelector('.cr');
  let abasMenu;

  for (let i = 0; i < btnInicio.length; i++) {
    btnInicio[i].addEventListener('click', function(e){
      e.preventDefault;
      switch (this.id) {
        case 'descritiva':
          insercaoDados.classList.remove('d-none');
          if(!menu.classList.contains('d-none')){
            menu.classList.add('d-none');
          }
          document.querySelector('#btn-iniciais').classList.add('d-none');
          voltar.classList.remove('d-none');
          break;
        case 'probabilidade':
          menu.classList.remove('d-none');
          abasMenu = document.querySelectorAll('.not-probability');
          addEventButtons.init(abasMenu, menu, insercaoDados, this.id);
          break;
        case 'correlacao':
          menu.classList.remove('d-none')
          abasMenu = document.querySelectorAll('.not-cr');
          addEventButtons.init(abasMenu, menu, insercaoDados, this.id);
          document.querySelector('.cr').classList.remove('d-none');
          btnsCorrelacao.init()
          break;
      }
    });
  }

  voltar.addEventListener('click', function(e){
    window.location.reload()
  });
}

exports.init = resultClickHomeButtons;
