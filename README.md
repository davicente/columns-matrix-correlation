# Columns matrix correlation

Node.js library that calculates linear correlation among all the columns of a matrix. 

```
npm install columns-matrix-correlation --save
```


## Usage

``` js
const correlation = require('columns-matrix-correlation');

const matrix = [ 
    [1, 4, 118, 70, 0, 0, 44.5],
    [2, 2, 122, 76, 27, 200, 35.9],
    [3, 6, 125, 78, 31, 0, 27.6],
    [4, 1, 168, 88, 29, 0, 35.0],
    [5, 2, 129, 0, 0, 0, 38.5]
    ...
];

const correlationResult = correlation.calculateCorrelation(matrix);
```

## Result

```
[ 
  [ 1, -0.395284708, 0.529507663, -0.570429014, 0.019830187, -0.353553391, -0.333499268 ]
  [ -0.395284708, 1, -0.578670308, 0.183204016, 0.062708559, -0.279508497, -0.349495263 ]
  [ 0.529507663, -0.578670308, 1, 0.262763828, 0.403178188, -0.286319998, -0.207954744  ]
  [ -0.570429014, 0.183204016, 0.262763828, 1, 0.703977468, 0.214281931, -0.28733813    ]
  [ 0.019830187, 0.062708559, 0.403178188, 0.703977468, 1, 0.336529441, -0.815646871    ]
  [ -0.353553391, -0.279508497, -0.286319998, 0.214281931, 0.336529441, 1, -0.036561177 ]
  [ -0.333499268, -0.349495263, -0.207954744, -0.28733813, -0.815646871, -0.036561177, 1 ] 
]
```




It returns a new matrix with same number of rows and columns, where each value is the correlation between the two columns given by the indexes of the position in the matrix. 

The value in each position means the correlation between the two columns given by the indexes of its position. For example, the value of the position (2, 4) is the correlation between the columns 2 and 4 of the matrix. The meaning of the valueis goes from -1 to 1, where -1 is complete negative linear correlation and 1 is complete positive linear correlation, and 0 no linear correlation.

That makes all the positions in the diagonal from 0,0 to n,n has value 1, becuase is the correlation between each column and itself.
