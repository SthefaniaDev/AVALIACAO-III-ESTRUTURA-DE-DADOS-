const HashTable = require("./hash");

const hash = new HashTable();

console.log("Adicionando pares chave-valor na HashTable...");
hash.put("Brasil", "Brasília");
hash.put("Argentina", "Buenos Aires");
hash.put("Chile", "Santiago");

console.log("\nBuscando valores pelas chaves...");
console.log("Valor da chave 'Brasil':");
console.log(hash.get("Brasil"));

console.log("Valor da chave 'Chile':");
console.log(hash.get("Chile"));

console.log("\nAtualizando o valor da chave 'Chile'...");
hash.put("Chile", "Nova Santiago");
console.log("Valor atualizado da chave 'Chile':");
console.log(hash.get("Chile"));

console.log("\nRemovendo a chave 'Argentina'...");
console.log(hash.remove("Argentina"));
console.log("Tentando buscar 'Argentina' após remoção:");
console.log(hash.get("Argentina"));

console.log("\nTentando buscar uma chave que não existe ('Uruguai'):");
console.log(hash.get("Uruguai"));

console.log("\nImprimindo toda a tabela interna da HashTable (para debug):");
console.log(hash.table);

console.log("\nVerificando colisões (se houver) na posição de 'Brasil'...");
const posBrasil = hash.hash("Brasil");
console.log("Bucket da posição:", posBrasil, hash.table[posBrasil]);
