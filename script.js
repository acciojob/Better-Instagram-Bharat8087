describe("Draggable and Droppable Test", () => {
  beforeEach(() => {
    cy.visit("your_website_url");
  });

  it("Should have 6 draggable elements", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#drag${index}`).should("have.length", 1);
    }
  });

  it("Should be able to drag elements", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#drag${index}`).trigger("mousedown", { which: 1 });
      cy.get(`#drag${index}`).trigger("mousemove", { clientX: 500, clientY: 600 });
      cy.get(`#drag${index}`).trigger("mouseup");
    }
  });

  it("Should swap background images on drop", () => {
    cy.get("#drag1").trigger("mousedown", { which: 1 });
    cy.get("#drag2").trigger("mousemove", { clientX: 500, clientY: 600 });
    cy.get("#drag2").trigger("mouseup");

    cy.get("#drag1").should("have.css", "background-image", "url('https://picsum.photos/seed/picsum/200/300')");
    cy.get("#drag2").should("have.css", "background-image", "url('https://picsum.photos/id/237/200/300')");
  });

  it("Should visually indicate draggable elements", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#drag${index}`).should("have.css", "cursor", "move");
    }
  });

  it("Should accept draggable elements as drop targets", () => {
    cy.get("#drag1").trigger("mousedown", { which: 1 });
    cy.get("#drag2").trigger("mousemove", { clientX: 500, clientY: 600 });
    cy.get("#drag2").trigger("mouseup");

    cy.get("#drag1").should("have.css", "background-image", "url('https://picsum.photos/seed/picsum/200/300')");
    cy.get("#drag2").should("have.css", "background-image", "url('https://picsum.photos/id/237/200/300')");
  });
});
