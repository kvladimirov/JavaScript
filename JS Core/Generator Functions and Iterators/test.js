function* oddNums() {
    let num = -1;
    while (true){
        yield num += 2;
    }
}

let g = oddNums();
for (let i = 0; i < 10; i++)
    console.log(g.next().done);

