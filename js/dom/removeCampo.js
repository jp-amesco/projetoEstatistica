function removeCampo() {
  const node1 = document.getElementById('destino');
  node1.removeChild(node1.childNodes[node1.childNodes.length - 1]);
}

exports.init = removeCampo;
