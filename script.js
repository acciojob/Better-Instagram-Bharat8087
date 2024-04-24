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

      console.log("Droppable element id: " + droppableId);
      console.log("Draggable element id: " + draggableId);
      console.log("Draggable element background image before swap: " + draggableImage);
      console.log("Droppable element background image before swap: " + droppableImage);

      ui.draggable.css("background-image", droppableImage);
      $("#" + droppableId).css("background-image", draggableImage);

      console.log("Draggable element background image after swap: " + ui.draggable.css("background-image"));
      console.log("Droppable element background image after swap: " + $("#" + droppableId).css("background-image"));
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
    console.log("Draggable element is over droppable element");
  },
  out: function(event, ui) {
    currentDroppable = null;
    console.log("Draggable element is out of droppable element");
  },
  drop: function(event, ui) {
    if (currentDroppable) {
      var draggableId = ui.draggable.attr("id");
      var droppableId = currentDroppable.attr("id");
      var draggableImage = ui.draggable.css("background-image");
      var droppableImage = currentDroppable.css("background-image");

      console.log("Droppable element id: " + droppableId);
      console.log("Draggable element id: " + draggableId);
      console.log("Draggable element background image before swap: " + draggableImage);
      console.log("Droppable element background image before swap: " + droppableImage);

      ui.draggable.css("background-image", droppableImage);
      currentDroppable.css("background-image", draggableImage);

      console.log("Draggable element background image after swap: " + ui.draggable.css("background-image"));
      console.log("Droppable element background image after swap: " + currentDroppable.css("background-image"));
    }
  }
});
