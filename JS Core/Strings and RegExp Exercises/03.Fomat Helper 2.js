function formatHelper([text]) {
    let result = [];
    let newText = '';
    let pattern = /\s*[' '.,!?:;\n\t-]+\s*/g;
    let regex = new RegExp(pattern, 'g');

    for (let i = 0; i < text.length; i++) {
        let currentSentence = text[i];
        newText += currentSentence + ' ';
    }

    let match = regex.exec(newText);

    while (match) {
        result.push(match[0]);
        match = regex.exec(newText);
    }
    console.log(text)
}
formatHelper('Terribly formatted text . With chaotic spacings."Terrible quoting"! Also this date is pretty confusing : 20 . 12. 16 .');
