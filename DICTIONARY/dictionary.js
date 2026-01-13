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

    /*Retorna a quantidade de pares no dicionário */
    size(){
        return Object.keys(this.table).length;
    }


       /*Retorna um array com todas as chaves do dicionário */
    keys(){
        return Object.keys(this.table);
    }

    
    /* Retorna um array com todos os valores do dicionário */
    values(){
        return Object.values(this.table);
    }


    /*Verifica se o dicionário está vazio */
    isEmpty(){
        return this.size() === 0;
    }


    /* Retorna um array de pares [chave, valor] */
    keyValues(){
        const pares = [];
        for (const key in this.table){
            if(this.hasKey(key)){
                pares.push([key, this.table[key]]);
            }
        }
        return pares;
    }

    
    /* Percorre o dicionário executando uma função callback */
    forEach(callbackFn){
        const pares = this.keyValues();
        for(let i = 0; i < pares.length; i++){
            const result = callbackFn(pares[i][0], pares[i][1]);
            if(result === false){
                break;
            }
        }
    }
}