  $(function() {
    $(".draggable").draggable({
      revert: "invalid",
      stack: ".draggable"
    });
    $(".container").droppable({
      accept: ".draggable",
      drop: function(event, ui) {
        var draggableId = ui.draggable.attr("id");
        var droppableId = $(this).find(".ui-droppable-active").attr("id");
        var draggableImage = ui.draggable.css("background-image");
        var droppableImage = $("#" + droppableId).css("background-image");

        ui.draggable.css("background-image", droppableImage);
        $("#" + droppableId).css("background-image", draggableImage);
      }
    });
  });
let currentDroppable = null;

$(".draggable").draggable({
  revert: "invalid",
  stack: ".draggable"
});

$(".draggable").droppable({
  over: function(event, ui) {
    currentDroppable = $(this);
  },
  out: function(event, ui) {
    currentDroppable = null;
  },
  drop: function(event, ui) {
    if (currentDroppable) {
      var draggableId = ui.draggable.attr("id");
      var droppableId = currentDroppable.attr("id");
      var draggableImage = ui.draggable.css("background-image");
      var droppableImage = currentDroppable.css("background-image");

      ui.draggable.css("background-image", droppableImage);
      currentDroppable.css("background-image", draggableImage);
    }
  }
});

