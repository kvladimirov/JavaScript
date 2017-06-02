function quadraticEquation([a, b, c]) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let d =(b*b) - (4*a*c);
    if(d > 0){
        let x1 =(-b - Math.sqrt(d))/(2*a);
        let x2 =(-b + Math.sqrt(d))/(2*a);
        console.log(x1);
        console.log(x2);

    }
    else if(d == 0){
        let x1 =-b/(2*a);
        console.log(x1);
    }
    else{
        console.log("No");
    }
}
quadraticEquation(['6', '11', '-35']);