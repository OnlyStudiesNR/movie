const redeSocial = ['Facebook', 'Instagram', 'Twitter']

for (let i = 0; i < redeSocial.length; i++) {
    console.log(`Eu tenho prerfil na rede social: ${redeSocial[i]}`)
}

redeSocial.forEach((item, id) => console.log(`#${id} Eu tenho perfil na rede social: ${item}`))

const alunos = ['Gen', 'Julin', 'Ana', 'Sofi']

const alunos2 = alunos.map(item => {
    return {
        name: item,
        course: 'Full Stack'
    }
})

console.log(alunos2)

const sofi = alunos2.find(item => item.name == 'Sofi')

console.log(sofi)


const ana = alunos2.findIndex(item => item.name == 'Ana')

console.log(ana)

alunos2.push({
    name: 'Bia',
    course: 'Front-end'
})
const todosAlunoFazFullStack = alunos2.every(item => item.course == 'Full Stack')

console.log(todosAlunoFazFullStack)


const alguemFazFrontend = alunos2.some(item => item.course ==='Front-end')

console.log(alguemFazFrontend)


function filterAlunoFront(aluno) {
    return aluno.course === 'Front-end'
}

const front = alunos2.filter(filterAlunoFront)

console.log(front)


const numbers = [10000,100000, 1000000]

const soma = numbers.reduce((acumulador, itemAtual) => acumulador += itemAtual, 0)

console.log(soma)