const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calcTotalItem } = require('index.js');

lab.experiment('quando não informa parâmetros', () => {
  lab.test('deve resultado vazio', (done) => {
      expect(contaVotos()).to.equal({resultado: []});
      expect(contaVotos([])).to.equal({resultado: []});
      done();
  });
});

// primeira versão da implementação que apenas mostra os nomes dos produtos
lab.experiment('testes temporários', () => {
  lab.test('retorna os produtos formatados', (done) => {
      const lista = ['Alface', 'Limão', 'Abacaxi', 'Morango', 'Rucula', 'Cenoura'];
      const retorno = { resultado:[
        {produto: 'Alface', valor: 1}, {produto: 'Abacaxi', valor: 1}, {produto: 'Rucula', valor: 1},
        {produto: 'Limão', valor: 1}, {produto: 'Morango', valor: 1}, {produto: 'Cenoura', valor: 1},
      ] };
      expect(calcTotalItem(lista)).to.equal(retorno);
      done();
  });

  /*lab.test.skip('retorna os votos formatados sem duplicidade', (done) => {
      const lista = ['João', 'Carlos', 'João', 'Pedro', 'Pedro', 'Pedro'];
      const retorno = { resultado:[
        {nome: 'João', votos: 1}, {nome: 'Carlos', votos: 1}, {nome: 'Pedro', votos: 1},
      ] };
      expect(calcTotalItem(lista)).to.equal(retorno);
      done();
  });
});

lab.experiment('quando informa votos', () => {
  lab.test.skip('deve retornar com os cálculos', (done) => {
      const lista = ['João', 'Carlos', 'João', 'Pedro', 'Pedro', 'Pedro'];
      const retorno = { resultado:[{nome: 'João', votos: 2}, {nome: 'Carlos', votos: 1}, {nome: 'Pedro', votos: 3}] };
      expect(contaVotos(lista)).to.equal(retorno);
      done();
  });
});