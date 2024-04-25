() => {
    const draggable = Cypress.$("#drag3")[0]; // Pick up this
    const droppable = Cypress.$("#drag6")[0]; // Drop over this
    const draggableRect = draggable.getBoundingClientRect();
    const droppableRect = droppable.getBoundingClientRect();

    draggable.dispatchEvent(new MouseEvent("pointerdown", {
        clientX: draggableRect.x + draggableRect.width / 2,
        clientY: draggableRect.y + draggableRect.height / 2,
        force: true
    }));

    draggable.dispatchEvent(new MouseEvent("pointermove", {
        clientX: droppableRect.x + droppableRect.width / 2,
        clientY: droppableRect.y + droppableRect.height / 2,
        force: true
    }));

    draggable.dispatchEvent(new MouseEvent("pointerup", {
        force: true
    }));

    cy.get("#div6").within(() => {
        cy.get("img").should("have.length", 1);
    });
}
