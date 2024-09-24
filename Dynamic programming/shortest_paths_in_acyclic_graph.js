const graph = [
    [[4, 2]],                          // 0
    [[0, 1], [2, 1], [4, 4], [5, 3]],  // 1
    [[5, 1]],                          // 2
    [],                                // 3
    [[3, 3], [7, 1]],                  // 4
    [[3, 5], [6, 2]],                  // 5
    [[3, 2]],                          // 6
    [[3, 1]],                          // 7
];
const n = graph.length;
const visited = new Array(n).fill(false);

function dfs(v, ts) {
    for (const [u, w] of graph[v]) {
        if (!visited[u]) {
            dfs(u, ts);
        }
    } ts.push(v);
}

function topologicalSort() {
    const ts = [];
    for (let v = 0; v < n; v++) {
        if (!visited[v]) {
            dfs(v, ts);
        }
    } return ts.reverse();
}

function minDistance(u, v) {
    const d = new Array(n).fill(Infinity);
    d[u] = 0;

    const ts = topologicalSort();
    for (const v1 of ts) {
        for (const [v2, w] of graph[v1]) {
            d[v2] = Math.min(d[v2], d[v1] + w);
        }
    } return d[v];
}

console.log(minDistance(1, 3));