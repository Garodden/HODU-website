document.querySelector('.subscribe-btn').addEventListener('click', function() {
  var popup = document.querySelector('.thank-you-popup');
  popup.style.display = 'flex';
});

document.querySelector('.love-you-btn').addEventListener('click', function() {
  var popup = document.querySelector('.thank-you-popup');
  popup.style.display = 'none';
});

