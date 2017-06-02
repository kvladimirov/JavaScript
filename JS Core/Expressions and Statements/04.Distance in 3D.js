function solve([x1, y1, z1, x2, y2, z2]) {
    x1 = Number(x1);
    y1 = Number(y1);
    z1 = Number(z1);
    x2 = Number(x2);
    y2 = Number(y2);
    z2 = Number(z2);
    let delta = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)) + ((z2 - z1) * (z2 - z1)));
    console.log(delta);
}
solve(['3.5', '0', '1', '0', '2', '-1']);