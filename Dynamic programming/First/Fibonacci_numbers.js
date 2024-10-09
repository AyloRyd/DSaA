function fibonacci(n) {
    let data = [0, 1, ...Array(n - 2)];
    for (let i = 2; i <= n; i++) {
        data[i] = data[i - 1] + data[i - 2];
    } return data[n];
}

console.log(fibonacci(1000));