function constructionCrew(worker) {
    let callback = function (worker) {
        if (worker.handsShaking) {
            worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
            worker.handsShaking = false;
        }
        return worker;
    };
    return callback(worker);
}
// let worker = {
//     weight: 80,
//     experience: 1,
//     bloodAlcoholLevel: 0,
//     handsShaking: true
// };
// let worker = {
//     weight: 120,
//     experience: 20,
//     bloodAlcoholLevel: 200,
//     handsShaking: true
// };

let worker = {
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
};
console.log(constructionCrew(worker));