
$(document).ready(function(){
    // change left team name
    $("#left_team_bg, #left_team_text").click(function(){
        // promt left team name
        var left_team_name = prompt("Enter left team name");

        if(left_team_name != null){
            // change left team name
            $("#left_team_text").text(left_team_name);
            $("#left_team_bg").text(left_team_name);
        }

    });

    // change right team name
    $("#right_team_bg, #right_team_text").click(function(){
        // promt right team name
        var right_team_name = prompt("Enter right team name");

        if(right_team_name != null){
            // change left team name
            $("#right_team_text").text(right_team_name);
            $("#right_team_bg").text(right_team_name);
        }

    });

    // change game nr
    $("#bestof_text.left, #bestof_bg.left").click(function(){
        // promt game nr
        var game_nr = prompt("Enter Game number");

        if(game_nr != null){
            // change game nr
            $("#bestof_text.left").text('GAME ' + game_nr);
            $("#bestof_bg.left").text('GAME ' + game_nr);
        }

    });

    // change bestof
    $("#bestof_text.right, #bestof_bg.right").click(function(){
        // promt bestof
        var bestof = prompt("Enter bestof");

        if(bestof != null){
            // change left team name
            $("#bestof_text.right").text('- ' + bestof);
            $("#bestof_bg.right").text('- ' + bestof);
        }

    });

    // change points left
    $("#points_left").click(function(){
        // promt points left
        var pleft = prompt("1, 2, 3 or 4");

        if (pleft != null) {

            // remove call classes
            $("#lmpoint1").removeClass('la');
            $("#lmpoint2").removeClass('la');
            $("#lmpoint3").removeClass('la');
            $("#lmpoint4").removeClass('la');

            // add class to points left
            if (pleft == 1) {
                $("#lmpoint1").addClass('la');
            } else if (pleft == 2) {
                $("#lmpoint1").addClass('la');
                $("#lmpoint2").addClass('la');
            } else if (pleft == 3) {
                $("#lmpoint1").addClass('la');
                $("#lmpoint2").addClass('la');
                $("#lmpoint3").addClass('la');
            } else if (pleft == 4) {
                $("#lmpoint1").addClass('la');
                $("#lmpoint2").addClass('la');
                $("#lmpoint3").addClass('la');
                $("#lmpoint4").addClass('la');
            }
        }

    });

    // change points right
    $("#points_right").click(function(){
        // promt points right
        var pright = prompt("1, 2, 3 or 4");

        if (pright != null) {

            // remove call classes
            $("#rmpoint1").removeClass('ra');
            $("#rmpoint2").removeClass('ra');
            $("#rmpoint3").removeClass('ra');
            $("#rmpoint4").removeClass('rxa');

            // add class to points right
            if (pright == 1) {
                $("#rmpoint1").addClass('ra');
            } else if (pright == 2) {
                $("#rmpoint1").addClass('ra');
                $("#rmpoint2").addClass('ra');
            } else if (pright == 3) {
                $("#rmpoint1").addClass('ra');
                $("#rmpoint2").addClass('ra');
                $("#rmpoint3").addClass('ra');
            } else if (pright == 4) {
                $("#rmpoint1").addClass('ra');
                $("#rmpoint2").addClass('ra');
                $("#rmpoint3").addClass('ra');
                $("#rmpoint4").addClass('ra');
            }
        }

    });
});