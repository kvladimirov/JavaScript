function sumLastKNumbersSequence([n, k]) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.min(0, current - k);
        let end = current - 1;
        let sum = 0;
        for (let goingBack = current - k; goingBack <= current - 1; goingBack++){

            if(goingBack >= 0)
            {
                sum += seq[goingBack];
            }
        }
        seq[current] = sum;
    }

    console.log(seq.join(' '));
}
sumLastKNumbersSequence(['6', '3']);