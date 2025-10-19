const sumAll = function(a, b) {
    if ((Number.isInteger(a)) && (Number.isInteger(b)) && (a >= 0) && (b >= 0)) {
        let inicio = a;
        let fim = b;

        if (a > b) {
            inicio = b;
            fim = a;
        }

        totalSum = 0;

        for (i = inicio; i <= fim; i++) {
            totalSum+=i;
        }

    } else {
        return 'ERROR'
    }

    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
