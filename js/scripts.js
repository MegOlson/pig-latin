var pigLatin = function(userWord) {
  var number = parseInt(userWord[0]);
  if (number === number) {
    return userWord;
  } else {

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
