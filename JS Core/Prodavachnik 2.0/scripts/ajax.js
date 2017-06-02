function createAd() {
    const kinveyAuthHeaders = {
      'Authorization': "Kinvey " + sessionStorage.getItem('authtoken')
    };

    const kinveyUserUrl = `${kinveyBaseUrl}user/${kinveyAppKey}/${sessionStorage.getItem('userId')}`;

    $.ajax({
       method: "GET",
       url: kinveyUserUrl,
       headers: kinveyAuthHeaders,
       success: afterPublisherRequest,
       error: handleAjaxError
    });

    function afterPublisherRequest(publisher) {
        //console.log(publisher.username);
        let adData = {
            Title: $('#formCreateAd input[name=title]').val(),
            Description: $('#formCreateAd textarea[name=description]').val(),
            Publisher: publisher.username,
            Date: $('#formCreateAd input[name=datePublished]').val(),
            Price: $('#formCreateAd input[name=price]').val(),
            Image: $('#formCreateAd input[name=image]').val()
        };

        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads",
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: createAdSuccess,
            error: handleAjaxError
        });

        function createAdSuccess(response) {
            listAdds();
            showInfo('Advertisement created');
        }
    }
}

function listAdds() {
    $('#ads').empty();
    showView('viewAds');

    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads",
        headers: getKinveyUserAuthHeaders(),
        success: loadAddsSuccess,
        error: handleAjaxError
    });

    function loadAddsSuccess(adds) {
        showInfo('Advertisements loaded');

        if(adds.length == 0){
            $('#ads').text('No advertisements available.');
        }else {
            let addsTable = $("<table>");
            let row = $("<tr>");
            let cols = $("<th>Title</th><th>Description</th><th>Publisher</th><th>Date</th><th>Price</th><th>Actions</th>");
            cols.appendTo(row);
            row.appendTo(addsTable);

            for(let add of adds){
                appendAddRow(add, addsTable);
                $('#ads').append(addsTable);
            }

        }
    }
    function appendAddRow(add, addsTable) {

        let detaileLink = $('<a href="#">[Read More]</a>').click(function () {
            displayAdvert(add);
        });
        let links = [detaileLink];

        if(add._acl.creator == sessionStorage['userId']){
            let deleteLink = $('<a href="#">[Delete]</a>').click(function () {
                deleteAd(add);
            });

            let editLink = $('<a href="#">[Edit]</a>').click(function () {
                loadAdForEdit(add);
            });
            links = [detaileLink, ' ', deleteLink, ' ', editLink];
        }

        let row = $("<tr>");
        let cols = $(`<td>${add.Title}</td><td>${add.Description}</td><td>${add.Publisher}</td><td>${add.Date}</td><td>${add.Price}</td>`);

        cols.appendTo(row);
        row.append(links);
        row.appendTo(addsTable);
    }

    function loadAdForEdit(add) {
        $.ajax({
            method: "GET",
            url: kinveyAdUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads/" + add._id,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });


        function loadAdForEditSuccess(add) {
            $('#formEditAd input[name=id]').val(add._id);
            $('#formEditAd input[name=title]').val(add.Title);
            $('#formEditAd input[name=publisher]').val(add.Publisher);
            $('#formEditAd textarea[name=description]').val(add.Description);
            $('#formEditAd input[name=datePublished]').val(add.Date);
            $('#formEditAd input[name=price]').val(add.Price);
            $('#formEditAd input[name=image]').val(add.Image);

            showView('viewEditAd');
        }
    }
}

function editAd() {
    let adData = {
        Title: $('#formEditAd input[name=title]').val(),
        Description: $('#formEditAd textarea[name=description]').val(),
        Publisher: sessionStorage.getItem('username'),
        Date: $('#formEditAd input[name=datePublished]').val(),
        Price: $('#formEditAd input[name=price]').val(),
        Image: $('#formEditAd input[name=image]').val()
    };

    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads/" + $('#formEditAd input[name=id]').val(),
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: editAdSuccess,
        error: handleAjaxError
    });

    function editAdSuccess(response) {
        listAdds();
        showInfo('Advertisement edited');
    }
}

function deleteAd(add) {
    $.ajax({
        method: "DELETE",
        url: kinveyAddUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads/" + add._id,
        headers: getKinveyUserAuthHeaders(),
        success: deleteAdSuccess,
        error: handleAjaxError
    });

    function deleteAdSuccess(response) {
        listAdds();
        showInfo('Advertisement deleted');
    }
}

function displayAdvert(add) {  // coppy/paste by loadAdForEdit
    $.ajax({
        method: "GET",
        url: kinveyAdUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads/" + add._id,
        headers: getKinveyUserAuthHeaders(),
        success: displayAdvertSuccess,
        error: handleAjaxError
    });

    $('#viewDetailsAd').empty();

    function displayAdvertSuccess(advert) {
        let html = $('<div>');
        html.append(
            $('<img>').attr('src', advert.Image),
            $('<br>'),
            $('<label>').text('Price:'),
            $('<h1>').text(advert.Price),
            $('<label>').text('Title:'),
            $('<h1>').text(advert.Title),
            $('<label>').text('Description:'),
            $('<p>').text(advert.Description),
            $('<label>').text('Publisher:'),
            $('<div>').text(advert.Publisher),
            $('<label>').text('Date:'),
            $('<div>').text(advert.Date)
        );
        html.appendTo($('#viewDetailsAd'));
        showView('viewDetailsAd');
    }
}


function getKinveyUserAuthHeaders() {
    return {
        'Authorization': "Kinvey " + sessionStorage.getItem('authtoken')
    };
}
