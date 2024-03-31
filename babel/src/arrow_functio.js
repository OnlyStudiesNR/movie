const minhaFuncao = () => {
    return 'Diz olá'
}

console.log(minhaFuncao())


const car = () => ({
    modelo: 'Porsche Colpe',
    fabricante: 'Porsche'
})

console.log(car())

const carro = {
    velocidade: 40,

    aceler: function() {
        this.velocidade += 10
    },

    //O escopo das arrowFunction em obijetos e direrente do uso no browser 
    frear: function() {
        this.velocidade -= 10
    }
}
carro.aceler()
carro.frear()
console.log(carro.velocidade)