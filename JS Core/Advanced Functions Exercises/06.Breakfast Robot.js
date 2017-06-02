let solve = (function() {

    let recipes = {
        apple: {'carbohydrate': 1, 'flavour': 2},
        coke: {'carbohydrate': 10, 'flavour': 20},
        burger: {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        omelet: {'protein': 5, 'fat': 1, 'flavour': 1},
        cheverme: {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10}
    };

    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let breakFast = function (input) {
        let [command, arg1, arg2] = input.split(' ').filter(x=>x != '');

        let action = (function () {
            return {
                restock: (microelement, quantity) => {
                    microelement = microelement.toLowerCase();
                    robot[microelement] += Number(quantity);
                    return "Success";
                },

                prepare: (recipe, quantity) => {
                    recipe = recipe.toLowerCase();
                    let mealQuantity = quantity;
                    let insufficient = '';
                    for (let prop of Object.keys(recipes[recipe])) {
                        let quantity = recipes[recipe][prop]*Number(mealQuantity);
                        if (quantity > robot[prop]) {
                            return `Error: not enough ${prop} in stock`;
                        }
                    }

                    Object.keys(recipes[recipe]).forEach(key=> {
                        let quantity = recipes[recipe][key] * Number(mealQuantity);
                        robot[key] -= quantity;
                    });

                    return 'Success';
                },

                report: () => `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`
            }
        })();

        return action[command](arg1, arg2);

    };

    return breakFast;
})();
//console.log(solve('restock flavour 50'));
//console.log(solve('prepare coke 4'));

// console.log(solve('restock carbohydrate 10'));
// console.log(solve('restock flavour 10'));
// console.log(solve('prepare apple 1'));
// console.log(solve('restock fat 10'));
// console.log(solve('prepare burger 1'));
// console.log(solve('report'));

console.log(solve('prepare cheverme 1'));
console.log(solve('restock protein 10'));
console.log(solve('prepare cheverme 1'));
console.log(solve('restock carbohydrate 10'));
console.log(solve('prepare cheverme 1'));
console.log(solve('restock fat 10'));
console.log(solve('prepare cheverme 1'));
console.log(solve('restock flavour 10'));
console.log(solve('prepare cheverme 1'));
console.log(solve('report'));
