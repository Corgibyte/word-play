$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    //Array from sentence
    const origSentenceStr = $("#sentence").val();
    const origSentenceArr = origSentenceStr.split(" ");

    //Loop through, and create new array from words of 3+ length
    let newSentence = [];
    origSentenceArr.forEach(function(word) {
      if (word.length > 2) {
        newSentence.push(word);
      }
    });

    //Reverse new array, join together, display
    newSentence.reverse();
    const newSentenceStr = newSentence.join(" ");

    $("#output").append(newSentenceStr);
  });
});