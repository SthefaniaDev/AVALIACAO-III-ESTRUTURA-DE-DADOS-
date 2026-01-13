module.exports = class Dicionary{
    constructor(){
        this.table = {};
    }

    /*Verifica se uma chave existe no dicionário */ 
    hasKey(key){
        return Object.prototype.hasOwnProperty.call(this.table, key);
    }

    /*Adiciona ou atualiza um par (chave -> valor) no dicionário */
    set(key, value){
        if(key != null && value != null){
            this.table[key] = value;
            return true;
        }
        return false;
    }
}