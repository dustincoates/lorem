Template.lorem.helpers({
  lorem: function(numOfWords, words, tagName){
    var num = numOfWords || 20,
        text = new Lorem(words).generate(num);

    if(tagName){
      return Spacebars.SafeString("<" + tagName + ">" + text + "</" + tagName + ">");
    } else {
      return text;
    }
  }
});
