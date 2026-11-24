// Nyelvváltó gomb: magyar <-> angol
var gomb = document.getElementById('lang-toggle');

gomb.addEventListener('click', function () {
  var angol = document.body.classList.toggle('en');
  document.documentElement.lang = angol ? 'en' : 'hu';
  document.title = angol
    ? 'Mihály Kolodko – His Life and Work'
    : 'Kolodko Mihály – Élete és munkássága';
  gomb.textContent = angol ? 'HU' : 'EN';
});
