# A lorem ipsum generator

Lorem provides lorem ipsum text for your Meteor app. This can be stock ("lorem ipsum dolor amit...") or can be customized from your own words.

## To use

Insert the lorem template anywhere you want placeholder text:

```
  {{> lorem}}
```

The template accepts optional arguments for number of words (number), a string that contains space separated words with which to seed the placeholder text (words), and the tag with which to wrap the returned words.

If no number argument is present, the template returns 20 words.
If no word argument is present, the template seeds it with stock filler text.
If no tag argument is present, the template returns a string.

You also have access to the `Lorem` constructor, which accepts an optional argument for the placeholder text seed. It has a method `generate` which requires a number of words to return.

```
  new Lorem("these are words I want to seed with").generate(50);
```
