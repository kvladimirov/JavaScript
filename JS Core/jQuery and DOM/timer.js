function timer() {
    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');


    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');


    let interval = undefined;
    let ss = 0;


    startBtn.click(function () {
        if(!interval){
            interval = setInterval(step,1000);
        }

    });

    stopBtn.click(function () {
        clearInterval(interval);
        interval = undefined;
    });

    function step() {
        ss++;
        seconds.text(pad(ss % 60));
        let mm = ss / 60;
        minutes.text(pad(Math.floor(mm%60)));
        let hh = ss / 3600;
        hours.text(pad(Math.floor(hh)));


    }

    function pad(num) {
        if(num <= 9){
            num = `0${num}`;
        }
        return num;
    }
}
