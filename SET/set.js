module.exports = class Set {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
        // Usa o método hasOwnProperty original do JavaScript para verificar, de forma segura, se o objeto items possui a chave informada.
    }

    add(element) {
        if (!this.has(element)) { // Verifica, utilizando a função has(), se o elemento já existe no conjunto
            this.items[element] = element; //Caso não exista, o elemento é adicionado no conjunto
            this.count++; //Incrementa o contador de elementos
            return true; // indica que a adição foi realizada com sucesso
        }
        return false; // Indica que a adição não foi realizada, pois o elemento já existe
    }
}
