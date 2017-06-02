function systemComponents(input){
    let components = new Map();
    for (let i = 0; i < input.length; i++){
        let itemInfo = input[i].split(" | ");
        let systemName = itemInfo[0];
        let componentName = itemInfo[1];
        let subcomponentName = itemInfo[2];

        if(!components.has(systemName)){
            components.set(systemName, {});
        }
        if(!components.get(systemName).hasOwnProperty(componentName)){
            components.get(systemName)[componentName] = [];

        }
        components.get(systemName)[componentName].push(subcomponentName);
    }
    console.log(components)
    function nameCompare(a, b) {
       if (a[0] === b[0]){
           if(a > b) return 1;
           if(a < b) return -1;
       }else {
           return a > b
       }
    }

    components = [...components].sort((a, b) => a.length < b.length || a[0].localeCompare(b[0]))
    for(let [key,val] of components){
        console.log(`${key}`);
        console.log(`${[...val].join(' ')}`);
        for(let product of val){
            console.log(`|||${[...val.product]}`);
            console.log(`||||||${price.join('\n||||||')}`);

        }
    }
}
systemComponents(["SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"]);