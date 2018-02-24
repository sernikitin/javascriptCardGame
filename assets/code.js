$(document).ready(function () {

    var playerCard = $('.cardToMove');
    var start = false;
    $('#HealthSc');

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

    //  var TrooperHealth = $('#Troopers .cardHealth')
    //  var TrooperDMG =  $('#Troopers .cardDMG')
    //  var PlayerHealth = $('#toPickFrom .cardHealth')
    //  var PlayerDMG =  $('#toPickFrom .cardDMG')
    //  var TeamHealth;
    $('#Attack').click(function () {
        // var TrooperHealth = $('#Troopers .cardHealth').text();
        // var TrooperDMG = $('#Troopers .cardDMG').text();
        // var PlayerHealth = $('#toPickFrom .cardHealth').text();
        // var PlayerDMG = $('#toPickFrom .cardDMG').text();
        // var TeamHealth;
        // var team1 = [TrooperHealth,];

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
        //var team2
        console.log("Total Troopers Health", sumHealthTroopers);
        console.log("Total Player Health", sumHealthPlayer);
        console.log("Total Troopers Health", sumDMGTroopers);
        console.log("Total Player Health", sumDMGPlayer);

        $('#fight').click(function () {
            console.log("i was clicked fight")
            //    var sumHealthTroopers = $('#HealthScLeft').text();
            sumHealthPlayer = sumHealthPlayer - sumDMGTroopers
            sumHealthTroopers = sumHealthTroopers - sumDMGPlayer
            $('#HealthScLeft').text(sumHealthTroopers);
            $('#TrooperHealthScLeft').text(sumHealthPlayer);
            console.log(sumHealthTroopers)
        })



    })




});

