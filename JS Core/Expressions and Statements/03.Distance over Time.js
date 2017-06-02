function solve([v1, v2, t]) {
    v1 = Number(v1);
    v2 = Number(v2);
    t = Number(t);
    let dist1 = v1 * (t / 3600);
    let dist2 = v2 * (t / 3600);
    let delta = Math.abs(dist1 - dist2);
    console.log(delta * 1000);
}
solve(['5', '-5', '40']);