// FONT : http://goo.gl/D3Mn9

// BUTTONS
$('.button').on('click',function(){
  $('.button span').fadeToggle(500);
}).stop();
$('.close').on('click',function(){
  $('.share-close').delay(500).fadeOut(500);
  $('.share-open').delay(500).fadeIn(500);
}).stop();
$('.share span').on('click',function(){
  $('.share span').delay(500).fadeToggle(500);
}).stop();
// OPEN
$('.open').on('click',function(){
  $('.home').animate({top:'-14rem',
                      opacity:'1'},500);
    $('.home').animate({top:'-10rem'},500);
  $('.share').delay(300).animate({top:'-12rem',
                                  right:'-12rem',
                                  opacity:'1'},500);
    $('.share').animate({top:'-8rem',
                         right:'-8rem'},500);
  $('.news').delay(600).animate({right:'-14rem',
                                 opacity:'1'},500);
    $('.news').animate({right:'-10rem'},500);
  $('.twitter').delay(900).animate({right:'-12rem',
                                    bottom:'-12rem',
                                    opacity:'1'},500);
    $('.twitter').animate({right:'-8rem',
                           bottom:'-8rem'},500);
  $('.mail').delay(1200).animate({bottom:'-14rem',
                                  opacity:'1'},500);
    $('.mail').animate({bottom:'-10rem'},500);
  $('.facebook').delay(1500).animate({left:'-12rem',
                                      bottom:'-12rem',
                                      opacity:'1'},500);
    $('.facebook').animate({left:'-8rem',
                            bottom:'-8rem'},500);
  $('.about').delay(1800).animate({left:'-14rem',
                                   opacity:'1'},500);
    $('.about').animate({left:'-10rem'},500);
  $('.map').delay(2100).animate({top:'-12rem',
                                 left:'-12rem',
                                 opacity:'1'},500);
    $('.map').animate({top:'-8rem',
                       left:'-8rem'},500);
}).stop();
// OPEN - SHARE
$('.share-open').on('click',function(){
  $('.share-facebook').animate({top:'-6rem',
                                opacity:'1'},500);
  $('.share-twitter').animate({top:'-4rem',
                               right:'-4rem',
                               opacity:'1'},500);
  $('.share-mail').animate({right:'-6rem',
                            opacity:'1'},500);
}).stop();
// CLOSE
$('.close').on('click',function(){
  $('.home').delay(2100).animate({top:'-12rem'},500);
    $('.home').animate({top:'',
                        opacity:''},500);
  $('.share').delay(1800).animate({top:'-10rem',
                                   right:'-10rem'},500);
    $('.share').animate({top:'',
                         right:'',
                         opacity:''},500);
  $('.news').delay(1500).animate({right:'-12rem'},500);
    $('.news').animate({right:'',
                        opacity:''},500);
  $('.twitter').delay(1200).animate({right:'-10rem',
                                     bottom:'-10rem'},500);
    $('.twitter').animate({right:'',
                           bottom:'',
                           opacity:''},500);
  $('.mail').delay(900).animate({bottom:'-12rem'},500);
    $('.mail').animate({bottom:'',
                        opacity:''},500);
  $('.facebook').delay(600).animate({left:'-10rem',
                                     bottom:'-10rem'},500);
    $('.facebook').animate({left:'',
                            bottom:'',
                            opacity:''},500);
  $('.about').delay(300).animate({left:'-12rem'},500);
    $('.about').animate({left:'',
                         opacity:''},500);
  $('.map').animate({top:'-10rem',
                     left:'-10rem'},500);
    $('.map').animate({top:'',
                       left:'',
                       opacity:''},500);
}).stop();
// CLOSE - SHARE
$('.close, .share-close').on('click',function(){
  $('.share-facebook').animate({top:'',
                                opacity:''},500);
  $('.share-twitter').animate({top:'',
                               right:'',
                               opacity:''},500);
  $('.share-mail').animate({right:'',
                            opacity:''},500);
}).stop();