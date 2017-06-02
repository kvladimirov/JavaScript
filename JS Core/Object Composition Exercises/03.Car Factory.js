function carFactory(argument) {

    let engine = () => {
        if(argument.power <= 90) {
            return { power: 90, volume: 1800 };
        }
        if(argument.power <= 120) {
            return {power: 120, volume: 2400};
        }
        return { power: 200, volume: 3500 }
    };
    let carriage = () => {return { type: argument.carriage, color: argument.color };};
    let wheels = () => {
        if (argument.wheelsize % 2 == 0){
            argument.wheelsize--;
        }
        let wheelsArr = [];
        for (let i = 0; i < 4; i++){
            wheelsArr.push(argument.wheelsize);
        }
        return wheelsArr;
    };
    let result = {
        model: argument.model,
        engine: engine(),
        carriage: carriage(),
        wheels: wheels()
    };
    return result;

}
// let requirements = {
//     model: 'VW Golf II',
//         power: 90,
//         color: 'blue',
//         carriage: 'hatchback',
//         wheelsize: 14
// };

let requirements = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
};

console.log(carFactory(requirements));