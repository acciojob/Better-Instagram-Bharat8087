//your code here
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image');
  
  let draggedItem = null;

  for (const image of images) {
    image.addEventListener('dragstart', function() {
      draggedItem = image;
      setTimeout(() => {
        image.style.opacity = '0.5';
      }, 0);
    });

    image.addEventListener('dragend', function() {
      setTimeout(() => {
        image.style.opacity = '';
        draggedItem = null;
      }, 0);
    });

    image.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    image.addEventListener('dragenter', function(e) {
      e.preventDefault();
      this.style.border = '2px dashed #333';
    });

    image.addEventListener('dragleave', function() {
      this.style.border = '';
    });

    image.addEventListener('drop', function() {
      this.style.border = '';
      if (draggedItem !== null && draggedItem !== this) {
        const tempText = this.innerText;
        this.innerText = draggedItem.innerText;
        draggedItem.innerText = tempText;
      }
    });
  }
});
