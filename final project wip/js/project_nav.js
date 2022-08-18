let currentPage = 0;
const body = document.querySelector('body');


document.addEventListener("DOMContentLoaded", function() {
  currentPage = body.getElementById('body');
  console.log(currentPage);

  if (currentPage === 1) {
    body.classList.toggle('blue');
  }
});
