function lowestPrice(prices) {
    let lowestPriceInCities = new Map();
    let priceProduct = {};
    let productTown = {};
    for (let p of prices) {
        let [town, product, price] = p.split(/\s*\|\s*/);
        price = Number(price);
        if (!lowestPriceInCities.has(product)){
            lowestPriceInCities.set(product, new Map());
            lowestPriceInCities.get(product).set(town, price)
            priceProduct[product] = price;
            productTown[product] = town;

        }
        else if (lowestPriceInCities.has(product) && priceProduct[product] > price){
            delete lowestPriceInCities.get(product);
            lowestPriceInCities.set(product, new Map());
            lowestPriceInCities.get(product).set(town, price);
        }
        else if (lowestPriceInCities.has(product) && lowestPriceInCities.get(product).has(town)){
            let oldTown = productTown[product];
            delete lowestPriceInCities.get(product).get(town);
            lowestPriceInCities.set(product, new Map());
            lowestPriceInCities.get(product).set(oldTown, price);
        }
    }
    for (let[product, townPrice] of lowestPriceInCities) {

        for (let [town, price] of townPrice){

            console.log(`${product} -> ${price} ${"("+town+")"}`);
        }
    }
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
    'Sample Town | Burger | 9',
    'Sample Town | Burger | 11']);
lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])
