"use strict";
const alunos = [
    {
        name: 'Ana',
        course: ['Front-end', 'UX/UI'],
        age: 25
    },
    {
        name: 'Jen',
        course: ['Front-end', 'Go'],
        age: 24
    }
];
alunos.push({
    name: 'Livia',
    course: ['Engenhari De Software'],
    age: 25
});
const newAluno = {
    name: 'Nike',
    age: 25
};
function showClassmate(aluno) {
    console.log(aluno.age);
}
