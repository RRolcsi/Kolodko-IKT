// Nyelvváltó gomb: magyar <-> angol
// A választott nyelvet elmentjük, így az oldalak között lapozva is megmarad.
var gomb = document.getElementById('lang-toggle');

function nyelvBeallit(angol) {
  document.documentElement.classList.toggle('en', angol);
  document.documentElement.lang = angol ? 'en' : 'hu';
  document.title = angol ? document.body.dataset.titleEn : document.body.dataset.titleHu;
  gomb.textContent = angol ? 'HU' : 'EN';
}

// Oldal betöltésekor: az elmentett nyelv visszaállítása
var mentett = null;
try { mentett = localStorage.getItem('nyelv'); } catch (e) {}
nyelvBeallit(mentett === 'en');

gomb.addEventListener('click', function () {
  var angol = !document.documentElement.classList.contains('en');
  nyelvBeallit(angol);
  try { localStorage.setItem('nyelv', angol ? 'en' : 'hu'); } catch (e) {}
});