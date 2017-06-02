function extractLinks(input) {
    let result = [];
    let text = '';
    let pattern = `www\\.[a-zA-Z0-9\\-]+(\\.[a-z]+)+`;
    let regex = new RegExp(pattern, 'g');

    for (let i = 0; i < input.length; i++) {
        let currentSentence = input[i];
        text += currentSentence + ' ';
    }

    let match = regex.exec(text);

    while (match) {
        result.push(match[0]);
        match = regex.exec(text);
    }
    console.log(result.join('\n'))
}
extractLinks(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko ']);