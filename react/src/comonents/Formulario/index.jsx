/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";

const Formulario = () => {
    const [firstContract, setContract1] = useState(0)
    const [secondContract, setContract2] = useState(0)
    const [thirdContract, setContract3] = useState(0)
    const [name, setName] = useState('')

    // Component life line
    //mount
    //update
    //unmount

    // can use with props, props.value
    useEffect( () => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [])

    useEffect( () => {
        console.log("O estado mudou")
    }, [name])
    useEffect( () => {
        console.log("O estado mudou" + firstContract)
    }, [firstContract, secondContract, thirdContract])

    const changeName = event => {
        setName(event.target.value)

        setName(event => {
            return event.target.value
        })
    }

    const valorContracts = () => {
        const totalMoney = firstContract + secondContract + thirdContract

        return totalMoney >= 59999 ? ` VERY GOOD ${totalMoney}`: ` OK! ${totalMoney}`
    }

    return (
        <form>
            <ul>
                {[50000, 200000, 250000].map(item => (
                    <>
                        <li key={item}>{item}</li>
                    </>
                ))}
            </ul>

            <input type="text" name="name" id="name" placeholder="Seu nome" onChange={changeName} />
            <input type="number" name="number" id="number" placeholder="Primerio contrato" onChange={event => setContract1(parseInt(event.target.value))} />
            <input type="number" name="number" id="number" placeholder="Segundo contrato" onChange={event => setContract2(parseInt(event.target.value))} />
            <input type="number" name="number" id="number" placeholder="Terceiro contrato" onChange={event => setContract3(parseInt(event.target.value))} />
            <p>VALOR DOS CONTRATOS  RECEBIDO POR {name}</p>
            
            {valorContracts()}
        </form>
    )
}

export default Formulario;