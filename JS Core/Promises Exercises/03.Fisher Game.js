function attachEvents() {
    const appKey = "kid_S1ix6qbfx";
    const baseUrl = "https://baas.kinvey.com/"
    const username = 'fisher';
    const password = 'f';
    const token = "Basic " + btoa(`${username}:${password}`);
    let catchesContainer = $('#catches');
    let addCatchContainer = $('#aside')

    addCatchContainer.find('button.load').on('click', loadCatches);
    addCatchContainer.find('button.add').on('click', add);

    function add(){
        let addData = processInputData($('#addForm'));
        if(addData){
            let addRequest = $.ajax({
                method: 'POST',
                url: baseUrl + "appdata/" + appKey + "/biggestCatches/",
                headers: {
                    Authorization:token,
                    "Content-type": "application/json"
                },
                data: addData
            });
            addRequest
                .then(loadCatches)
                .catch(displayError)

        }
    }

    function loadCatches() {
        let getRequest = $.ajax({
            method: 'GET',
            url: baseUrl + "appdata/" + appKey + "/biggestCatches/",
            headers: {
                Authorization: token
            }
        });
        getRequest
            .then(processCatches)
            .catch(displayError)
    }

    function processCatches(data){
        catchesContainer.empty();
        for(let element of data){
            displayCatch(element)
        }

    }

    function displayCatch(catchData){
        let catchElement = $('<div>')
            .addClass('catch')
            .attr('data-id', catchData._id)
            .append($('<label>').text('Angler'))
            .append($('<input>')
                .attr('type', 'text')
                .addClass('angler')
                .val(catchData.angler))
            .append($('<label>').text('Weight'))
            .append($('<input>')
                .attr('type', 'number')
                .addClass('weight')
                .val(catchData.weight))
            .append($('<label>').text('Species'))
            .append($('<input>')
                .attr('type', 'text')
                .addClass('species')
                .val(catchData.species))
            .append($('<label>').text('Location'))
            .append($('<input>')
                .attr('type', 'text')
                .addClass('location')
                .val(catchData.location))
            .append($('<label>').text('Bait'))
            .append($('<input>')
                .attr('type', 'text')
                .addClass('bait')
                .val(catchData.bait))
            .append($('<label>').text('Capture Time'))
            .append($('<input>')
                .attr('type', 'number')
                .addClass('captureTime')
                .val(catchData.captureTime));

        catchElement.append($('<button>')
            .addClass('update').text('Update').on('click', () => updateElement(catchData)));
        catchElement.append($('<button>')
            .addClass('delete').text('Delete').on('click', () => deleteElement(catchData)));
        catchesContainer.append(catchElement)
    }

    function updateElement(updateData){
        let updateElementID = updateData._id;
        // console.log(updateElementID)
        let modifiedData = processInputData(updateElementID, true);
        // console.log(modifiedData)
        if(modifiedData) {
            let updateRequest = $.ajax({
                method: 'PUT',
                url: baseUrl + "appdata/" + appKey + "/biggestCatches/" + updateElementID,
                headers: {
                    Authorization: token,
                },
                data: modifiedData,
                contentType: 'application/json'
            });
            updateRequest
                .then(loadCatches)
                .catch(displayError)
        }
    }

    function deleteElement(delData){
        let delElementID = delData._id;
        let delRequest = $.ajax({
            method: 'DELETE',
            url: baseUrl + "appdata/" + appKey + "/biggestCatches/" + delElementID,
            headers: {
                Authorization: token,
            }
        });
        delRequest
            .then(loadCatches)
            .catch(displayError)
    }


    function processInputData(selector, update = false){
        if(update == true){

            let updateElementId = selector;
            selector = $('#catches').find(`[data-id="${updateElementId}"]`);
            // console.log(selector);
        }

        let angler = selector.find('.angler').val();
        let weight = selector.find('.weight').val();
        let species = selector.find('.species').val();
        let location = selector.find('.location').val();
        let bait = selector.find('.bait').val();
        let captureTime = selector.find('.captureTime').val();

        if(angler != '' && weight != '' && species != ''
        && location != '' && bait != '' && captureTime != ''){
            weight = Number(weight);
            captureTime = Number(captureTime);
            if(Number.isInteger(captureTime)){
                let parsedData = JSON.stringify({
                    'angler': angler,
                    'weight': weight,
                    'species': species,
                    'location': location,
                    'bait': bait,
                    'captureTime': captureTime
                });
                return parsedData;
            }
        }
    }

    function displayError(error){
        console.log(error)
    }
}