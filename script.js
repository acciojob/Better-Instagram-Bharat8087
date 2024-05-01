const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

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

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave() {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl !== this && this.classList.contains('draggable')) {
    let srcId = dragSrcEl.id;
    let targetId = this.id;

    let srcBackground = dragSrcEl.style.backgroundImage;
    let targetBackground = this.style.backgroundImage;

    dragSrcEl.id = targetId;
    this.id = srcId;

    dragSrcEl.style.backgroundImage = targetBackground;
    this.style.backgroundImage = srcBackground;
  }

  return false;
}

function handleDragEnd() {
  containers.forEach(container => {
    container.classList.remove('over');
  });
}

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', handleDragStart);
  draggable.addEventListener('dragend', handleDragEnd);
});

containers.forEach(container => {
  container.addEventListener('dragover', handleDragOver);
  container.addEventListener('dragenter', handleDragEnter);
  container.addEventListener('dragleave', handleDragLeave);
  container.addEventListener('drop', handleDrop);
});
