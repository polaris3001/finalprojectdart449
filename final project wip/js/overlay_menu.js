const trig = document.querySelector('.menu');
const closer = document.querySelector('#close');

trig.addEventListener('click', openNav);
closer.addEventListener('click', closeNav);

function openNav() {
  document.querySelector('.overlay').style.width = '70%';

 // document.getElementById("myNav").style.opacity = "1";
}

function closeNav() {
  document.querySelector('.overlay').style.width = "0";
  // document.getElementById("myNav").style.opacity = "0";
}
