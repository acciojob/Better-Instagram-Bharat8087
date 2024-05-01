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
