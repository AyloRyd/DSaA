const graphReversed = [
    [[4, 2]],                          // 0
    [[0, 1], [2, 1], [4, 4], [5, 3]],  // 1
    [[5, 1]],                          // 2
    [],                                // 3
    [[3, 3], [7, 1]],                  // 4
    [[3, 5], [6, 2]],                  // 5
    [[3, 2]],                          // 6
    [[3, 1]],                          // 7
];
const n = graphReversed.length;

function countPaths(s, t) {
    const d = new Array(n).fill(null);
    d[s] = 1;
    return countRec(d, t);
}

function countRec(d, v) {
    if (d[v] !== null) return d[v];

    let result = 0;
    for (const [u, w] of graphReversed[v]) {
        result += countRec(d, u);
    } d[v] = result;
    return result;
}

console.log(countPaths(3, 1));
