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

    /*Remove um par (chave -> valor) do dicionário */
    remove(key){
        if(this.hasKey(key)){
            delete this.table[key];
            return true;
        }
        return false;
    }

    /*Obtém o valor associado a uma chave */
    get(key){
        return this.hasKey(key) ? this.table[key] : undefined;
    }

    /*Remove todos os elementos do dicionário */
    clear(){
        this.table = {};
    }
}