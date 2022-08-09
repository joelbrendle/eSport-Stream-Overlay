
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
        var game_nr = prompt("Enter right team name");

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
});