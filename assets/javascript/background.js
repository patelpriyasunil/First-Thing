$(document).ready(function() {
    $(".dropup-menu").hide();
    $('link[href*="pikachu.css"]').prop('disabled', true);
    $('link[href*="star-wars.css"]').prop('disabled', true);
    $("#dropupB").on('click',function(event){  
        $('.dropup-menu').toggle();
        return false;
});
    $("#original").on("click", function(event){
        $('link[href*="pikachu.css"]').prop('disabled', true);
        $('link[href*="star-wars.css"]').prop('disabled', true);
        $('link[href*="style.css"]').prop('disabled', false);
    });
    $("#pikachu").on("click", function(event){
        $('link[href*="pikachu.css"]').prop('disabled', false);
        $('link[href*="star-wars.css"]').prop('disabled', true);
        $('link[href*="style.css"]').prop('disabled', true);
    });
    $("#star-wars").on("click", function(event){
        $('link[href*="pikachu.css"]').prop('disabled', true);
        $('link[href*="star-wars.css"]').prop('disabled', false);
        $('link[href*="style.css"]').prop('disabled', true);
    });
});