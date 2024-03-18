"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; ++i) {
  console.log("Eu tenho prefil na rede social: ".concat(redesSociais[i]));
}

//forech so intera não retornna nada nao tera um array como retorno
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho prefil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', ' Julia', ' Paula', ' Wagner'];
// map manipular e ter um novo array como retorno
var alunos2 = alunos.map(function (itemAtual) {
  // itemAtual = {
  // 	nome: itemAtual,
  // 	curso: 'Frontend'
  // }
  // return itemAtual;
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  // numeroAtual = numeroAtual * 2;
  // return numeroAtual;
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
//find encontrar um item dentro de um array
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; //true or false
});
console.log(paula);
//findIndex encontrar um index dentro de um array
var indicepaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; //true or false
});
console.log(indicepaula);

//every retorna todos os item dentro do array que satisfazem a condição

alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend);

//some - pouco mais tolerante que o every, basta um item satisfazer a condição
var existeAlgumAlunoBackend = alunos2.some(function (item) {
  //funciona como um if colocando as 2 condições
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoBackend);

//filter
// filtra itens
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);

//exemplo arrow function com o filtrar

var filtraAlunosDeBackend2 = function filtraAlunosDeBackend2(aluno) {
  return aluno.curso === 'Backend';
};
console.log(filtraAlunosDeBackend2);
// const alunosBackend = alunos2.filter(function (item) {
// 	return item.curso === 'Backend'
// })

console.log(alunosDeBackend);

//reduce - agregação de valores, tbm pode usar strings

var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome);
  return acumulador;
}, '');
console.log(nomesDosAlunos);