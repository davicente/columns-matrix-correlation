const expect = require('chai').expect;
const assert = require('chai').assert;

const correlation = require('../index.js');

const matrix = [ 
  [1, 4, 118, 70, 0, 0, 44.5],
  [2, 2, 122, 76, 27, 200, 35.9],
  [3, 6, 125, 78, 31, 0, 27.6],
  [4, 1, 168, 88, 29, 0, 35.0],
  [5, 2, 129, 0, 0, 0, 38.5]
];



describe('Matrix columns linear correlation', () => {
  it('Success', () => {
    const correlationResults = correlation.calculateCorrelation(matrix);
    // num of rows in result has to be same than number of columns of original matrix
    assert.strictEqual(correlationResults.length, matrix[0].length);
    // num of columns in result has to be same than number of columns of original matrix
    assert.strictEqual(correlationResults[0].length, matrix[0].length);
    
    for(let column of correlationResults) {
      for(let value of column) {
        expect(value).to.be.within(-1.000001, 1.0000001); 
      }
    }
  });
});
