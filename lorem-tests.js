function compareArrays(arrayOne, arrayTwo) {
  var isEqual = true;
  if (!(arrayOne instanceof Array || arrayTwo instanceof Array)) {
    return false;
  };

  if (arrayOne.length !== arrayTwo.length) { return false };

  for (var i = arrayOne.length - 1; i >= 0; i--) {
    if(arrayTwo.indexOf(arrayOne[i]) === -1){
      isEqual = false;
      break;
    }
  };

  return isEqual;
}

Tinytest.add('removes duplicates', function(test){
  var wordsWithDuplicates = ['foo', 'bar', 'dolor', 'foo'],
          uniqueWords = ['foo', 'bar', 'dolor'];
  test.equal(
    compareArrays(Lorem.removeDuplicates(wordsWithDuplicates), uniqueWords),
    true
  );
});

Tinytest.add('does not shortern array without duplicates', function(test){
  var wordsWithoutDuplicates = ['foo', 'bar', 'dolor', 'ipsum'];
  test.equal(
    Lorem.removeDuplicates(wordsWithoutDuplicates),
    wordsWithoutDuplicates
  );
});

Tinytest.add('sentencize returns a string', function(test){
  test.equal(
    typeof Lorem.sentencize(['foo', 'bar', 'dolor']),
    'string'
  );
});

Tinytest.add('sentencize ends with a period', function(test){
  var sentencedWords = Lorem.sentencize(['foo', 'bar', 'dolor']);

  test.equal(sentencedWords[sentencedWords.length - 1], '.');
});
