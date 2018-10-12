const entradaDados = require('./dados/entradaDados.js');
const frequencia = require('./frequencia.js');
const intervalo = require('./intervaloClasse.js');
const calculaFacContinua = require('./calculaFacContinua.js');
const identificaVariavel = require('./dados/identificaVariavel.js');
const modaQualitativa = require('./moda/modaQualitativa.js');
const modaQuantitativaDiscreta = require('./moda/modaQuantitativaDiscreta.js');
const modaQuantitativaContinua = require('./moda/modaQuantitativaContinua.js');
const mediaQuantitativaDiscreta = require('./media/mediaQuantitativaDiscreta.js');
const mediaQuantitativaContinua = require('./media/mediaQuantitativaContinua.js');
const medianaQuantitativaDiscreta = require('./mediana/medianaQuantitativaDiscreta.js');
const medianaQuantitativaContinua = require('./mediana/medianaQuantitativaContinua.js');
const medianaQualitativa = require('./mediana/medianaQualitativa.js');
const mensagemErro = require('./erros/mensagemErroValidacaoDados.js');
const criaTabela = require('./criaTabela.js');
const criaDadosTabela = require('./criaDadosTabela.js');
const criaGrafico = require('./criaGrafico.js');

//adiciona evento de click ao botão para enviar os dados
document.querySelector('#comece_agora').addEventListener('click', function(e){
  console.log('a');
  e.preventDefault();
  document.querySelector('#comece_agora').classList.add('d-none');
  const todosTiposPesquisa = document.querySelector('#todos_tipos_pesquisa');
  todosTiposPesquisa.classList.remove('d-none');
  const tiposPesquisa = document.querySelectorAll('.pesquisa');
  for (let i = 0; i < tiposPesquisa.length; i++) {
    tiposPesquisa[i].addEventListener('click', function(event){
      event.preventDefault();
      const inputDados = document.querySelector('#dados').value;

      //chama a função para verificar se os dados são validos,
      //se forem validos e numeros, converte para int
      const dados = entradaDados.init(inputDados);
      let variavel;
      //verifica se a resposta foi algum erro
      if (dados == 1 || dados == 2) {
        //chama a função que cria o erro na tela
        mensagemErro.init(dados);
      }else{
        //chama a função para identificar qual é a variavel
        variavel = identificaVariavel.init(dados);
        //chama a função de frequencia
        const fi = frequencia.init(dados);
        let moda;
        let media;
        let mediana;
        let quartil;
        let quintil;
        let decil;
        let percentil;
        //verifica qual resposta da função que identifica a variavel
        if (variavel == 'pergunta') {
          //se for pergunta, chama a função para gera uma pergunta ao usuario,
          //pedindo que ele informe qual a variavel será usada
          //variavel = geraModalPergunta.init();
        }
        if (variavel == 'qualitativa') {
          //se a variavel for moda, chama os calculos respectivos a essa variavel,
          //enviando a frequancia como parametro
          moda = modaQualitativa.init(fi);
          mediana = medianaQualitativa.init(dados);
        }else if(variavel == 'discreta') {
          moda = modaQuantitativaDiscreta.init(fi);
          media = mediaQuantitativaDiscreta.init(dados);
          mediana = medianaQuantitativaDiscreta.init(dados);
          //quartil = quartilDiscreta.init(dados, parteQuartil);
          //quintil = quintilDiscreta.init(dados, parteQuintil);
          //decil = decilDiscreta.init(dados, parteDecil);
          //percentil = percentilDiscreta.init(dados, partePercentil);
        }else if(variavel == 'continua'){
          //arrayIntervalo = intervalo.init(dados);
          //facs = calculaFacContinua.init(dados, arrayIntervalo);
          //moda = modaQuantitativaContinua.init(dados, arrayIntervalo);
          //media = mediaQuantitativaContinua.init(dados, arrayIntervalo);
          //mediana = medianaQuantitativaContinua.init(dados, facs, arrayIntervalo);
        }
        const dadosTabela = criaDadosTabela.init(variavel, fi)
        let lastActive;
        criaTabela.init(dadosTabela, variavel);

        //criaGrafico.init(variavel, fi);
        document.querySelector('#menu-tabs').classList.remove('d-none');
        document.querySelector('#valores').classList.remove('d-none');
        lastActive = 'tabela';
        colocaValor(moda, media, mediana);
        const tabs = document.querySelectorAll('.nav-link');
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].addEventListener('click', function(event){
            event.preventDefault;
            if (this.text == 'Tabela') {
              this.classList.add('active');
              document.querySelector('#' + this.id).classList.add('avtive');
              document.querySelector('#' + lastActive).classList.remove('active');
              document.querySelector('.' + lastActive).classList.add('d-none');
              document.querySelector('.' + this.id).classList.remove('d-none');
              lastActive = this.id;
            }else if(this.text == 'Gráfico'){
              document.querySelector('#' + this.id).classList.add('avtive');
              document.querySelector('#' + lastActive).classList.remove('active');
              document.querySelector('.' + lastActive).classList.add('d-none');
              document.querySelector('.' + this.id).classList.remove('d-none')
              lastActive = this.id;
            }

          });
        }

      }
    });
  }
});

function colocaValor(moda, media, mediana) {
  let paragrafo;
  let text;
  const linhaValores = document.querySelectorAll('.title-valores');
  for (let i = 0; i < linhaValores.length; i++) {
    switch(linhaValores[i].id) {
      case 'moda':
        paragrafo = document.createElement('p');
        text = document.createTextNode(moda);
        paragrafo.appendChild(text);
        break;

      case 'media':
        paragrafo = document.createElement('p');
        text = document.createTextNode(media);
        paragrafo.appendChild(text);
        break;

      case 'mediana':
        paragrafo = document.createElement('p');
        text = document.createTextNode(mediana);
        paragrafo.appendChild(text);
        break;

      case 'desvioPadrao':
        paragrafo = document.createElement('p');
        text = document.createTextNode('a');
        paragrafo.appendChild(text);
        break;
    }
    linhaValores[i].appendChild(paragrafo);
  }
}
