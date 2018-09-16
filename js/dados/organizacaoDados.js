function organizacaoDados(vet) {
  if (vet.length <= 1) {
    return vet;
  }

  const pivo = vet[0];

  const left = [];
  const right = [];

  for (let i = 1; i < vet.length; i++) {
    vet[i] < pivo ? left.push(vet[i]) : right.push(vet[i]);
  }

  return organizacaoDados(left).concat(pivo, organizacaoDados(right));
};

exports.init = organizacaoDados;
