function arithmephile(input) {
    input = input.map(Number);
    let multi = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < input.length; i++){
        let currentMulti = 1;
        if(input[i] < 10 && input[i] >= 0 && (input.length - i) < input.length){
            let s = input[i];
            for(let j = i+1; j < i+s+1; j++){
                currentMulti *= input[j];
            }
            if(currentMulti > multi){
                multi = currentMulti;
            }
        }
    }
    console.log(multi);
}
arithmephile(['10', '20', '2', '30', '44', '123', '3', '56', '20', '24']);
arithmephile(['100', '200', '3', '10000', '10000', '10000', '2', '1', '1']);
