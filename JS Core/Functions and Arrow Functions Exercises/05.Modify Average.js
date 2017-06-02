function solve([number]) {
    number = Number(number);
    function avrSum(number) {
        let counter = 0;
        let lastNum = 0;
        let sum = 0;
        while(number > 0){
            lastNum = number % 10;
            sum += lastNum;
            counter++;
            number = Math.floor(number/10);
        }

        if((sum/counter) > 5){
            return true;
        }
        return false;
    }

    function addNines(number) {
        let strNum = "" + number + "9";
        number = Number(strNum);
        return number;
    }

    while (!avrSum(number)){
        number = addNines(number);
    }

    console.log(number);
}
solve(['101']);