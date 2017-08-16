function isVowel(char)
{
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || false;
}

function moveConsonant(userWord){
    var wordArray = userWord.split("");
    var letter = wordArray.shift();
    wordArray.push(letter);
    var newString = wordArray.join("");
    return newString;
}

var pigLatin = function(userWord) {
  var number = parseInt(userWord[0]);
  if (number === number) {
    return userWord;
  } else {
    if (isVowel(userWord[0])) {
      return userWord + "way";
    } else {
      return moveConsonant(userWord);
    }
  }
}


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var userWord = $("input#word").val();
    var result = pigLatin(userWord);
    $("#result").text(result);
  });
});
