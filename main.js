cost TypeWriter = function(txtElement, words, wait = 2000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  // Current index of words
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if deleting
  if(this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt"></span>`;

  setTimeout(() => this.type(), 500)
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init Typewriter
  new TypeWriter(txtElement, words, wait);
}
