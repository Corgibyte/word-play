function output(outputWord, outputCount) {
  $("#output").append("<li>" + outputWord + ": " + outputCount + "</li>");
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    
    let origSentenceStr = $("#sentence").val();
    origSentenceStr = origSentenceStr.toLowerCase();
    let origSentenceArr = origSentenceStr.split(" ");
    origSentenceArr.sort();

    let lastCount = 0;
    let lastWord = "";
    origSentenceArr.forEach(function(word) {
      if (word === lastWord) {
        lastCount += 1;
      } else {
        if (lastWord !== "") {
          output(lastWord, lastCount);
        }
        lastWord = word;
        lastCount = 1;        
      }              
    });
  });
});