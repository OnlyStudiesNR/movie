const alunos = [
    {
        nome: 'Ana',
        nota: 10
    },
    {
        nome: 'Pedro',
        nota: 6
    },
    {
        nome: 'Carlos',
        nota: 5.7
    },
    {
        nome: 'Jen',
        nota: 8
    },
    {
        nome: 'Mike',
        nota: 4.8
    },
    {
        nome: 'July',
        nota: 5.4
    },
    {
        nome: 'Carol',
        nota: 5.8
    },
    {
        nome: 'Mel',
        nota: 10
    },
    {
        nome: 'Jon',
        nota: 9
    },cd 
    {
        nome: 'Alan',
        nota: 6
    }
]

console.log(alunos)


function aprovarAluno(nota) {
    return nota >= 6
}

const alunosAprovados = alunos.filter(item => aprovarAluno(item.nota))
console.log(alunosAprovados)