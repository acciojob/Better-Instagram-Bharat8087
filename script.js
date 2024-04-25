function handleDrop(event, ui) {
    var draggable = ui.draggable;
    var droppable = $(this);

    var parentContainer = droppable.parent();

    draggable.detach();
    draggable.appendTo(parentContainer);

    if (draggable.index() < droppable.index()) {
        droppable.after(draggable);
    } else {
        droppable.before(draggable);
    }

    draggable.draggable({
        revert: "invalid",
        helper: "clone"
    });

    draggable.droppable({
        accept: ".draggable",
        drop: handleDrop
    });
}

$(document).ready(function() {
    $(".draggable").draggable({
        revert: "invalid",
        helper: "clone"
    });

    $(".draggable").droppable({
        accept: ".draggable",
        drop: handleDrop
    });
});
