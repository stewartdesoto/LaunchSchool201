$(function() {
  var key_code;

  function action() {
    $("#accordion").slideToggle();
  };

  function bind(char) {
    $(document).off("keypress").on("keypress", function(e) {
      console.log(e);
      console.log(e.which);
      console.log(key_code);
      if (e.which !== key_code) {
        return;
      }
      $("#anchor").trigger("click");
    });
  };

  $("#anchor").on("click", function(e) {
    e.preventDefault();
    action();
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
   var val = $("#getkey").find("input[type=text]").val();
   key_code = val.charCodeAt(0);
   bind(key);
  });
})

