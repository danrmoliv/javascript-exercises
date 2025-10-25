const fibonacci = function(numero) {
    numero = parseInt(numero)
    let fibSequence = 1
    let ant2Num = 1
    let ant1Num = 1

    if ((numero === 1) || (numero === 2)){
        return fibSequence;
    } else if (numero > 2){
        contador = 3
        fibSequence = ant2Num + ant1Num
        for(i = contador; i< numero; i++){
            ant2Num = ant1Num;
            ant1Num = fibSequence;
            fibSequence = ant1Num + ant2Num;
        }
        return fibSequence
    } else if (numero === 0){
        return 0
    } else {
        return 'OOPS'
    }

};

// Do not edit below this line
module.exports = fibonacci;
