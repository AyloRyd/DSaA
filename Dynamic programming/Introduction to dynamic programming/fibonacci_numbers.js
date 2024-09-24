const memo = {
    0: 0,
    1: 1
}

function fibMemo(n) {
    if (!(n in memo)) {
        memo[n] = fibMemo(n-1) + fibMemo(n-2);
    } return memo[n];
}

function fibTab(n) {
    let data = [0, 1, ...Array(n - 2)];
    for (let i = 2; i <= n; i++) {
        data[i] = data[i - 1] + data[i - 2];
    } return data[n];
}

console.log(fibMemo(1000));
console.log(fibTab(1000));