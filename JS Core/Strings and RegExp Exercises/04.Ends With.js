function solve([text, chekWord]) {
    let str = text.substr(text.length - chekWord.length);

    if(chekWord === str){
        console.log(true);
    }else{
        console.log(false);
    }
}
solve(['This sentence ends with fun?', 'fun?']);
solve(['This is Houston, we have…', 'We have…']);
solve(['The new iPhone has no headphones jack.', 'o headphones jack.']);