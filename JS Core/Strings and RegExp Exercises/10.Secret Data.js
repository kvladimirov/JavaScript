function secretData(input) {
    let text = input.join('\n');
    console.log(text)
    let usernamePattern = '(\\*[A-Z][A-Za-z]*(?=$|\\s))|';
    let phoneNumPattern = '(\\+[0-9-]{10}(?=$|\\s))|';
    let idPattern = '(\\![A-Za-z0-9]+)(?=$|\\s)|';
    let basePattern = '(_[A-Za-z0-9]+)(?=$|\\s)';
    let globalPattern = new RegExp(usernamePattern + phoneNumPattern + idPattern + basePattern, 'g');

    text = text.replace(globalPattern, x=> '|'.repeat(x.length));
    console.log(text);
}

secretData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'])


function extractData(arr){
    let text = arr.join(' ');
    let matches = text.match(/\b[a-zA-Z]+\b/g);
    let unique = new Set();
    for (let word of matches){
        unique.add(word.toLowerCase());
    }
    let result = Array.from(unique);
    console.log(result.join(', '))
}
extractData(['Agent *Ivankov was in the room when it all happened.'])