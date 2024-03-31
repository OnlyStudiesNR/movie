<script setup>
import { reactive } from 'vue';

    const name = "Adriano"
    const myObject = {
        name: 'Adriano',
        income: 500000
    }

    function dizOi(name) {
        return `${name} diz oi`;
    }

    const myTravel = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/fb/0c/50/lionsdive-beach-resort.jpg?w=900&h=-1&s=1';

    const button = false

    const estaAutorizado  = false;
    const naoAutorizado = true;

    const estado = reactive({
        contador: 0,
        email: '',
        saldo: 500000,
        juros: 10,
        names: ['Legumes', 'Verduras', 'CheiroVerde', 'Carne'],
        item: ''
    }) 

    function incrementar() {
        estado.contador++;
    }

    function decrementar() {
        estado.contador--;
    }

    function changeEmail(event) {
        estado.email = event.target.value
    }

    function mostrarSaldoFuturo() {
        const {saldo, juros} = estado;
        const jurosMes = saldo * (juros / 100);
        return saldo + jurosMes
    }

    function validarJuros() {
        const {juros} = estado;
        return juros < 1
    }

    function CadastrarItem() {
        estado.names.push(estado.item)
    }
</script>

<template>
    <h1>{{ dizOi('Adriano') }}</h1>
    <img :src="myTravel" alt="">
    <button :disabled="!button">Trip</button>

    <h2 v-if="estaAutorizado">Autorizado</h2>
    <h2 v-else="naoAutorizado">Não esta Autorizado</h2>

    <br />
    <hr />

    {{ estado.contador }}

    <button @click="incrementar" type="button">+</button>
    <button @click="decrementar" type="button">-</button>

    <br />
    <hr />

    {{ estado.email }}
    <input type="email" name="email" id="email" @keyup="changeEmail" />

    <br />
    <hr />

    Saldo: {{ estado.saldo }} <br />
    Juros: {{ estado.juros }}% <br />
    Rendimentos da transferência: {{ mostrarSaldoFuturo() }} <br />
    <input class="campo" :class="{ invalid: validarJuros() }" type="number" placeholder="Taxa de juros"  @input="event => estado.juros = event.target.value"/>  

    <br />
    <hr />

    <ul>
        <li v-for="name in estado.names">
            {{ name }}
        </li>
    </ul>

    <input type="text"  placeholder="Inserir mais item" @keyup="event => estado.item = event.target.value" />
    <button @click="CadastrarItem()" type="button">Cadastrar item</button>
</template>

<style scoped>
div {
    background-color: gold;
    color: #fff;
    font-size: 1.5em;
}

img {
    width: 400px;
}

.invalid {
    outline-color: #ff0000;
    border-color: rgb(255, 0, 0);
}

.campo {
    font-size: 2em;

}
</style>
