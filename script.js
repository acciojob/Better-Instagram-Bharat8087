$(document).ready(function() {
    $(".draggable").draggable({
        revert: "invalid",
        helper: "clone",
        zIndex: 100
    });

    $(".draggable").droppable({
        accept: ".draggable",
        drop: function(event, ui) {
            var draggable = ui.draggable;
            var droppable = $(this);

            var tempImage = draggable.css("background-image");
            draggable.css("background-image", droppable.css("background-image"));
            droppable.css("background-image", tempImage);
        }
    });
});
