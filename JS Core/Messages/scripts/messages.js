function startApp() {
    sessionStorage.clear();

    showHideMenuLinks();

    showView('viewAppHome');

    $("#linkMenuAppHome").click(showHomeView);
    $("#linkMenuLogin").click(showLoginView);
    $("#linkMenuRegister").click(showRegisterView);
    $("#linkMenuUserHome").click(showHomeUserView);
    $("#linkMenuMyMessages").click(listMyMessages);
    $("#linkMenuArchiveSent").click(listArchiveSent);
    $("#linkMenuSendMessage").click(showCreateMessageView);
    $("#linkMenuLogout").click(logoutUser);

    $("#linkUserHomeMyMessages").click(listMyMessages);
    $("#linkUserHomeArchiveSent").click(listArchiveSent);
    $("#linkUserHomeSendMessage").click(showCreateMessageView);

    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonSendMessage").click(createMessage);


    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });

    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    });

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_r1q_6dcXx";
    const kinveyAppSecret = "39475a211a2949018e093c433631331d";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " +
        btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    function showHideMenuLinks() {
        if (sessionStorage.getItem('authToken')) {
            // Logged in user
            $("#linkMenuAppHome").hide();
            $("#linkMenuLogin").hide();
            $("#linkMenuRegister").hide();
            $("#linkMenuUserHome").show();
            $("#linkMenuMyMessages").show();
            $("#linkMenuArchiveSent").show();
            $("#linkMenuSendMessage").show();
            $("#linkMenuLogout").show();
        } else {
            // No logged in user
            $("#linkMenuAppHome").show();
            $("#linkMenuLogin").show();
            $("#linkMenuRegister").show();
            $("#linkMenuUserHome").hide();
            $("#linkMenuMyMessages").hide();
            $("#linkMenuArchiveSent").hide();
            $("#linkMenuSendMessage").hide();
            $("#linkMenuLogout").hide();
        }
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewAppHome');
    }

    function showHomeUserView() {
        showView('viewUserHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateMessageView() {
        $('#formSendMessage').trigger('reset');
        showView('viewSendMessage');
    }

    function loginUser(event) {
        event.preventDefault()
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=password]').val()
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
            showHomeUserView();
            showInfo('Login successful.');
        }


    }

    function registerUser(event) {
        event.preventDefault()
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=password]').val(),
            name: $('#formRegister input[name=name]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });
         // let userOption = $("<option>");
         // userOption.value(username);
         // userOption.text(username);
         //$('#msgRecipientUsername').append(userOption);
        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showHomeUserView();
            showInfo('User registration successful.');
        }

    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        let name = userInfo.name;
        sessionStorage.setItem('name', name);
        $('#spanMenuLoggedInUser').text(
            "Welcome, " + username + "!");
        $('#viewUserHomeHeading').text(
            "Welcome, " + username + "!");
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
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }


    function logoutUser() {
        sessionStorage.clear();
        $('#spanMenuLoggedInUser').text("");
        showHideMenuLinks();
        showView('viewAppHome');
        showInfo('Logout successful.');

    }

    function listMyMessages() {
        $('#myMessages').empty();
        showView('viewMyMessages');
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
            headers: getKinveyUserAuthHeaders(),
            success: loadMyMessagesSuccess,
            error: handleAjaxError
        });

        function loadMyMessagesSuccess(messages) {
            showInfo('Messages loaded.');
            if (messages.length == 0) {
                $('#myMessages').text('No messages.');
            } else {
                let messagesTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>From</th><th>Message</th>',
                        '<th>Date Received</th>'));
                for (let message of messages){
                    if(message.sender_username != sessionStorage['username']){
                        appendMyMessageRow(message, messagesTable);
                    }

                }

                $('#myMessages').append(messagesTable);
            }

        }

        function appendMyMessageRow(message, messagesTable) {
            let sender = formatSender(message.sender_username, message.sender_name);
            let dateMessage = formatDate(message._kmd.lmt);
            messagesTable.append($('<tr>').append(
                $('<td>').text(sender),
                $('<td>').text(message.text),
                $('<td>').text(dateMessage)
            ));
        }

    }

    function listArchiveSent() {
        $('#sentMessages').empty();
        showView('viewArchiveSent');
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
            headers: getKinveyUserAuthHeaders(),
            success: loadMessagesSuccess,
            error: handleAjaxError
        });

        function loadMessagesSuccess(messages) {
            showInfo('Messages loaded.');
            if (messages.length == 0) {
                $('#sentMessages').text('No messages.');
            } else {
                let messagesTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>To</th><th>Message</th>',
                        '<th>Date Sent</th><th>Actions</th>'));
                for (let message of messages){
                    if(message.sender_username === sessionStorage['username']){
                        appendArchiveSentRow(message, messagesTable);
                    }
                }
                $('#sentMessages').append(messagesTable);
            }

        }

        function appendArchiveSentRow(message, messagesTable) {
            let links = [];
            if (message._acl.creator == sessionStorage['userId']) {
                let deleteLink = $('<a href="#">[Delete]</a>')
                    .click(function () { deleteMessage(message) });
                links = [deleteLink];
            }
            let sender = formatSender(message.sender_username, message.sender_name);
            let dateMessage = formatDate(message._kmd.lmt);
            messagesTable.append($('<tr>').append(
                $('<td>').text(sender),
                $('<td>').text(message.text),
                $('<td>').text(dateMessage),
                $('<td>').append(links)
            ));
        }

    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " +
            sessionStorage.getItem('authToken'),
        };
    }


    function createMessage(event) {
        event.preventDefault()
        let messageData = {
            sender_username: sessionStorage['username'],
            sender_name: sessionStorage['name'],
            recipient_username: $('#formSendMessage select[name=recipient]').val(),
            text: $('#formSendMessage input[name=text]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
            headers: getKinveyUserAuthHeaders(),
            data: messageData,
            success: createMessageSuccess,
            error: handleAjaxError
        });

        function createMessageSuccess(response) {
            listArchiveSent();
            showInfo('Message sent.');
        }

    }


    function deleteMessage(message) {
        $.ajax({
            method: "DELETE",
            url: kinveyMessageUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/messages/" + message._id,
            headers: getKinveyUserAuthHeaders(),
            success: deleteMessageSuccess,
            error: handleAjaxError
        });
        function deleteMessageSuccess(response) {
            listMyMessages();
            showInfo('Message deleted.');
        }


    }
}

