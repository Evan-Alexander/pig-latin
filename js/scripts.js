var vowel = ["a","e","i","o","u"];
for (var index = 0; index < vowel.length; index += 1);

var latin = function(word) {
  var firstletter = word.charAt(0);
  var restofword = word.substring(1, word.length);
	if (firstletter === vowel[0] || firstletter === vowel[1] || firstletter === vowel[2] || firstletter === vowel[3] || firstletter === vowel[4]) {
  return word + "ay";
	} else {
  return restofword + firstletter + "ay";
  }
};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = latin(word);
    $(".word").text(word);
    $(".latin").text(result);

    $("#result").show();

  });
});
