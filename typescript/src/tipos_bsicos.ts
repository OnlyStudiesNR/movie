let estaChovendo: boolean = false

let idade: number = 27
let height: number = 1.75

const nacionalidade: string = 'brasileiro'

// array 
const colegas: string[] = ['João', 'Luiz']
const tecnologias: Array<string> = ['Html', 'Css', 'Javascript', 'Typescript', 'Python', 'Django', 'SQL']
const notas: ReadonlyArray<number> = [10, 10, 10, 10]


// tupla 
// const lista: [string, boolean, number]
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Bilhão', true, 27]

// uniãotype
let age: number | string = 25
age = '25 anos Bater o primeiro Milhão'


// tipo que aceita qualquer tipo de dado  ANY

let coisa: any = 'Oi'
coisa = 1
coisa = true
coisa = [13, 'ser', 'fazer', 'ter', true]