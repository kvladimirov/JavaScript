function airportStatistics(input){
    let components = new Map();

    let actionPreview = "land";
    for (let i = 0; i < input.length; i++){
        let itemInfo = input[i].split(" ");
        let planeID = itemInfo[0];
        let town = itemInfo[1];
        let passengersCount = Number(itemInfo[2]);
        let action = itemInfo[3];

        if(!components.has(town)){
            components.set(town, {});
        }
        if(!components.get(town).hasOwnProperty(planeID) && action === 'land'){
            components.get(town)[planeID] = passengersCount;

        }
        if(components.get(town).hasOwnProperty(planeID) && action === 'land'){
            components.get(town)[planeID] = passengersCount;

        }
        if(!components.get(town).hasOwnProperty(planeID) && action === 'depart'){
            components.get(town)[planeID] = passengersCount;
        }
        if(components.get(town).hasOwnProperty(planeID) && action === 'depart'){
            components.get(town)[planeID] = passengersCount;

        }

    }
    console.log(components)
    // function nameCompare(a, b) {
    //     if (a[0] === b[0]){
    //         if(a > b) return 1;
    //         if(a < b) return -1;
    //     }else {
    //         return a > b
    //     }
    // }

    //components = [...components].sort((a, b) => a.length < b.length || a[0].localeCompare(b[0]))
    // for(let [key,val] of components){
    //     console.log(`${key}`);
    //     //console.log(`${[...val].join(' ')}`);
    //     for(let product of val){
    //         console.log(`|||${[...val.product]}`);
    //         console.log(`||||||${price.join('\n||||||')}`);
    //
    //     }
    // }
}
airportStatistics([
        "Boeing474 Madrid 300 land",
        "AirForceOne WashingtonDC 178 land",
        "Airbus London 265 depart",
        "ATR72 WashingtonDC 272 land",
        "ATR72 Madrid 135 depart"
    ]);

airportStatistics([
        "Airbus Paris 356 land",
        "Airbus London 321 land",
        "Airbus Paris 213 depart",
        "Airbus Ljubljana 250 land"
    ]
);