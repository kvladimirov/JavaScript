function solve(){
    let baseUrl = "https://judgetests-kosyo.firebaseio.com/schedule/";
    let currentStop = 'depot';
    let nextStop = 'depot';

    function depart() {
        setButtonStatus('#arrive', '#depart');
        let departRequest = {
            method: "GET",
            url: baseUrl + currentStop + ".json",
            success: next,
            //error: displayError,
        };
        $.ajax(departRequest);
    }

    function next(data){
        nextStop = data.next;
        $('#info span').text(`Next stop ${data.name}`)
    }

    function arrive(){
        setButtonStatus('#depart', '#arrive');
        let arriveRequest = {
            method: "GET",
            url: baseUrl + currentStop + ".json",
            success: arrivingAt,
        };
        
        $.ajax(arriveRequest);
    }

    function arrivingAt(data){
        $("#info span").text(`Arriving at ${data.name}`);
        currentStop = nextStop;
    }


    function setButtonStatus(button1, button2){
        $(button1).attr('disabled', false);

        $(button2).attr('disabled', 'disabled');
    }
    return{depart, arrive}
}
let result = solve();
 
