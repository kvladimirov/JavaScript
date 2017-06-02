function attachEvents() {
    const base64 = btoa('peter:1234');
    const authHeaders = {"Authorization": "Basic " + base64, "Content-Type": "application/json"};

    getPlayers();
    let player = new Player();
    let currentPlayerID;

    function displayError(err) {
        console.log(err.status + ' : ' + err.statusText);
    }

    function displayPlayers(data) {
        $('#players').empty();
        for (let player of data) {
            let html = `<div class="player" data-id="${player._id}">
            <div class="row">
                <label>Name:</label>
                <label class="name">${player.name}</label>
            </div>
            <div class="row">
                <label>Money:</label>
                <label class="money">${player.money}</label>
            </div>
            <div class="row">
                <label>Bullets:</label>
                <label class="bullets">${player.bullets}</label>
            </div>
            <button class="play">Play</button>
            <button class="delete">Delete</button>
        </div>`;
            $('#players').append(html);
        }
    }

    function getPlayers() {
        $.ajax({
            method: "GET",
            url: 'https://baas.kinvey.com/appdata/kid_BkMIC7wH/players',
            headers: authHeaders
        }).then(displayPlayers).then(attachButtons).then(attachGameButtons).catch(displayError);
    }


    function attachButtons() {

        /**
         * Play Button pressed
         */
        $('.play').on('click', function () {
            let playerID = $(this).parent().attr('data-id');
            currentPlayerID = playerID;
            let playerName = $(this).parent().find('.name');
            let playerMoney = $(this).parent().find('.money');
            let playerBullets = $(this).parent().find('.bullets');
            player.name = playerName[0].innerText;
            player.money = Number(playerMoney[0].innerText);
            player.bullets = Number(playerBullets[0].innerText);

            $('canvas').css('display', 'block');
            $('#buttons #save').css('display', 'inline-block');
            $('#buttons #reload').css('display', 'inline-block');

            loadCanvas(player);
        });

        /**
         * Delete Button pressed
         */
        $('.delete').on('click', function () {
            let playerID = $(this).parent().attr('data-id');
            $.ajax({
                method: "DELETE",
                url: 'https://baas.kinvey.com/appdata/kid_BkMIC7wH/players/' + playerID,
                headers: authHeaders
            }).then(getPlayers).catch(displayError);
        });

        /**
         * Add Player Button pressed
         */
        $('#addPlayer').on('click', function () {

            let newPlayerName = $('#addName').val();
            $.ajax({
                method: "POST",
                url: "https://baas.kinvey.com/appdata/kid_BkMIC7wH/players",
                headers: authHeaders,
                data: JSON.stringify({
                    name: newPlayerName,
                    money: 500,
                    bullets: 6
                })
            }).then(function () {
                location.reload();
            }).catch(displayError);
        })
    }

    function attachGameButtons() {
        /**
         * Reload your weapon
         */

        $('#reload').on('click', function () {
            clearInterval(canvas.intervalId);
            player.money -= 60;
            player.bullets = 6;
            $('canvas').unbind('click');
            loadCanvas(player);

        });

        /**
         * Save your current score
         */

        $('#save').on('click', function () {
            $('#buttons #save').css('display', 'none');
            $('#buttons #reload').css('display', 'none');
            $.ajax({
                method: "PUT",
                url: 'https://baas.kinvey.com/appdata/kid_BkMIC7wH/players/' + currentPlayerID,
                headers: authHeaders,
                data: JSON.stringify({
                    name: player.name,
                    bullets: player.bullets,
                    money: player.money
                })
            }).then().catch(displayError);
            clearInterval(canvas.intervalId);
            $('canvas').unbind('click');

        });
    }

}

class Player {
    constructor(name, money, bullets) {
        this.name = name;
        this.bullets = bullets;
        this.money = money;
    }
}