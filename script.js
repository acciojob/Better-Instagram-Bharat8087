const draggables = document.querySelectorAll('.draggable');
let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.setData('text/plain', this.id);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl !== this) {
    const srcBackground = dragSrcEl.style.backgroundImage;
    const targetBackground = this.style.backgroundImage;

    dragSrcEl.style.backgroundImage = targetBackground;
    this.style.backgroundImage = srcBackground;
  }

  return false;
}

function handleDragEnd() {
  draggables.forEach(function (draggable) {
    draggable.classList.remove('over');
  });
}

draggables.forEach(function (draggable) {
  draggable.addEventListener('dragstart', handleDragStart);
  draggable.addEventListener('dragover', handleDragOver);
  draggable.addEventListener('drop', handleDrop);
  draggable.addEventListener('dragend', handleDragEnd);
});
