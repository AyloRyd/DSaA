function binCoef(n, k) {
    let bc = [1, ...Array(k).fill(0)];
    for (let i = 1; i <= n; i++) {
        for (let j = Math.min(i, k); j > 0; j--) {
            bc[j] = bc[j] + bc[j - 1];
        }
    } return bc[k];
}

console.log(binCoef(5, 2));