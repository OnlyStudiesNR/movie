let meuMap = new Map();
meuMap.set("name", "Adriano");
meuMap.set('Amar A Deus', 'Saúde', 'Sabedoria', 'Amor', 'Familia', 'Prosperidade', 'Paz');
console.log(meuMap);

// recupera o valor de determinada chave
console.log(meuMap.get('name'));

// Mostra o tamanho do Map
console.log(meuMap.size);

// verifica se exite determinda elemento no map retorn um boolean
console.log(meuMap.has("name"));

// limpa o map
// meuMap.clear()
console.log(meuMap.size);

// intera os item de uma map
for (chave of meuMap.keys()) {
  console.log(chave);
}
for (chave of meuMap.values()) {
  console.log(chave);
}
for ([chave, valor] of meuMap.entries()) {
  console.log(`${chave}: ${valor}`);
}

// deleta o map
meuMap.delete('name');
console.log(meuMap);
const cpf = new Set();
cpf.add("22872193073");
cpf.add("60258754052");
cpf.add("68605253045");
console.log(cpf);
console.log(cpf.keys());
console.log(cpf.values());
cpf.forEach(value => console.log(value));

//convete um array em um set e remove duplicata
const num = [39000, 39000, 1000000, 7000000, 5000000, 200000, 200000];
const arrayComSet = new Set([...num]);
console.log(arrayComSet);
const arraySemSetDuplicado = [...arrayComSet];
console.log(arraySemSetDuplicado);