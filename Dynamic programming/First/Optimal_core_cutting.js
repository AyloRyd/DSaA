const prices = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30]

function cutRec(n) {
    if (n === 0) return 0;

    let result = 0;
    for (let i = 1; i <= n; i++) {
        result = Math.max(result, prices[i - 1] + cutRec(n - i));
    } return result;
}

const results = new Array(11);

function cut(n) {
    results[0] = 0;

    for (let j = 1; j <= n; j++) {
        let result = 0;
        for (let i = 1; i <= j; i++) {
            result = Math.max(result, prices[i - 1] + results[j - i]);
        }
        results[j] = result;
    }

    return results[n];
}

console.log(cut(8));
console.log(cutRec(8));