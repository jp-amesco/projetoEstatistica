function addEventButton(abasMenu, menu, insercaoDados, elementClass) {
  for (let i = 0; i < abasMenu.length; i++) {
    abasMenu[i].classList.add('disabled');
    if (abasMenu[i].classList.contains('active')) {
      abasMenu[i].classList.remove('active');
    }
    if(!menu.classList.contains('d-none')){
      insercaoDados.classList.add('d-none');
    }
  }
  document.querySelector('.' + elementClass).classList.add('active');
  document.querySelector('#btn-iniciais').classList.add('d-none');
  document.querySelector('#voltar').classList.remove('d-none');
}

exports.init = addEventButton;
