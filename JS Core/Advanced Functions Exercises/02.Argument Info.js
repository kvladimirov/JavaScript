function result() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    let sortedTypes = [];

    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }
    
    sortedTypes = [...sortedTypes].sort((a, b) => a[1] < b[1]);
    
    for (let a of sortedTypes) {
     console.log(`${a[0]} = ${a[1]}`);
    }
}
result('cat', 42, function () { console.log('Hello world!'); });
//result({ name: 'bob'}, 3.333, 9.999);