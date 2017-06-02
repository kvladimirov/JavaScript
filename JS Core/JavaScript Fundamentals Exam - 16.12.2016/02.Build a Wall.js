function buildAWall(input) {
    let result = [];
    let maxDayWork = 30 - Math.min.apply(null, input);

    // let minInput = input[0];
    // for (let i = 0; i < input.length; i++) {
    //     if(input[i] < minInput){
    //         minInput = input[i];
    //     }
    // }
    // let maxDayWork = 30 - minInput;
    while(maxDayWork >= 0) {
        let amount = 0;
        for (let i = 0; i < input.length; i++) {
            if(input[i] < 30){
                input[i]++;
                amount += 195;
            }

        }

        if(amount >= 195){
            result.push(amount);
        }

        maxDayWork--;

    }

    console.log(result.join(', '));
    result = result.reduce((a, b) => a + b);
    console.log(result * 1900 + ' ' + 'pesos');

}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([0]);
buildAWall([17, 22, 17, 19, 17]);
