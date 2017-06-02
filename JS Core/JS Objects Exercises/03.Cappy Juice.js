function cappyJuice(input) {
    let juices = new Map();
    let bottles = new Map();
    for(let i = 0; i < input.length; i++){
        let fruitInfo = input[i].split(" => ");
        let fruit = fruitInfo[0];
        let quantity = Number(fruitInfo[1]);

        if(!juices.has(fruit)){
            juices.set(fruit,0);
        }

        juices.set(fruit,juices.get(fruit) + quantity);

        if (juices.get(fruit) >= 1000) {
            bottles.set(fruit,Math.floor(juices.get(fruit) / 1000))
        }
    }

    for(let [key, val] of bottles){
        console.log(`${key} => ${val}`);
    }
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);