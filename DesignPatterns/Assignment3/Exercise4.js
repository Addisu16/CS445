const fibonacci = function(n, memo = new Map()) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    if (n <= 1) {
        return n;
    }
    const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo.set(n, result);
    return result;
};

console.time('memoriziation method start time');
console.log(fibonacci(100));
console.timeEnd('memoriziation method End');

