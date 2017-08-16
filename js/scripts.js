var pigLatin = function(userWord) {
  var number = parseInt(userWord[0]);
  if (number === number) {
    return userWord;
  } else {
    if (userWord[0] === "a" || userWord[0] === "e" || userWord[0] === "i" || userWord[0] === "o" || userWord[0] === "u") {
      return userWord + "way";
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
