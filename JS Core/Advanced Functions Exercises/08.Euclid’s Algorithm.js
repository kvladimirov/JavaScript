function divisor(num1, num2){

    if(!num2){
        return num1
    }

    return divisor(num2, num1 % num2);
}

console.log(divisor(252, 105));
