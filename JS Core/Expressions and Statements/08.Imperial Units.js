function solve(n) {
    n = Number(n);
    let i = n % 12;
    let k;
    if((n/12) >= 1){
        k = Math.floor(n / 12);
        console.log(k + "'-" + i + "\"");
    }
    else{
        k = 0;
        console.log(k + "'-" + i + "\"");
    }
}
solve(['12'])