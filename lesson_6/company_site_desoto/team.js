$(function() {
  $("a").on("click", function(e) {
    e.preventDefault();

    $modal = $(e.target).parents("li").find("div");
    console.log($modal);
    $modal.show();
  });
});