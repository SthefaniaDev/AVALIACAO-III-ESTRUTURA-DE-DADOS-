module.exports = class Set {
    constructor() {
        this.items = {};
        this.count = 0;
       }

       has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
        // Usa o método hasOwnProperty original do JavaScript para verificar, de forma segura, se o objeto items possui a chave informada.
    }
}
