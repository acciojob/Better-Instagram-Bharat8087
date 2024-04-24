$(function() {
  $(".draggable").draggable({
    revert: "invalid",
    stack: ".draggable"
  });

  $(".container").droppable({
    accept: ".draggable",
    drop: function(event, ui) {
      var draggableId = ui.draggable.attr("id");
      var droppableId = $(this).attr("id"); // Simplified to use the droppable container's ID directly
      var draggableImage = ui.draggable.css("background-image");
      var droppableImage = $(this).css("background-image"); // Simplified to use $(this)

      console.log("Droppable element id: " + droppableId);
      console.log("Draggable element id: " + draggableId);
      console.log("Draggable element background image before swap: " + draggableImage);
      console.log("Droppable element background image before swap: " + droppableImage);

      ui.draggable.css("background-image", droppableImage);
      $(this).css("background-image", draggableImage); // Simplified to use $(this)

      console.log("Draggable element background image after swap: " + ui.draggable.css("background-image"));
      console.log("Droppable element background image after swap: " + $(this).css("background-image")); // Simplified to use $(this)
    }
  });

  let currentDroppable = null;

  $(".draggable").draggable({
    revert: "invalid",
    stack: ".draggable",
    over: function(event, ui) {
      currentDroppable = $(this);
      console.log("Draggable element is over droppable element");
    },
    out: function(event, ui) {
      currentDroppable = null;
      console.log("Draggable element is out of droppable element");
    }
  });

  $(".draggable").droppable({
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
});

it('should verify existence of draggable elements', () => {
  for (let index = 1; index <= 6; index++) {
    cy.get(`#drag${index}`).should("have.length", 1);
  }
});

