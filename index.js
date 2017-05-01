function calculaTotalItem (lista = [], opcoes = {}) {
  let r = { resultado: [] };
  lista.forEach(function(produto){
    // colocar no array de resultado
   if (!r.resultado.some(a => a.produto === produto ))
    r.resultado.push({produto: produto, valor: 1});
    else
     r.resultado. find(a => a.produto=== produto ).valor += 1;
  });

  return r;
}

module.exports = { contaVotos };