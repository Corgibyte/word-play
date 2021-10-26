function output(wordCounts) {
  wordCounts.forEach(function(wordCount) {
    $("#output").append("<li>" + wordCount + "</li>");
  });
}

function insertWordCount(oldArray, newWord, newCount) {
  let newArray = [];  
  const newElement = newWord + ": " + newCount;
  if (oldArray.length < 1) {
    newArray.push(newElement);
  } else {
    let inserted = false;
    oldArray.forEach(function(element) {
      elementCount = parseInt(element.split(": ")[1]);
      if (newCount > elementCount && !inserted) {
        newArray.push(newElement);
        inserted = true;
      }
      newArray.push(element);
    });
    if (!inserted) {
      newArray.push(newElement);
    }
  }
  return newArray;
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
    let wordCounts = [];
    origSentenceArr.forEach(function(word) {
      if (word === lastWord) {
        lastCount += 1;
      } else {
        if (lastWord !== "") {
          wordCounts = insertWordCount(wordCounts, lastWord, lastCount);
        }
        lastWord = word;
        lastCount = 1;        
      }              
    });
    output(wordCounts);
  });
});