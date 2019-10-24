$(document).ready(function(){
  $("button#start").click(function(event){
    var a = parseInt($("input.first").val());
    var b = parseInt($("input.second").val());
    var c = parseInt($("input.third").val());
    console.log(a, b, c);
    if (a <= 0 || b <= 0 || c <= 0) {
      $("#answer").show().text("NOT A TRIANGLE!!!!");
    } else if (a === b && b === c) {
      $("#answer").show().text("You have an Equilateral triangle");
    }else if (a === b || a === c || b === c) {
      $("#answer").show().text("You have an Isosceles triangle");
    } else if (a != b && a != c && c != b) {
      $("#answer").show().text("You have an scalene triangle");
    } else {
      $("#answer").show().text("What did you do?");
    }

    event.preventDefault();
  });
  $("button#restart").click(function(event){
    location.reload();
  });
});
