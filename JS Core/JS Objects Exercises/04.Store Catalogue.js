function storeCatalogue(input){
    let initials = new Map();
    for (let i = 0; i < input.length; i++){
        let itemInfo = input[i].split(" : ");
        let productName = itemInfo[0];
        let productPrice = Number(itemInfo[1]);
        let initial = productName[0];

        if(!initials.has(initial)){
            initials.set(initial,new Map());
        }

        initials.get(initial).set(productName,productPrice);
    }


    function alphabeticSort(a, b){
        return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    }

    let sortedInitials = [...initials].sort(alphabeticSort);

    for(let [key,val] of sortedInitials){
        console.log(key);
        let sortedProducts = [...val].sort(alphabeticSort);
        for(let [product,price] of sortedProducts){
            console.log(`  ${product}: ${price}`);
        }
    }
}

storeCatalogue(["Appricot : 20.4", "Fridge : 1500", "TV : 1499", "Deodorant : 10", "Boiler : 300", "Apple : 1.25", "Anti-Bug Spray : 15", "T-Shirt : 10"]);
//storeCatalogue(["Banana : 2","Rubic's Cube : 5","Raspberry P : 4999","Rolex : 100000","Rollon : 10","Rali Car : 2000000","Pesho : 0.000001","Barrel : 10"]);