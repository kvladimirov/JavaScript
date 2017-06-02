function formatHelper(text) {
    let result = '';
    let count = 0;
    for (let i = 0; i < text.length; i++){
        if (text[i] != ' ' ){
            result += text[i];
            count = 0;
        }
        if (text[i] == ' ' && (text[i+1] == '.' || text[i+1] == ',' || text[i+1] == ':' || text[i+1] == ';' || text[i+1] == '!' || text[i+1] == '?')){
            result += text[i+1];
            count++;
            i++;

        }
        if ((text[i] == '.' || text[i] == ',' || text[i] == ':' || text[i] == ';' || text[i] == '!' || text[i] == '?') && text[i+1] == ' ' && (text[i+1] >= 0 && text[i+1] <=9)){
            result += text[i];
            count++;
            i++;

        }
        if (text[i] == ' ' && count == 0 ){
            result += text[i];
            count++;
        }

        if (text[i] == '.' || text[i] == ',' || text[i] == ':' || text[i] == ';' || text[i] == '!' || text[i] == '?'){
            result += ' ';

        }
        // if(text[i] == ' ' && (text[i+1] != '.' || text[i+1] != ',' || text[i] != ':' || text2[i] != ';' || text2[i] != '!' || text2[i] != '?')){
        //     result += text[i];
        //     count++
        // }
    }
    console.log(result)
}

formatHelper('Terribly formatted text . With chaotic spacings."Terrible quoting"! Also this date is pretty confusing : 20 . 12. 16 .');

