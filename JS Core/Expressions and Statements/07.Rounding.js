function solve([n, r]){
    n = String(n);
    r = Number(r);
    if( r > 15){
        r = 15;
    }
    let i = n.indexOf(".");
    if(r > (n.length - 1 - i)) {
        console.log(n);
    }
    else {
        n = Number(n);
        console.log(n.toFixed(r));
    }
}
solve(['10.5', '2']);