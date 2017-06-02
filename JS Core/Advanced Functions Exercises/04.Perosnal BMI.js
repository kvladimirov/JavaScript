function personalBMI(name, age, weight, height) {

    let pBMI = () => {
        return Math.round(weight / (height/100 * height / 100))
    };
    let status = () => {
        if(pBMI() < 18.5)
            return 'underweight';
        if(pBMI() < 25)
            return 'normal';
        if (pBMI() < 30)
            return 'overweight';
        return 'obese'
    };
    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: pBMI(),
        status: status()
    };
    if (status() === 'obese') {
        result.recommendation = 'admission required'
    }
    return result;

}
console.log(personalBMI('Peter', 29, 75, 182));