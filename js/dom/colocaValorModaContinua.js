function colocaValorModaContinua(moda, modaKing, ModaCzuber, modaPearson){
  document.querySelector('#modaContinuaSelect').addEventListener('change', function(e) {
    e.preventDefault;
    if (this.value == 'moda') {
      document.querySelector('#modaContinuaParagrafo').innerHTML = moda;
    } else if(this.value == 'mking') {
      document.querySelector('#modaContinuaParagrafo').innerHTML = modaKing;
    } else if(this.value == 'mczuber') {
      document.querySelector('#modaContinuaParagrafo').innerHTML = ModaCzuber;
    } else {
      document.querySelector('#modaContinuaParagrafo').innerHTML = modaPearson;
    }
  });
}

exports.init = colocaValorModaContinua;
