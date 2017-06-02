function fibonacci(n){
    let fib = ( function () {
        let f0 = 0;
        let f1 = 1;

        return function () {
            let temp = f0;
            f0 = f1;
            f1 = f0 + temp;
            return f0;
        }
    })();
    let fibNumbers = [];
    for (let i = 1; i <= n; i++){
        fibNumbers.push(fib());
    }
    return fibNumbers;
}

console.log(fibonacci(15));