function  functionMuitoPesada() {
    let execution= 0;
    for (let i = 0; i < 99587987; i++) {
        execution++;
    }

    return execution;
}

// transforma um função async
const functionStrongPromise = new Promise((resolve, reject) => {
    try {
        let execution= 0;
        for (let i = 0; i < 99587987; i++) {
            execution++;
        }

        resolve (executio);
    } catch(e) {
        reject("Deu erro na interção do números")
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000);
    })
}

// console.log('Start');
// console.log(functionMuitoPesada())

// functionStrongPromise.then(result => console.log(result)).catch(error => console.log(error))

// console.log("End")


async function firstExecution() {
    console.log('Start');

    // await functionStrongPromise.then(result => console.log(result)).catch(error => console.log(error))

    promiseComParametros("AdrianoBilionario", 98756172).then(result => {
        console.log(result)
    })

    try {
        const result = await functionStrongPromise;
        console.log(result)
    } catch(e) {
        console.log(e)
    }

    console.log("End")
}

firstExecution()