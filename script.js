document.addEventListener('DOMContentLoaded', function() {
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
  e.preventDefault();
  e.stopPropagation();

  if (dragSrcEl !== this) {
    let srcImg = dragSrcEl.querySelector('img').src;
    let targetImg = this.querySelector('img').src;

    dragSrcEl.querySelector('img').src = targetImg;
    this.querySelector('img').src = srcImg;
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
});
