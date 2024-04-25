$(document).ready(function() {
    $(".draggable").draggable({
        revert: "invalid",
        helper: "clone"
    });

    $(".draggable").droppable({
        accept: ".draggable",
        drop: function(event, ui) {
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
                drop: function(event, ui) {
                    var dragged = ui.draggable;
                    var droppedOn = $(this);

                    var parentContainer = droppedOn.parent();

                    dragged.detach();

                    dragged.appendTo(parentContainer);

                    if (dragged.index() < droppedOn.index()) {
                        droppedOn.after(dragged);
                    } else {
                        droppedOn.before(dragged);
                    }

                    dragged.draggable({
                        revert: "invalid",
                        helper: "clone"
                    });

                    dragged.droppable({
                        accept: ".draggable",
                        drop: function(event, ui) {
                        }
                    });
                }
            });
        }
    });
});
