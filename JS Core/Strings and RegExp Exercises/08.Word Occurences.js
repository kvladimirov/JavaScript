function countWord([text, word]) {
    let count = 0;
    let pattern = `/\\b(${word})+\\b/gi`;
    let words = text.match(pattern);
    text = Array.from(text.split(/[\s()@#$%^&*_\?\.\\!\\"]+/))
    for (let w of text){
        let newWord = w.toLowerCase();
        if(word === newWord){
            count++;
        }
    }
    console.log(count);
}
countWord(['The waterfall was so high, that the child couldn’t see its peak.', 'the']);
countWord(['How do you plan on achieving that? How? How can you even think of that?', 'how']);
countWord(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']);




function solve([sentence, word]) {
    let result = [];
    let pattern = `\\b(${word})+\\b`;
    let regex = new RegExp(pattern,'gi');
    let match = regex.exec(sentence);
    while(match){
        result.push(match[0]);
        match = regex.exec(sentence);
    }

    console.log(result.length);
}
solve(['The waterfall was so high, that the child couldn’t see its peak.', 'the']);
solve(['How do you plan on achieving that? How? How can you even think of that?', 'how']);
solve(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']);