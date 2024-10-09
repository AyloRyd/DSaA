function warshall(graph) {
    const n = graph.length;
    const res = graph.map(row => [...row]);

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                res[i][j] = res[i][j] || (res[i][k] && res[k][j]);
            }
        }
    }
    return res;
}

const graph = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [1, 0, 1, 0]
];

warshall(graph).forEach(row => console.log(row));