function multiplyMatrices(a, b) {
    const n = a.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let p = 0; p < n; p++) {
                result[i][j] += a[i][p] * b[p][j];
            }
        }
    }
    return result;
}

function countFixedLengthPaths(matrix, power) {
    const n = matrix.length;
    let result = Array.from({ length: n }, (_, i) => Array(n).fill(0).map((_, j) => i === j ? 1 : 0));
    let base = matrix;

    while (power > 0) {
        if (power % 2 === 1) {
            result = multiplyMatrices(result, base);
        }
        base = multiplyMatrices(base, base);
        power = Math.floor(power / 2);
    }
    return result;
}

const graph = [
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [1, 0, 0, 1],
    [0, 0, 0, 0]
];
const k = 3;

countFixedLengthPaths(graph, k).forEach(row => console.log(row));