function employeeData(input) {
    let pattern = /^([A-Z][a-zA-Z]*) \- ([1-9][0-9]*) \- ([a-zA-Z0-9 -]+)$/;

    for (let data of input){
        let match = pattern.exec(data);
        if (match){

            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
        // [name, salary, position] = data.split(' - ')
        // console.log(`Name: ${name}`);
        // console.log(`Position: ${position}`);
        // console.log(`Salary: ${salary}`);
    }
}


employeeData(['Jonathan - 2000 - Menager',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']
);