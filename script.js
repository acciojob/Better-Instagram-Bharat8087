describe("Draggable and Droppable Test", () => {
  beforeEach(() => {
    cy.visit("https://your_actual_website_url");
  });

  it("Should have 6 draggable elements", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#drag${index}`).should("exist");
    }
  });

  it("Should be able to drag elements", () => {
    const draggable = Cypress.$("#drag3")[0];
    const droppable = Cypress.$("#drag6")[0];
    const coords = droppable.getBoundingClientRect();

    cy.wrap(draggable).trigger("mousedown", { which: 1 });
    cy.document().trigger("mousemove", { clientX: 10, clientY: 0 });
    cy.document().trigger("mousemove", { clientX: coords.x + 10, clientY: coords.y + 10 });
    cy.document().trigger("mouseup");

    cy.get("#div6").within(() => {
      cy.get("img").should("have.length", 1);
    });
  });

  it("Should swap background images on drop", () => {
    cy.get("#drag1").trigger("mousedown", { which: 1 });
    cy.get("#drag2").trigger("mousemove", { clientX: 500, clientY: 600 });
    cy.get("#drag2").trigger("mouseup");

    cy.get("#drag1").should("have.css", "background-image", "url('https://correct_url_for_image1')");
    cy.get("#drag2").should("have.css", "background-image", "url('https://correct_url_for_image2')");
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

    cy.get("#drag1").should("have.css", "background-image", "url('https://correct_url_for_image1')");
    cy.get("#drag2").should("have.css", "background-image", "url('https://correct_url_for_image2')");
  });
});

