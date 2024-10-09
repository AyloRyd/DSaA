function floydWarshall(matrix) {
    const n = matrix.length;
    const res = matrix.map(row => [...row]);

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (res[i][k] !== Infinity && res[k][j] !== Infinity) {
                    res[i][j] = Math.min(res[i][j], res[i][k] + res[k][j]);
                }
            }
        }
    }
    return res;
}

const INF = Infinity;
const matrix = [
    [0,   INF, 3,   INF],
    [2,   0,   INF, 1  ],
    [INF, 7,   0,   1  ],
    [6,   INF, INF, 0  ]
];

floydWarshall(matrix).forEach(row => console.log(row));
