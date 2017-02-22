function togglePanel(a, b) {
  document.getElementsByClassName(a)[0].classList.toggle('visible');
  document.getElementsByClassName(b)[0].classList.remove('visible');
}

function scrollToTop() {
  document.getElementsByClassName('hatena-module-recent-entries')[0].classList.remove('visible');
  document.getElementsByClassName('hatena-module-category')[0].classList.remove('visible');
  y = window.pageYOffset;
  setTimeout(function(){
    if (y >= 0){
      y = y - y / 20 - 1;
      window.scrollTo(0, y);
      setTimeout(arguments.callee, 10);
    }else{
      window.scrollTo(0, 0);
    }
  }, 10);
}

(function(){
  var checkRef = 0,
    nowLoc = window.location.href,
    thisHost = location.hostname,
    thisRef = document.referrer;
  if (thisRef.indexOf(thisHost) !== -1) checkRef = 1;
  if (thisRef === 'http://' + thisHost + '/') checkRef = 2;
  if (checkRef !== 0) {
    var prev = document.getElementsByClassName('nav-prev')[0];
    prev.classList.remove('nav-none');
    prev.addEventListener('click', function(){history.back()}, false);
  }
  if (checkRef === 0 && nowLoc === 'http://' + thisHost + '/') checkRef = 2;
  var pagerNext = document.getElementsByClassName('pager-next')[0];
  if (checkRef !== 0 && pagerNext !== undefined) {
    var next = document.getElementsByClassName('nav-next')[0];
    next.classList.remove('nav-none');
    next.setAttribute('href', pagerNext.getElementsByTagName('a')[0]);
  }
  document.getElementsByClassName('nav-recent')[0].addEventListener('click', function(){togglePanel('hatena-module-recent-entries', 'hatena-module-category')}, false);
  document.getElementsByClassName('nav-category')[0].addEventListener('click', function(){togglePanel('hatena-module-category', 'hatena-module-recent-entries')}, false);
  document.getElementsByClassName('nav-top')[0].addEventListener('click', scrollToTop, false);
  document.getElementsByClassName('hatena-module-category')[0].style.height = document.getElementsByClassName('hatena-module-category')[0].clientHeight + 'px';
  document.getElementsByClassName('hatena-module-recent-entries')[0].style.height = document.getElementsByClassName('hatena-module-recent-entries')[0].clientHeight + 'px';
})();
