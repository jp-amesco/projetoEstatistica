const validaDados = require('./dados/entradaDados.js');
const frequencia = require('./frequencia.js');
const intervalo = require('./intervaloClasse.js');
const calculaFacContinua = require('./calculaFacContinua.js');
const identificaVariavel = require('./dados/identificaVariavel.js');
const modaQualitativa = require('./moda/modaQualitativa.js');
const modaQuantitativaDiscreta = require('./moda/modaQuantitativaDiscreta.js');
const mediaQuantitativaDiscreta = require('./media/mediaQuantitativaDiscreta.js');
const medianaQuantitativaDiscreta = require('./mediana/medianaQuantitativaDiscreta.js');
const medianaQuantitativaContinua = require('./mediana/medianaQuantitativaContinua.js');
const quartilDiscreta = require('./medidasSeparatrizes/quartil.js');
const quintilDiscreta = require('./medidasSeparatrizes/quintil.js');
const decilDiscreta = require('./medidasSeparatrizes/decil.js');
const percentilDiscreta = require('./medidasSeparatrizes/percentil.js');
//const mensagemErro = require('./erros/mensagemErroValidacaoDados.js');

//adiciona evento de click ao botão para enviar os dados
document.querySelector('.btn').addEventListener('click', function(){
  //recebe os dados enviados
  const inputDados = document.querySelector('#dados').value;
  const parteQuartil = document.querySelector('#parte_quartil').value
  const parteQuintil = document.querySelector('#parte_quintil').value
  const parteDecil = document.querySelector('#parte_decil').value
  const partePercentil = document.querySelector('#parte_percentil').value

  //chama a função para verificar se os dados são validos,
  //se forem validos e numeros, converte para int
  const dados = validaDados.init(inputDados);
  let variavel;
  //verifica se a resposta foi algum erro
  if (dados == 1 || dados == 2) {
    //chama a função que cria o erro na tela
    //mensagemErro.init(dados);
  }else{
    //chama a função para identificar qual é a variavel
    variavel = identificaVariavel.init(dados);
    //organiza o vetor
    dados.sort();
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
      //mediana = medianaQualitativa.init(fi);
    }else if(variavel == 'discreta') {
      moda = modaQuantitativaDiscreta.init(fi);
      media = mediaQuantitativaDiscreta.init(dados);
      mediana = medianaQuantitativaDiscreta.init(dados);
      quartil = quartilDiscreta.init(dados, parteQuartil);
      quintil = quintilDiscreta.init(dados, parteQuintil);
      decil = decilDiscreta.init(dados, parteDecil);
      percentil = percentilDiscreta.init(dados, partePercentil);
    }else if(variavel == 'continua'){
      const arrayIntervalo = intervalo.init(dados);
      const facs = calculaFacContinua.init(dados, arrayIntervalo);
      //moda = modaQuantitativaContinua.init(fi);
      //media = mediaQuantitativaContinua.init(fi);
      mediana = medianaQuantitativaContinua.init(dados, facs, arrayIntervalo);
    }
    console.log('moda: ', moda);
    console.log('media: ', media);
    console.log('mediana: ', mediana);
    console.log('quartil: ', quartil);
    console.log('quintil: ', quintil);
    console.log('decil: ', decil);
    console.log('percentil: ', percentil);
  }
});
