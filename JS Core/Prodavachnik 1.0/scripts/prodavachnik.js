function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');

    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkListAds').click(listAdds);
    $('#linkCreateAd').click(showCreateAdView);
    $('#linkLogout').click(logoutUser);

    $('#buttonLoginUser').click(loginUser);
    $('#buttonRegisterUser').click(registerUser);
    $('#buttonCreateAd').click(createAd);
    $('#buttonEditAd').click(editAd);

    $("#infoBox, #errorBox").click(function () {
       $(this).fadeOut();
    });

    $(document).on({
        ajaxStart: function () {$('#loadingBox').show();},
        ajaxStop: function () {$('#loadingBox').fadeOut();}
    });



    function showHideMenuLinks() {
        $('#linkHome').show();
        if(sessionStorage.getItem('authtoken')){
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkListAds').show();
            $('#linkCreateAd').show();
            $('#linkLogout').show();
        }else {
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkListAds').hide();
            $('#linkCreateAd').hide();
            $('#linkLogout').hide();
        }

    }
    
    
    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }


    function showHomeView() {
        showView('viewHome');
    }
    
    
    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    
    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }



    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_rk6-PWLfe";
    const kinveyAppSecret = "d96c0504cd59458890b39e7990577648";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
    };



    function loginUser() {
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };

        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });
        
        
        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAdds();
            showInfo('Login successful.')
        }
    }
    
    function registerUser() {
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };

        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });
        
        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAdds();
            showInfo('User registration successful.');
        }


    }
    
    
    
    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        $('#loggedInUser').text("Wellcome, " + username + "!");

    }


    
    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function() {$('#infoBox').fadeOut();}, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }



    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
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
                let links = [];

                if(add._acl.creator == sessionStorage['userId']){
                    let deleteLink = $('<a href="#">[Delete]</a>').click(function () {
                       deleteAd(add);
                    });

                    let editLink = $('<a href="#">[Edit]</a>').click(function () {
                       loadAdForEdit(add);
                    });
                    links = [deleteLink, ' ', editLink];
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
                $('#formEditAd textarea[name=description]').val(add.Description);
                $('#formEditAd input[name=datePublished]').val(add.Date);
                $('#formEditAd input[name=price]').val(add.Price);

                showView('viewEditAd');
            }
        }

    }

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

    function editAd() {
        let adData = {
            Title: $('#formEditAd input[name=title]').val(),
            Description: $('#formEditAd textarea[name=description]').val(),
            Publisher: sessionStorage.getItem('username'),
            Date: $('#formEditAd input[name=datePublished]').val(),
            Price: $('#formEditAd input[name=price]').val()
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

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authtoken')
        };
    }
}