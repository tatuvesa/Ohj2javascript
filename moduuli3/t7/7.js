const trigger = document.querySelector('#trigger');
const img = document.querySelector('#target');

trigger.addEventListener('mouseenter', function() {
  img.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseleave', function() {
  img.src = 'img/picA.jpg';
});