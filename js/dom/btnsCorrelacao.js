const addCampo = require('./addCampo.js');
const removeCampo = require('./removeCampo.js');
const preparaDadosCorrelacao = require('../dados/preparaDadosCorrelacao.js');
const calculosCorrelacaoRegressao = require('../correlacao/calculosCorrelacaoRegressao.js');
const correlacao = require('../correlacao/correlacao.js');
const criaGraficoDispersao = require('../dom/criaGraficoDispersao.js');
const lerArquivoCorrelacao = require('../dados/lerArquivoCorrelacao.js');
const regressao = require('../correlacao/regressao.js');

function btnscorrelacao() {
  const btnAddRemove = document.querySelectorAll('.btnCorrelacao');
  for (var i = 0; i < btnAddRemove.length; i++) {
    btnAddRemove[i].addEventListener('click', function(e){
      e.preventDefault;
      if(this.id == 'add'){
        addCampo.init();
      } else if(this.id == 'remove'){
        removeCampo.init();
      } else {
        const direita = document.querySelectorAll('.direita');
        const esquerda = document.querySelectorAll('.esquerda');
        const radio = document.getElementsByName('variavel');
        const select = document.querySelector('#select-variavel').value;
        const inputNewDado = parseInt(document.querySelector('#dadosRegressao').value);
        const dadosPreparados = preparaDadosCorrelacao.init(direita, esquerda, radio);
        const calculos = calculosCorrelacaoRegressao.init(dadosPreparados.dependente, dadosPreparados.independente);
        const resultCorrelacao = correlacao.init(calculos);
        document.querySelector('#resultCorrelacao').innerHTML = resultCorrelacao + '%';
        criaGraficoDispersao.init(dadosPreparados, calculos, this.id, regressao, select, inputNewDado);
      }
    });
  }

  document.querySelector('#arquivoCorrelacao').addEventListener('change', function(e){
    e.preventDefault;
    lerArquivoCorrelacao.init(this)
  });
}

exports.init = btnscorrelacao;
