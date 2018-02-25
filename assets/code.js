$(document).ready(function () {

    var playerCard = $('.cardToMove');
    var start = false;
    $('#HealthSc');
    var wins = 0
    var losses = 0
    $('#wins').text(wins);
    $('#lost').text(losses);
   var sumHealthTroopers =  $('#TrooperHealthSc').text();
    $('#fight').hide();
    $("#win-image").hide()
    $("#lost-image").hide();
    
    function win() {
        wins++;
        $('#wins').text(wins);
        $("#win-image").show();
        $("#toHide").hide();

        reload();
    }
    function lost() {
        losses++;
        $('#lost').text(losses);
        $("#lost-image").show();
        $("#toHide").hide();
        reload();
    }
    function reload() {
        setInterval('window.location.reload()', 4000);
    }
   






    $('#toPickFrom .cardToMove').click(function () {
        console.log("i was clicked")
        if (start == false) {
            for (var i = 0; i < playerCard.length; i++) {
                if (playerCard[i] != this) {
                    $('#Troopers').append(playerCard[i]);
                    start = true;
                    $('#Troopers .card').click(function () {
                        if (playerCard[i] = this) {
                            console.log("second")
                            $('#backToMain').before(playerCard[i]);
                        }
                    });
                }
            }
        }
    });
    
    $('#Attack').click(function () {
        $('#fight').show();
        $('#Attack').hide();
        //Trooper

        var sumHealthTroopers = 0;
        var Trooper1 = parseInt($('#Troopers .card-body').first().find('.cardHealth').text());
        var Trooper2 = parseInt($('#Troopers .card-body').last().find('.cardHealth').text());
        sumHealthTroopers = Trooper1 + Trooper2;
        $('#TrooperHealthSc').text(sumHealthTroopers);

        var sumDMGTroopers = 0;
        var Trooper1dmg = parseInt($('#Troopers .card-body').first().find('.cardDMG').text());
        var Trooper2dmg = parseInt($('#Troopers .card-body').last().find('.cardDMG').text());
        sumDMGTroopers = Trooper1dmg + Trooper2dmg;
        $('#TrooperAttackSc').text(sumDMGTroopers);
        // player

        var sumHealthPlayer = 0;
        var Player1 = parseInt($('#toPickFrom .card-body').first().find('.cardHealth').text());
        var Player2 = parseInt($('#toPickFrom .card-body').last().find('.cardHealth').text());
        sumHealthPlayer = Player1 + Player2;
        $('#HealthSc').text(sumHealthPlayer);

        var sumDMGPlayer = 0;
        var Player1dmg = parseInt($('#toPickFrom .card-body').first().find('.cardDMG').text());
        var Player2dmg = parseInt($('#toPickFrom .card-body').last().find('.cardDMG').text());
        sumDMGPlayer = Player1dmg + Player2dmg;
        $('#AttackSc').text(sumDMGPlayer);

        $('#fight').click(function () {
            //    var sumHealthTroopers = $('#HealthScLeft').text();
            sumHealthPlayer = sumHealthPlayer - sumDMGTroopers
            sumHealthTroopers = sumHealthTroopers - sumDMGPlayer
            $('#HealthScLeft').text(sumHealthPlayer);
            $('#TrooperHealthScLeft').text(sumHealthTroopers);

            if (sumHealthTroopers <= 0) {
                console.log("inside health if ", sumHealthTroopers)
                win();
                
            }
            if (sumHealthPlayer <= 0) {
                console.log("inside health if ", sumHealthPlayer)
                lost();
               
            }

        })



    })

 

});

