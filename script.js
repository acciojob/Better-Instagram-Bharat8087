$(document).ready(function() {
    $(".draggable").draggable({
        revert: "invalid",
        helper: "clone"
    });

    $(".draggable").droppable({
        accept: ".draggable",
        drop: function(event, ui) {
            var draggableId = ui.draggable.attr("id");
            var droppableId = $(this).attr("id");

            var tempBackground = $("#" + draggableId).css("background-image");
            $("#" + draggableId).css("background-image", $("#" + droppableId).css("background-image"));
            $("#" + droppableId).css("background-image", tempBackground);
        }
    });
});
