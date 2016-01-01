$(function() {

  
  $("#thumbnails ul").on("click", "a", function(e) {
    e.preventDefault();
    var $thumb = $(e.currentTarget);
    var $large_img = $("#large img");
    var $new_large_img = $thumb.parents("li").find(".full");
    var $new_large_img_src = $new_large_img.attr('src');
    $("#large img").attr("src",$new_large_img_src);

  });
});