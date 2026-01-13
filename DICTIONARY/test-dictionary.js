const Dictionary = require('./dictionary');

const dict = new Dictionary();

console.log("Adicionando pares chave-valor no dicionário...");
dict.set('nome', 'Felipe');
dict.set('idade', 18);
dict.set('curso', 'Informática');

console.log("\nBuscando valores pelas chaves...");
console.log("Valor da chave 'nome':");
console.log(dict.get('nome'));

console.log("Valor da chave 'idade':");
console.log(dict.get('idade'));

console.log("\nVerificando se a chave 'curso' existe...");
console.log(dict.hasKey('curso'));

console.log("\nTamanho atual do dicionário...");
console.log(dict.size());

console.log("\nVerificando se o dicionário está vazio...");
console.log(dict.isEmpty());

console.log("\nRemovendo a chave 'curso'...");
console.log(dict.remove('curso'));

console.log("Tamanho após remoção...");
console.log(dict.size());

console.log("\nLimpando o dicionário...");
dict.clear();

console.log("Verificando se o dicionário está vazio após clear...");
console.log(dict.isEmpty());

console.log("Tamanho final do dicionário...");
console.log(dict.size());