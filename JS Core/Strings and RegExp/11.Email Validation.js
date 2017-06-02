function emailValidation([email]) {
    let pattern = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$/g;
    let result = pattern.test(email);

    if(result){
        console.log("Valid");
    }else{
        console.log("Invalid");
    }
}

emailValidation(['valid123@email.bg']);
emailValidation(['invalid*name@emai1.bg']);
emailValidation(['kosyo.85@abv.bg']);