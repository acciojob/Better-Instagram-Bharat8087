//your code here
/*document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image');
  
  let draggedItem = null;

  for (const image of images) {
    image.addEventListener('dragstart', function() {
      draggedItem = image;
      setTimeout(() => {
        image.style.opacity = '0.5';
      }, 0);
    });

    image.addEventListener('dragend', function() {
      setTimeout(() => {
        image.style.opacity = '';
        draggedItem = null;
      }, 0);
    });

    image.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    image.addEventListener('dragenter', function(e) {
      e.preventDefault();
      this.style.border = '2px dashed #333';
    });

    image.addEventListener('dragleave', function() {
      this.style.border = '';
    });

   /* image.addEventListener('drop', function() {
      this.style.border = '';
      if (draggedItem !== null && draggedItem !== this) {
        const tempText = this.innerText;
        this.innerText = draggedItem.innerText;
        draggedItem.innerText = tempText;
      }
    });*/
	/*  image.addEventListener('drop', function() {
  this.style.border = '';
  if (draggedItem !== null && draggedItem !== this) {
    const tempBackgroundImage = this.style.backgroundImage;
    this.style.backgroundImage = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = tempBackgroundImage;
  }
});*/

 /* }
});*/
/*$(document).ready(function() {
  $(".draggable").draggable({
    revert: "invalid",
    zIndex: 1000,
    containment: ".container",
    start: function() {
      $(this).addClass("selected");
    },
    stop: function() {
      $(this).removeClass("selected");
    }
  });
	describe("Draggable and Droppable Test", () => {
  beforeEach(() => {
    cy.visit("your_website_url");
  });

  it("Should have 6 draggable elements", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#div${index}`).should("have.length", 1);
    }
  });

});


  $(".draggable").droppable({
    accept: ".draggable",
    drop: function(event, ui) {
      var draggableId = ui.draggable.attr("id");
      var droppableId = $(this).attr("id");
      var draggableBg = ui.draggable.css("background-image");
      var droppableBg = $(this).css("background-image");

      ui.draggable.css("background-image", droppableBg);
      $(this).css("background-image", draggableBg);
    }
  });
});*/

describe("Draggable and Droppable Test", () => {
  beforeEach(() => {
    cy.visit("your_website_url");
  });

  it("Should have 6 draggable elements", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#div${index}`).should("have.length", 1);
    }
  });

  it("Should be able to drag elements", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#div${index}`).trigger("mousedown", { which: 1 });
      cy.get(`#div${index}`).trigger("mousemove", { clientX: 500, clientY: 600 });
      cy.get(`#div${index}`).trigger("mouseup");
    }
  });

  it("Should swap background images on drop", () => {
    // Assuming you have two draggable elements div1 and div2
    cy.get("#div1").trigger("mousedown", { which: 1 });
    cy.get("#div2").trigger("mousemove", { clientX: 500, clientY: 600 });
    cy.get("#div2").trigger("mouseup");

    cy.get("#div1").should("have.css", "background-image", "url('https://picsum.photos/seed/picsum/200/300')");
    cy.get("#div2").should("have.css", "background-image", "url('https://picsum.photos/id/237/200/300')");
  });

});

