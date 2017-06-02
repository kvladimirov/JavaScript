function tripLength([x1,y1,x2,y2,x3,y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    let x1x2Diff = Math.abs(x1 - x2);
    let y1y2Diff = Math.abs(y1 - y2);
    let a = Math.sqrt(x1x2Diff * x1x2Diff + y1y2Diff * y1y2Diff);

    let x2x3Diff = Math.abs(x2 - x3);
    let y2y3Diff = Math.abs(y2 - y3);
    let b = Math.sqrt(x2x3Diff * x2x3Diff + y2y3Diff * y2y3Diff);

    let x1x3Diff = Math.abs(x1 - x3);
    let y1y3Diff = Math.abs(y1 - y3);
    let c = Math.sqrt(x1x3Diff * x1x3Diff + y1y3Diff * y1y3Diff);

    if(a+b <= Math.min(b+c, c+a)){
        console.log("1->2->3: " + (a+b));
    }
    else if (b+c <= Math.min(a+b, c+a)) {
        console.log("1->3->2: " + (b+c));
    }
    else if (c+a <= Math.min(a+b, b+c)) {
        console.log("2->1->3: " + (c+a));
    }
}

tripLength(['0', '0', '2', '0', '4', '0']);
tripLength(['5', '1', '1', '1', '5', '4']);
tripLength(['-1', '-2', '3.5', '0', '0', '2']);
tripLength(['0', '3', '1', '0', '-1', '0']);