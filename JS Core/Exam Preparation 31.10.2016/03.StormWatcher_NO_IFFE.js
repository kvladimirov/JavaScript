 class Report {
    constructor(temperature, humidity, pressure, windSpeed) {
        this.id = Report.getId();
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
    }

    toString() {
        let status = 'Not stormy';
        if (this.temperature < 20 &&
            (this.pressure < 700 || this.pressure > 900) &&
            this.windSpeed > 25) {
            status = 'Stormy';
        }

        let result = `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}
Wind Speed: ${this.windSpeed}m/s
Weather: ${status}`;
        return result;
    }

     static getId() {
         if (!Report.nextId) {
             Report.nextId = 0;
         }
         return Report.nextId++;
     }
}

let record1 = new Report(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Report(10, 40, 680, 30);
console.log(record2.toString());
