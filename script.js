function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

document.addEventListener('DOMContentLoaded', function() {
  const draggables = document.querySelectorAll('.draggable');

  draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', function(event) {
      event.preventDefault();
    });
    draggable.addEventListener('drop', function(event) {
      event.preventDefault();
      const data = event.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(data);
      const dropZone = event.target;

      if (draggedElement !== dropZone) {
        const parent = draggedElement.parentNode;
        const nextSibling = draggedElement.nextSibling === dropZone ? draggedElement : draggedElement.nextSibling;
        parent.insertBefore(draggedElement, dropZone);
        parent.insertBefore(dropZone, nextSibling);
      }
    });
  });
});
