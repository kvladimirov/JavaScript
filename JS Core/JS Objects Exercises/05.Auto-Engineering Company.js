function autoCompany(input){
    let autos = new Map();
    for (let i = 0; i < input.length; i++){
        let itemInfo = input[i].split(" | ");
        let brand = itemInfo[0];
        let product = itemInfo[1];
        let number = Number(itemInfo[2]);

        if(!autos.has(brand)){
            autos.set(brand, new Map());
        }
        if(!autos.get(brand).has(product)){
            autos.get(brand).set(product, number);
        }
        else {
            autos.get(brand).set(product, autos.get(brand).get(product) + number);
        }

    }

    for(let [key,val] of autos){
        console.log(key);
        for(let [product, model] of val){
            console.log(`###${product} -> ${model}`);
        }
    }
}

autoCompany(["Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10"]);
