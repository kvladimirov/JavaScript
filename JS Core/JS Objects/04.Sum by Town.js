function sumOfTowns(arr) {
    let sums = {};
    for (let i=0; i<arr.length; i+=2) {
        let [town, income] = [arr[i], Number(arr[i+1])];
        if (sums[town] == undefined) {
            sums[town] = income;
        }
        else {
            sums[town] += income;
        }
    }
    console.log(JSON.stringify(sums));
}
sumOfTowns(['Sofia','20', 'Varna','10', 'Sofia','5']);
