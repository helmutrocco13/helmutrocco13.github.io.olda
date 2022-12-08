const game = document.querySelector("#gameiframe");
var link = localStorage.getItem("plink")
var plink = 'https://' + link

  console.log('start ' + plink + ' change');
  var site = plink + "/apps/apps.html#" + game.dataset.gamelink;
  game.setAttribute('id', 'riframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');

document.onkeyup = function(e) {
   if (e.ctrlKey && e.which == 66) {
    var site = "https://r2os.herokuapp.com/apps/apps.html#" + game.dataset.gamelink;
  game.src = site;
     
   }
}
