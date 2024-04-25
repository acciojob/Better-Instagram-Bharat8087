$(document).ready(function() {
    $("#div1, #div2, #div3, #div4, #div5, #div6").draggable({
        revert: "invalid",
        helper: "clone",
        zIndex: 100
    });

    $("#div1, #div2, #div3, #div4, #div5, #div6").droppable({
        accept: ".draggable",
        drop: function(event, ui) {
            var draggable = ui.draggable;
            var droppable = $(this);

            var tempBackground = draggable.css("background-image");
            draggable.css("background-image", droppable.css("background-image"));
            droppable.css("background-image", tempBackground);
        }
    });
});
