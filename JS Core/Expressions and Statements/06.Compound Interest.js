function solve([p, i, n, t]) {
    p = Number(p);
    i = Number(i) / 100;
    n = 12 / Number(n);
    t = Number(t);
    let f = p * (Math.pow((1 + (i/n)), (n * t)));
    console.log(f);
}
solve(['100000', '5', '12', '25']);
