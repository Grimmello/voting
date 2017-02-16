$(document).ready(function() {
  var votingAge = parseInt(prompt("What is your age?"));
  if (votingAge > 18) {
    $("#ofAge").show();
  } else {
    $("#underAge").show();
  }
})
