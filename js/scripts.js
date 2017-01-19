var vowel = ["a","e","i","o","u"];
for (var index = 0; index < vowel.length; index += 1);

var latin = function(word) {
  var firstletter = word.charAt(0);
  var secondletter = word.charAt(1);
  var restofword1 = word.substring(1, word.length);
  var restofword2 = word.substring(2, word.length);
  if (firstletter === vowel[0] || firstletter === vowel[1] || firstletter === vowel[2] || firstletter === vowel[3] || firstletter === vowel[4]) {
  return word + "ay";
  } else if ((firstletter != vowel[0] || firstletter != vowel[1] || firstletter != vowel[2] || firstletter != vowel[3] || firstletter != vowel[4]) && !(secondletter == vowel[0] || secondletter == vowel[1] || secondletter == vowel[2] || secondletter == vowel[3] || secondletter == vowel[4])) {
  return restofword2 + firstletter + secondletter + "ay";
  } else if ((firstletter === "q") && (secondletter === "u")) {
  return restofword2 + firstletter + secondletter + "ay";
  } else {
  return restofword1 + firstletter + "ay";
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
