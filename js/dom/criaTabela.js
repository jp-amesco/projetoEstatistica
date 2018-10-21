function criaTabela(dadosTabela) {
  let col;

  const tabela = document.querySelector('.table');
  const existeTabela = document.querySelector('#tbody');
  if(existeTabela){
    tabela.removeChild(existeTabela);
  }
  const tbody = document.createElement('tbody');
  tbody.id = 'tbody';
  for (let j = 0; j < dadosTabela[0].length; j++) {
    const linha = document.createElement('tr');
    for (let i = 0; i < dadosTabela.length; i++) {
      if (j == 0) {
        col = document.createElement('th');
        const textHeader = document.createTextNode(dadosTabela[i][j]);
        col.appendChild(textHeader);
      }else{
        col = document.createElement('td');
        const variavelPesquisada = document.createTextNode(dadosTabela[i][j]);
        col.appendChild(variavelPesquisada);
      }
      linha.appendChild(col);
    }
    tbody.appendChild(linha);
  }
  tabela.appendChild(tbody);
}


exports.init = criaTabela;
