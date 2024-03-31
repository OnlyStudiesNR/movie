// cria typagem custumisada
type aluno = {
    name: string;
    course?: string[]; // deixa a propriedade como sendo opsional
    age: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    name: 'Livia',
    course: ['Engenhari De Software'],
    age: 25
})

const newAluno: aluno = {
    name: 'Nike',
    age: 25
}

function showClassmate(aluno: aluno) {
    console.log(aluno.age)
}