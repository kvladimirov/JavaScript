function solve([text, chekWord]) {
    let str = text.substring(0, chekWord.length);

    if(chekWord === str){
        console.log(true);
    }else{
        console.log(false);
    }

}
solve(['How have you been?', 'how']);
solve(['The quick brown fox…', 'The quick brown fox…']);
solve(['Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta']);