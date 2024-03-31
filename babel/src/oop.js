// function Car(modelo,marca) {
//     this.modelo = modelo;
//     this.marca = marca;
// }

// const firstCar = new Car('Porsche Cayenne Coupe', 'Porsche')

// console.log(firstCar)

class Car {
    // deixa um capo privado
    #frear = 410;

    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca
    }

    acelerar(kms) {
        console.log(`A ${this.modelo} esta a ${kms}km/h`)
    }

    estafrear() {
        this.#frear -= 50;
    }

    frearCar() {
        console.log(this.#frear)
    }
}

// Primerio class herdeira depois class pai

class MyCar extends Car {
    constructor() {
        super('Porsche Cayenne Coupe', 'Porsche')
    }

    acelerar() {
        console.log(`A ${this.modelo} esta a ${410}km/h`)
    }
}

const car = new Car('Porsche Cayenne Coupe', 'Porsche');
const myCar = new MyCar('Porsche Cayenne Coupe', 'Porsche', 'Adriano')
myCar.acelerar()
myCar.estafrear()
myCar.frearCar()

console.log(car);
car.acelerar(390)

console.log(myCar)

console.log(myCar instanceof MyCar)
console.log(myCar instanceof Car)