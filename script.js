const draggables = document.querySelectorAll('.draggable');

let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
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
    e.stopPropagation(); // stops the browser from redirecting.
  }

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
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
