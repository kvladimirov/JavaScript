function spiceMustFlow(input) {
    let amount = Number(input[0]);
    let worker = 26;
    let drop = 10;
    let days = 0;
    let minAmount = 100;
    let totalAmount = 0;

    while(amount >= minAmount){
        totalAmount += amount;
        if (amount < minAmount){
            totalAmount = 0;

        }else{
            totalAmount -= worker;
        }
        amount -= drop;
        days++;
    }

    if (totalAmount < worker){
        totalAmount = 0;

    }else{
    totalAmount -= worker;
    }

   console.log(days);
   console.log(totalAmount);
}
spiceMustFlow(['0']);
spiceMustFlow(['99']);
spiceMustFlow(['111']);
spiceMustFlow(['450']);
spiceMustFlow(['200']);
