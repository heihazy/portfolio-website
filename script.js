$("document").ready(function() {
  $("body").prepend('<div class="sk-cube-grid"></div>');
  $(".site-wrap").addClass("hide");
  $(".sk-cube-grid")
    .append('<div class="sk-cube sk-cube1"></div>')
    .append('<div class="sk-cube sk-cube2"></div>')
    .append('<div class="sk-cube sk-cube3"></div>')
    .append('<div class="sk-cube sk-cube4"></div>')
    .append('<div class="sk-cube sk-cube5"></div>')
    .append('<div class="sk-cube sk-cube6"></div>')
    .append('<div class="sk-cube sk-cube7"></div>')
    .append('<div class="sk-cube sk-cube8"></div>')
    .append('<div class="sk-cube sk-cube9"></div>');
  setTimeout(function() {
    $(".sk-cube-grid").addClass("hide");
    $(".site-wrap").removeClass("hide");
  }, 1000);
});
