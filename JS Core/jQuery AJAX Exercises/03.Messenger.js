function attachEvents() {
    //let baseUrl = "https://ajaxdemos-kosyo.firebaseio.com/messenger/";
    let baseUrl = "https://ajaxdemos-bfee6.firebaseio.com/messenger/";

    $('#submit').on("click", function(){
        send();
    });

    $('#refresh').on("click", refresh);

    function refresh(){
        let getRequest = {
            method: "GET",
            url: baseUrl + ".json",
            success:result
        };
        $.ajax(getRequest);
    }

    function result(data){
        //console.dir(data)
        $('#messages').empty();
        let keys = Object.keys(data).sort((m1, m2) => data[m1].timestamp - data[m2].timestamp);
        // console.dir(messages)
        for(let key of keys){
            let msg = data[key];
            // console.log(msg);
            $('#messages').append(`${msg.author}: ${msg.content}\n`);
        }
    }

    function send(){
        let author = $('#author').val();
        let content = $('#content').val();
        if(author != '' && content != ''){
            let message = {
                author: $('#author').val(),
                content: $('#content').val(),
                timestamp: Date.now() // returns time in miliseconds starting from 1.01.1970, 00:00h ignoring leap years
            };

            let sendRequest = {
                method:"POST",
                url: baseUrl + ".json",
                data: JSON.stringify(message),
                success: refresh
            };
            $.ajax(sendRequest);
            $('#author').val('');
            $('#content').val('');
        }

    }
}