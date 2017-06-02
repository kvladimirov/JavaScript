function matchDates(input) {
    let dates = [];
    for (let sent of input){
        let pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
        let match = pattern.exec(sent);
        console.log(match)
        while (match){
            dates.push(match[0] + ` (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
            match = pattern.exec(sent);
        }
    }
    console.log(dates.join('\n'));
}

matchDates(['I am born on 30-Dec-1994.',
    'My father is born on the 29-Jul-1955.',
    '01-July-2000 is not a valid date.']);