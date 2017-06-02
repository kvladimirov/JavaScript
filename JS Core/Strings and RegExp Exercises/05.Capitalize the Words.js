function solve([text]) {
    let wordsArray = Array.from(text.split(' '));
    let newWordsArray = [];

    for(let word of wordsArray){
        let newWord ='';
        for(let w = 0; w < word.length; w++) {
            if(w == 0){
                newWord += word[w].toUpperCase();
            }
            else {
                newWord += word[w].toLowerCase();
            }
        }
        newWordsArray.push(newWord)
    }
    console.log(newWordsArray.join(' '));
}
solve(['Capitalize these words']);
solve(['Was that Easy? tRY thIs onE for SiZe!']);
