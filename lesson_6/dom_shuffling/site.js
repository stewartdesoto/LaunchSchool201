$(function() {
  var $figures = $("figure");
  var $fig1 = $figures.eq(0);
  var $fig2 = $figures.eq(1);

  $("body > header").prependTo("body");
  $("main > h1").prependTo("body > header");
  $figures.appendTo("article");
  var $img1 = $figures.eq(0).find("img").remove();
  var $img2 = $figures.eq(1).find("img").remove();
  $img2.appendTo($fig1);
  $img1.appendTo($fig2);
  console.log($img1);
  console.log($img2);

});

