() => {
    cy.get("#drag3").should('exist').then(draggable => {
        cy.get("#drag6").should('exist').then(droppable => {
            const draggableRect = draggable[0].getBoundingClientRect();
            const droppableRect = droppable[0].getBoundingClientRect();

            if (!draggableRect || !droppableRect) {
                throw new Error("Could not get bounding client rect of draggable or droppable element.");
            }

            draggable[0].dispatchEvent(new MouseEvent("pointerdown", {
                clientX: draggableRect.x + draggableRect.width / 2,
                clientY: draggableRect.y + draggableRect.height / 2,
                force: true
            }));

            draggable[0].dispatchEvent(new MouseEvent("pointermove", {
                clientX: droppableRect.x + droppableRect.width / 2,
                clientY: droppableRect.y + droppableRect.height / 2,
                force: true
            }));

            draggable[0].dispatchEvent(new MouseEvent("pointerup", {
                force: true
            }));

            cy.get("#div6").within(() => {
                cy.get("img").should("have.length", 1);
            });
        });
    });
}

