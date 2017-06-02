function attachEvents(){
    const apiUrl = 'https://judgetests-kosyo.firebaseio.com/';
    let forecastContainer = $('#forecast');
    let currentWeatherContainer = $('#current');
    let upcomingWeatherContainer = $('#upcoming');
    
    $('#submit').on('click', getLocationCode);
    
    function getLocationCode(){
        let locationName = $('#location').val();
        if(locationName != ''){
            let getLocation = $.ajax({
                method:'GET',
                url: apiUrl + 'locations.json'
                });
            getLocation
                .then(function(data){
                    let locationCode = data.filter(e => e.name === locationName)[0].code;
                    //data.filter returns an array where 0-th elements is an object e.g. {"code":"ny", "name": "New York"}

                    if(locationCode){
                        getLocationForecast(locationCode);
                    }
                })
                .catch(displayError);
        }
    }

    function getLocationForecast(locationCode){
        let getTodayForecast = $.ajax({
            method: 'GET',
            url: apiUrl + 'forecast/today/' + locationCode + '.json'
        });

        let getUpcomingForecast = $.ajax({
            method: 'GET',
            url: apiUrl + 'forecast/upcoming/' + locationCode + '.json'
        })

        Promise.all([getTodayForecast, getUpcomingForecast])
            .then(function(data) {
                forecastContainer.attr('style', 'display:block');
                displayCurrentWeather(data);
                displayThreeDaysWeather(data);
            })
            .catch(displayError)
    };

    function displayCurrentWeather(data){
        let currentWeatherData = data[0];
        currentWeatherContainer.find('.label').nextAll().remove();
        currentWeatherContainer
            .append($('<span>')
                .addClass('condition symbol')
                .html(getIcon(currentWeatherData.forecast.condition)))
            .append($('<span>')
                .addClass('condition')
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(currentWeatherData.name))
                .append($('<span>')
                    .addClass('forecast-data')
                    .html(`${currentWeatherData.forecast.low}&#176/${currentWeatherData.forecast.high}&#176`))
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(currentWeatherData.forecast.condition)));
    }

    function displayThreeDaysWeather(data){
        let threeDaysWeatherData = data[1];
        //console.dir(data[1]);
        upcomingWeatherContainer.find('.label').nextAll().remove();
        for(let element of threeDaysWeatherData.forecast) {
            upcomingWeatherContainer
                .append($('<span>')
                    .addClass('upcoming')
                    .append($('<span>')
                        .addClass('symbol')
                        .html(getIcon(element.condition)))
                    .append($('<span>')
                        .addClass('forecast-data')
                        .html(`${element.low}&#176/${element.high}&#176`))
                    .append($('<span>')
                        .addClass('forecast-data')
                        .text(element.condition)));
        }

    }

    function getIcon(condition){
        return{
            'Sunny': '&#x2600;',
            'Partly sunny': '&#x26C5;',
            'Overcast': '&#x2601;',
            'Rain': '&#x2614;'
        }[condition];
    }


    function displayError(error){
        forecastContainer.attr('style', 'display:block');
        forecastContainer.text(error.statusText + ': ' + error.status)
    }
}