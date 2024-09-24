function binCoef(n, k) {
    let bc = Array.from({ length: n + 1 }, (_, i) => Array(i + 1).fill(1));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            bc[i][j] = bc[i - 1][j - 1] + bc[i - 1][j];
        }
    }

    return bc[n][k];
}

function binCoefShort(n, k) {
    let bc = [1, ...Array(k).fill(0)];

    for (let i = 1; i <= n; i++) {
        for (let j = Math.min(i, k); j > 0; j--) {
            bc[j] = bc[j] + bc[j - 1];
        }
    }

    return bc[k];
}

console.log(binCoef(5, 2));
console.log(binCoefShort(5, 2));