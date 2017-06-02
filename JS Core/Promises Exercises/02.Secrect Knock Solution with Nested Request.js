function solve(){
    let appId = "kid_BJXTsSi-e";
    let appSecret = "447b8e7046f048039d95610c1b039390";
    //Username:guest, Password:guest
    let token = "Basic " + btoa("guest:guest");
    let baseUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock";
    let requestUrl = baseUrl + "?query=Knock Knock.";

    console.log("Knock Knock.")

    let getRequest = $.ajax({
        method: 'GET',
        url: requestUrl,
        headers: {
            "Authorization":token,
            "Content-type": "application/json"
        },
        success: function(successData){
            console.log(successData.answer);
            console.log(successData.message);
            let requestURLSuccessData = baseUrl + '?query=' + successData.message;
            let getSuccessRequest = $.ajax({
                method: 'GET',
                url: requestURLSuccessData,
                headers:{
                    'Authorization':token,
                    'Content-type': 'application/json'
                },
                success: function(success2Data){
                    console.log(success2Data.answer);
                    console.log(success2Data.message);
                    let requestURLSuccess2Data = baseUrl + '?query=' + success2Data.message;
                    let getSuccess2Request = $.ajax({
                        method: 'GET',
                        url: requestURLSuccess2Data,
                        headers:{
                            'Authorization':token,
                            'Content-type': 'application.json'
                        },
                        success: function(success3Data){
                            console.log(success3Data.answer);
                        },
                        error: function(error3){
                            console.log(error3);
                        }
                    })
                },
                error: function(error2){
                    console.log(error2);
                }
            })
        },
        error: function(error){
            console.log(error);
        }
    });


    getRequest;
}

// console.log(solve())