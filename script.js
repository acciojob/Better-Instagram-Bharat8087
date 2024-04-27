const draggables = document.querySelectorAll('#div1, #div2, #div3, #div4, #div5, #div6');
let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.setData('text/plain', this.style.backgroundImage);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
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
    let srcBackground = dragSrcEl.style.backgroundImage;
    let targetBackground = this.style.backgroundImage;

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
