const normal = require('../probabilidade/normal.js');

function addEventProb(allCheckBox){
  let teste;
  for (var i = 0; i < allCheckBox.length; i++) {
    allCheckBox[i].addEventListener('change', function(e){
      e.preventDefault;
      if (this.id == 'maiorCheck' && e.target.checked) {
        document.querySelector('.maiorque').classList.remove('d-none');
        document.querySelector('.btnProb').classList.remove('d-none');
        document.querySelector('#entreCheck').setAttribute('disabled', 'disabled')
      }else if (this.id == 'maiorCheck' && !e.target.checked) {
        document.querySelector('#entreCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('.maiorque').classList.add('d-none');
        document.querySelector('#maior').value = '';
      }else if (this.id == 'menorCheck' && e.target.checked) {
        document.querySelector('.menorque').classList.remove('d-none');
        document.querySelector('.btnProb').classList.remove('d-none');
        document.querySelector('#entreCheck').setAttribute('disabled', 'disabled')
      }else if (this.id == 'menorCheck' && !e.target.checked) {
        document.querySelector('#entreCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('.menorque').classList.add('d-none');
        document.querySelector('#menor').value = '';
      }else if (this.id == 'entreCheck' && e.target.checked) {
        document.querySelector('.entre').classList.remove('d-none');
        document.querySelector('.btnProb').classList.remove('d-none');
        document.querySelector('#maiorCheck').setAttribute('disabled', 'disabled')
        document.querySelector('#menorCheck').setAttribute('disabled', 'disabled')
      }else {
        document.querySelector('#maiorCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('#menorCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('.entre').classList.add('d-none');
        document.querySelector('#entre').value = '';
      }
    });
  }

  document.querySelector('#btnProb').addEventListener('click', function(e){
    e.preventDefault;
    valorPonto = [];
    const tipo = [];
    const valorPontoKey = [];
    let tipoEnviar;
    const media = document.querySelector('.mediaProb').value;
    const desvioPadrao = document.querySelector('.desvioProb').value;
    const valueInput = document.querySelectorAll('.input-dados-prob');
    for (let i = 0; i < valueInput.length; i++) {
      if (!valueInput[i].value == '') {
        tipo.push(valueInput[i].id);
        tipoEnviar = valueInput[i].id;
        valorPontoKey[valueInput[i].id] = valueInput[i].value
        valorPonto.push(valueInput[i].value);
      }
    }

    const valorPontoOrganizado = valorPonto.sort();
    const ponto1 = valorPontoOrganizado[0];
    const ponto2 = valorPontoOrganizado[1] ? valorPontoOrganizado[1] : null;
    tipoEnviar = (tipo.indexOf('entre2') < 0) ? null : 'entre';
    if (valorPontoKey['maior'] < valorPontoKey['menor']) {
      tipoEnviar = 'entre';
    }
    const response = normal.init(media, desvioPadrao, tipoEnviar, ponto1, ponto2);
  });

  document.querySelector('#selectProb').addEventListener('change', function(e){
    e.preventDefault;
    if (this.value == 'Distribuição Normal') {
      document.querySelector('.mediaDesvio').classList.remove('d-none');
      document.querySelector('.maiorMenorEntre').classList.remove('d-none');
      document.querySelector('.checkboxProb').classList.remove('d-none');
    }else if(this.value == 'Distribuição Uniforme'){
      document.querySelector('.checkboxProb').classList.add('d-none');
      document.querySelector('.maiorMenorEntre').classList.add('d-none');
      document.querySelector('.mediaDesvio').classList.add('d-none');
    }else{
      document.querySelector('.checkboxProb').classList.add('d-none');
      document.querySelector('.maiorMenorEntre').classList.add('d-none');
      document.querySelector('.mediaDesvio').classList.add('d-none');
    }
  });
}

exports.init = addEventProb;
