"use strict";

Lorem = function Lorem(text) {
  this.words = [];
  this.MIN_NUM_WORDS = 3;
  var defaultPaddingWords = "lorem ipsum dolor sit amet adipisicing elit";

  if(this instanceof Lorem){
    if (!text) {
      text = defaultPaddingWords;
    }

    this.words = this.constructor.removeDuplicates(text.split(/,\s*|\s/));

    if(!this.enoughUniqueWords(3)){
      this.words.concat(defaultPaddingWords.split(" "));
    }
  } else {
    return new Lorem(text);
  }

}

Lorem.prototype.generate = function(numOfWords) {
  var wordCounter = 0,
      output = [],
      that = this;

  if (isNaN(numOfWords)){
    numOfWords = parseInt(numOfWords, 10);
    if (isNaN(numOfWords)){
      return "You must specify a number.";
    }
  }

  function loremCreator(wordCounter, count, periodCounter, wordWithPeriod, sentenceCounter, sentenceWithNewLine){
    var randomNumber = Math.floor(Math.random() * that.words.length),
        randomWord = that.words[randomNumber];

    if(wordCounter === count){
      return that.constructor.sentencize(output);
    }

    if (!periodCounter || wordWithPeriod < periodCounter){
      periodCounter = 0;
      wordWithPeriod = Math.floor(Math.random()*8+5);
    }

    if (!sentenceCounter || sentenceWithNewLine < sentenceCounter){
      sentenceCounter = 0;
      sentenceWithNewLine = Math.floor(Math.random()*4+3);
    }

    if (randomWord === output[output.length-1] || randomWord === output[output.length-2]){
      return loremCreator(wordCounter, count, periodCounter,
        wordWithPeriod, sentenceCounter, sentenceWithNewLine);
    }

    if (count - wordCounter > 3){
      if (periodCounter === 0){
        randomWord = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
        if (sentenceCounter === sentenceWithNewLine){
          randomWord = "\n\n" + randomWord;
        }
      }
      else if (periodCounter === wordWithPeriod ){
        randomWord = randomWord+".";
        sentenceCounter++;
      }
    }

    output.push(randomWord);

    return loremCreator(wordCounter+1,count,periodCounter+1,wordWithPeriod,sentenceCounter,sentenceWithNewLine);
  }
  return loremCreator(wordCounter, numOfWords);
};

Lorem.removeDuplicates = function(text) {
  var cache = {};
  for (var i=0; i<text.length; i++){
    if (!(text[i] in cache)) {
      cache[text[i]] = text[i];
    }
  }
  return Object.keys(cache);
};

Lorem.prototype.enoughUniqueWords = function() {
  return this.words.length >= this.MIN_NUM_WORDS;
};

Lorem.sentencize = function(words) {
  return words.join(" ")+".";
};
