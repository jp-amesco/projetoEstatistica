function lerArquivoCorrelacao(arquivo) {
  const reader = new FileReader();
  reader.onload = (function(reader)
  {
    inputDados = reader.target.result;
    const linhas = inputDados.split(/\n/);
    const linha1 = linhas[0].split(/[;,\ ]/gm).map(function(item){
      return item.trim();
    });

    const linha2 = linhas[1].split(/[;,\ ]/gm).map(function(item){
      return item.trim();
    });

    const destino = document.getElementById('destino');
    for (var i = 0; i < linha1.length; i++) {
      if (i == 0) {
        document.getElementById('origem').children[0].value = linha1[i];
        document.getElementById('origem').children[1].value = linha2[i];
      } else {
        const clone = document.getElementById('origem').cloneNode(true);
        clone.children[0].value = linha1[i];
        clone.children[1].value = linha2[i];
        destino.appendChild(clone);
      }

    }
  });
  reader.readAsText(arquivo.files[0]);

}

exports.init = lerArquivoCorrelacao;
