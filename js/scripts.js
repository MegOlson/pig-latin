function isVowel(char) {
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || false;
}

function eachWord(userInput) {
  var sentenceArray = userInput.split(" ");
  var newArray = [];
  sentenceArray.forEach(function(word){
    var newWord = changeWord(word);
    newArray.push(newWord);
  });
  var finalSentence = newArray.join(" ");
  return finalSentence;
}

function changeWord(word){
  var wordArray = word.split("");
  if (isVowel(wordArray[0])) {
    wordArray.push("way");
    var newString = wordArray.join("");
    return newString;
  } else {
    while (!isVowel(wordArray[0])) {
      if (wordArray[0] === "q" && wordArray[1] == "u") {
        var letter = wordArray.splice(0,1);
        wordArray.push(letter);
      }
      var letter = wordArray.shift();
      wordArray.push(letter);
   }
  }
  var newString = wordArray.join("");
  return newString + "ay";
}

var pigLatin = function(userInput) {
  var number = parseInt(userInput[0]);
  if (number === number) {
    return userInput;
  } else {
    return eachWord(userInput);
    }
}


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#input").val();
    var result = pigLatin(userInput);
    $("#result").text(result);
  });
});
