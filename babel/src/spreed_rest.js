// Rest (resto)
function soma() {
    // Não permite interer com metodos de arrey
    console.log(arguments)
    soma = 0

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma(10000000, 100000000, 10000000000, 8000012312432))

function sumComRest(...num) {
    const sumer = num.reduce((total, numAtual) => total += numAtual)

    return sumer
}

console.log(sumComRest(10000000, 100000000, 10000000000, 8000012312432))



// Spreed (espalhar)

const num = [50000, 100000, 500000]

console.log(...num)

const paisVisitados = ['Carib', 'Argentina', 'Germany', 'Italy', 'Britannia', 'Canada', 'The USE', 'Roma', 'Espanha', 'França', 'Suíça', 'Nepal', 'Polonita', 'Tailandia']

const myCars = ['Porsche Coupe', 'Ram', 'LaFerrara', 'Porsche Cayenne']

const joinAll = paisVisitados.concat(myCars)
const  joinTravel = [...myCars, ...paisVisitados]

console.log(joinAll)
console.log(joinTravel)

const beachHome = {
    suit: 5,
    metrosSquare: 2500,
    vGarage: 12
}

const home = {
    ...beachHome,
    suit: 10,
    vGarage: 20
}

console.log(beachHome)
console.log(home)


// desestruturação 

const mySuit = home.suit
const {suit: suitHomeBeach} = beachHome;
const {suit: suitHome } = home;

console.log(suitHome, suitHomeBeach);

const [item1, item2, item3,item5, ...items] = joinAll;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(item5)
console.log(items)