function getMinReliableDistance(s, t, k, graph) {
    const d = Array.from({ length: graph.length }, () => Array(k + 1).fill(Infinity));
    d[s][0] = 0;

    for (let m = 0; m < k; m++) {
        for (let v1 = 0; v1 < graph.length; v1++) {
            if (d[v1][m] < Infinity) {
                for (const [v2, w] of graph[v1]) {
                    d[v2][m + 1] = Math.min(d[v2][m + 1], d[v1][m] + w);
                }
            }
        }
    }

    return Math.min(...d[t]);
}

const graph = [
    [[4, 2]],
    [[0, 1], [2, 1], [4, 4], [5, 3]],
    [[5, 1]],
    [],
    [[3, 3], [7, 1]],
    [[3, 5], [6, 2]],
    [[3, 2]],
    [[3, 1]]
];

console.log(getMinReliableDistance(1, 3, 3, graph));
