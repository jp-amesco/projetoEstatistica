const medidasSeparatrizesDiscreta = require('../medidasSeparatrizes/medidasSeparatrizesDiscreta.js');

function manipulaMedidasSeparatrizes(slider, result, dados, output) {
  for (let i = 0; i < slider.length; i++) {
    slider[i].value = 1;
    result[i].innerHTML = medidasSeparatrizesDiscreta.init(dados, slider[i].value, slider[i].max);
    output[i].innerHTML = slider[i].value;
    slider[i].addEventListener('input', function (e) {
      output[i].innerHTML = this.value;
      result[i].innerHTML = medidasSeparatrizesDiscreta.init(dados, this.value, this.max);
    });
  }
}

exports.init = manipulaMedidasSeparatrizes;
