// imitation of new page loading
window.onload = function() {
  $body = $('body'),
  $btn  = $('.btn');

  loader(10); // loads the first rotating circle

  $btn.on('click', function(){
    $body.removeClass().addClass('restart');
    loader( getRandomNumber(300, 3000) );
  });

  function loader(delay) {
    setTimeout(function(){
      $body.addClass('loading');
    }, delay);

    setTimeout(function(){
      $body.addClass('loaded');
    }, delay + 1700);

    setTimeout(function(){
      $body.removeClass('restart').addClass('new-page');
    }, delay + 1950);
  }

  function getRandomNumber(min, max) {
    window.open("index.html", "_self");
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}