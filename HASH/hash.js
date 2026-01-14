module.exports = class HashTable {
  constructor() {
    this.table = {}; // como um armario
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // 3. Pega o "valor" de cada letra do nome e soma.
    }
    return hash % 37; // 4. Divide por 37 e pega o resto. O endereço será sempre entre 0 e 36.
  }
};
