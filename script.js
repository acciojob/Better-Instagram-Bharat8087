() => {
    const draggable = Cypress.$("#drag3")[0]; // Pick up this
    const droppable = Cypress.$("#drag6")[0]; // Drop over this

    if (!draggable || !droppable) {
        throw new Error("Could not find draggable or droppable elements.");
    }

    const coords = droppable.getBoundingClientRect();

    if (!coords) {
        throw new Error("Could not get bounding client rect of droppable element.");
    }

    draggable.dispatchEvent(new MouseEvent("mousedown"));
    draggable.dispatchEvent(new MouseEvent("mousemove", { clientX: 10, clientY: 0 }));
    draggable.dispatchEvent(new MouseEvent("mousemove", { clientX: coords.x + 10, clientY: coords.y + 10 }));
    draggable.dispatchEvent(new MouseEvent("mouseup"));

    cy.get("#div6").within(() => {
        cy.get("img").should("have.length", 1);
    });
}
