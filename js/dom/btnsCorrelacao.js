const addCampo = require('./addCampo.js');
const removeCampo = require('./removeCampo.js');
const preparaDadosCorrelacao = require('../dados/preparaDadosCorrelacao.js');
const calculosCorrelacaoRegressao = require('../correlacao/calculosCorrelacaoRegressao.js');
const correlacao = require('../correlacao/correlacao.js');
const criaGraficoDispersao = require('../dom/criaGraficoDispersao.js');
const lerArquivoCorrelacao = require('../dados/lerArquivoCorrelacao.js');

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
        const dependente = document.querySelectorAll('.dependente')
        const independente = document.querySelectorAll('.independente')
        const dadosPreparados = preparaDadosCorrelacao.init(dependente, independente);
        const calculos = calculosCorrelacaoRegressao.init(dadosPreparados.dependente, dadosPreparados.independente);
        const resultCorrelacao = correlacao.init(calculos);
        document.querySelector('#resultCorrelacao').innerHTML = resultCorrelacao + '%';
        criaGraficoDispersao.init(dadosPreparados);
      }
    });
  }

  document.querySelector('#arquivoCorrelacao').addEventListener('change', function(e){
    e.preventDefault;
    lerArquivoCorrelacao.init(this)
  });
}

exports.init = btnscorrelacao;
