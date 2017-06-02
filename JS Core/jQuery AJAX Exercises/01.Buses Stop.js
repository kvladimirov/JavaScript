function getInfo() {
    $('#buses').empty();
    let stopBus = $('#stopId').val();
    let host = "https://judgetests-kosyo.firebaseio.com/businfo/" + stopBus;

    $.get(host + ".json")
        .then(listBuses)
        .catch(displayError);

    function listBuses(data) {
        $('#stopName').text(data.name);

        for(let obj in data.buses){
            let li = $('<li>');
            li.text(`Bus ${obj} arrives in ${data.buses[obj]} minutes`);
            $('#buses').append(li);
        }
    }

    function displayError() {
        $('#stopName').text("Error");
    }
}