function solve([sentence, delimiter]) {
    let splittedWords = sentence.split(delimiter);

    for(let word of splittedWords){
        console.log(word);
    }
}
solve(['One-Two-Three-Four-Five', '-']);