const Set = require('./set');

const set = new Set();

console.log("Adicionando o valor 10...")
set.add(10);
console.log("Adicionando o valor 20...")
set.add(20);
console.log("Adicionando novamente o valor 10...\n")
set.add(10);

console.log("Imprimindo todos os valores do set...")
console.log(set.values());
console.log("Imprimindo tamanho atual do set...")
console.log(set.size());
console.log("Verificando se o valor 20 pertence ao set...")
console.log(set.has(20));
console.log("Deletando o valor 20 do set...")
console.log(set.delete(20));
console.log("Imprimindo todos os valores do set após remoção...")
console.log(set.values());
console.log("Verificando tamanho do set após remoção...")
console.log(set.size());

console.log("\nLimpando o set...")
set.clear();
console.log("Imprimindo todos os valores do set após clear...")
console.log(set.values());
console.log("Verificando tamanho do set após clear...")
console.log(set.size());