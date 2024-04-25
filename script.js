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

            var tempSrc = draggable.attr("src");
            draggable.attr("src", droppable.attr("src"));
            droppable.attr("src", tempSrc);
        }
    });
});
