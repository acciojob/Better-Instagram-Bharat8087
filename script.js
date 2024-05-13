document.addEventListener('DOMContentLoaded', function () {
  const divs = document.querySelectorAll('.draggable');

  let draggedItem = null;

  divs.forEach(div => {
    div.addEventListener('dragstart', function () {
      draggedItem = this;
      setTimeout(() => {
        this.style.display = 'none';
      }, 0);
    });

    div.addEventListener('dragend', function () {
      setTimeout(() => {
        draggedItem.style.display = 'block';
        draggedItem = null;
      }, 0);
    });

    div.addEventListener('dragover', function (e) {
      e.preventDefault();
    });

    div.addEventListener('dragenter', function (e) {
      e.preventDefault();
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    });

    div.addEventListener('dragleave', function () {
      this.style.backgroundColor = '';
    });

    div.addEventListener('drop', function () {
      this.style.backgroundColor = '';
      if (draggedItem !== null) {
        const tempBackground = this.style.backgroundImage;
        this.style.backgroundImage = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = tempBackground;
      }
    });
  });
});
