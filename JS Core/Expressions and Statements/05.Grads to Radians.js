function solve(grads) {
    grads = Number(grads);
    let degrees;
    if(grads > 0){
        degrees = (grads % 400) * 0.9;
    }
    if(grads < 0){
        degrees = (400 + (grads % 400)) * 0.9;
    }

    console.log(degrees);
}
solve(['-100']);