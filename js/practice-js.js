var vowel === ["a","e","i","o","u"];
var firstvowel = word.indexOf(vowel);
var nonvowels = firstvowel-1;
var restofword = word.substring(firstvowel, word.length);

  if (firstvowel => 1) {
  return restofword.push(nonvowels) + "ay";
  } else if (firstvowel === 0) {
  return word.concat("ay");
  }

var firstletter = word.charAt(0);


var latin = function(word) {
if (word === NaN)
return true;
} if (firstletter === vowel) {
return word.concat("ay");
} if (firstletter !== vowel) {
return restofword + firstletter + "ay";
}
