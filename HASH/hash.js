module.exports = class HashTable {
  constructor() {
    this.table = {}; // como um armario
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); //  Pega o "valor" de cada letra do nome e soma.
    }
    return hash % 37; //  Divide por 37 e pega o resto. O endereço será sempre entre 0 e 36.
  }
  put(key, value) {
    const position = this.hash(key); // Pergunta pra máquina: "Em qual gaveta guardo isso?"

    if (!this.table[position]) {
      this.table[position] = []; //  Se a gaveta estiver vazia, coloca um saquinho lá dentro.
    }
    // 7. Se já tiver algo no saquinho, ele olha item por item.
    for (let i = 0; i < this.table[position].length; i++) {
      if (this.table[position][i][0] === key) {
        // 8. Se achar o mesmo nome...
        this.table[position][i][1] = value; // 9. Só troca o valor antigo pelo novo.
        return;
      }
    }
    // 10. Se não achou o nome no saquinho, joga o novo par [nome, valor] lá dentro.
    this.table[position].push([key, value]);
  }
};
