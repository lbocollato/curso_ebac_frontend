"use strict";

var turma = [{
  alunos: 'Gustavo',
  nota: 8
}, {
  alunos: 'Julia',
  nota: 9
}, {
  alunos: 'Paula',
  nota: 5
}, {
  alunos: 'Wagner',
  nota: 10
}, {
  alunos: 'Lucio',
  nota: 3
}];
var filtraTurma = function filtraTurma(turma) {
  return turma.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var turmaAprovada = filtraTurma(turma);
console.log(turmaAprovada);