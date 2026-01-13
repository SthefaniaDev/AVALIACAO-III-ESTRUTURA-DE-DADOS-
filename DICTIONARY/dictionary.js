module.exports = class Dicionary{
    constructor(){
        this.table = {};
    }

    /*Verifica se uma chave existe no dicionário */ 
    hasKey(key){
        return Object.prototype.hasOwnProperty.call(this.table, key);
    }
}