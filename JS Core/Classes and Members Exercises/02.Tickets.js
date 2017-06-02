function ticketManager(inputArray, sortByProp) {
    class Ticket {
        constructor (destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;

        }

    }

    let result = [];
    for(let element of inputArray){
        let [destination, price, status]  = element.split('|');
        price = Number(price);
        let obj = new Ticket(destination, price, status);
        result.push(obj);
    }

    return result.sort((a, b) => {
        if(typeof(a[sortByProp]) == 'string'){
            return a[sortByProp].localeCompare(b[sortByProp]);
        }
        else{
            return a[sortByProp] - b[sortByProp];
        }
    });
}

console.log(ticketManager(['Philadelphia|94.20|available',
             'New York City|95.99|available',
             'New York City|95.99|sold',
             'Boston|126.20|departed'],
             'destination'));