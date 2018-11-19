const correlation = require('node-correlation');

exports.calculateCorrelation = matrix => {
    const correlations = [];
    for(let numColumn = 0; numColumn < matrix[0].length; numColumn ++) {
        const rowCorrelations = [];
        for(let numColumn2 = 0; numColumn2 < matrix[0].length; numColumn2 ++) {
            const array1 = [];
            const array2 = [];
            for(let index in matrix) {
                array1.push(matrix[index][numColumn]);
                array2.push(matrix[index][numColumn2]);
            }
            const correlationValue = correlation.calc(array1, array2);
            rowCorrelations.push(correlationValue);
        }
        correlations.push(rowCorrelations);
    }

    return correlations;
};
