const draggables = document.querySelectorAll('.draggable');

let draggedItem = null;

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggedItem = draggable;
    setTimeout(() => {
      draggable.style.display = 'none';
    }, 0);
  });

  draggable.addEventListener('dragend', () => {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  draggable.addEventListener('dragover', e => {
    e.preventDefault();
  });

  draggable.addEventListener('dragenter', e => {
    e.preventDefault();
    if (draggedItem !== null && draggedItem !== draggable) {
      // Swap the background images
      const tempBackground = draggedItem.style.backgroundImage;
      draggedItem.style.backgroundImage = draggable.style.backgroundImage;
      draggable.style.backgroundImage = tempBackground;
    }
  });
});
