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

function handleDragEnter() {
  this.classList.add('over');
}

function handleDragLeave() {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl !== this) {
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
  draggables.forEach(function (draggable) {
    draggable.classList.remove('over');
  });
}

draggables.forEach(function (draggable) {
  draggable.addEventListener('dragstart', handleDragStart);
  draggable.addEventListener('dragenter', handleDragEnter);
  draggable.addEventListener('dragover', handleDragOver);
  draggable.addEventListener('dragleave', handleDragLeave);
  draggable.addEventListener('drop', handleDrop);
  draggable.addEventListener('dragend', handleDragEnd);
});
