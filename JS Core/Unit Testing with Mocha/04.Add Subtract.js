let createCalculator = function () {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
//console.log(value.get());
module.exports = { createCalculator };