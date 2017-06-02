function solve(){
    const appId = "kid_BJXTsSi-e";
    const appDataUrl = "https://baas.kinvey.com/appdata/" + appId + "/knock";
    const appLoginUrl = "https://baas.kinvey.com/user/" + appId + "/login";
    const username = 'guest';
    const password = 'guest';
    const token = 'Basic ' + btoa(username + ':' + password);

    let message = 'Knock Knock.';
    let authToken;

    let loginRequest = $.ajax({
        method: 'POST',
        url: appLoginUrl,
        headers:{
            Authorization:token
        },
        data:{
            'username':username,
            'password':password
        }
    });
    (loginRequest)
        .then(function(data){
            authToken = data._kmd.authtoken;
            processRequests();
        })
        .catch(renderError);

    function processRequests(){
        if(message != ''){
            let dataGetRequest = $.ajax({
                method:'GET',
                url: appDataUrl + '?query=' + message,
                headers:{
                    Authorization: 'Kinvey ' + authToken
                }
            });
            (dataGetRequest)
                .then(function(data){
                    console.log(data);
                    renderMessage(message);
                    message = data.message || '';
                    renderMessage(data.answer)

                    processRequests();
                })
                .catch(renderError);
        }
    };

    function renderMessage(message){
        let li = $('<li>').text(message);
        $('#result').append(li);
    }

    function renderError(error){
        console.log(error);
    }
}
