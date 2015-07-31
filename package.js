Package.describe({
  name: 'dcoates:lorem',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A lorem ipsum generator. Use straight ipsum or customize with your own words.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dustincoates/lorem',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating'], 'client');
  api.addFiles(['lorem.js', 'lorem.html', 'lorem-helpers.js'], 'client');

  if(api.export){
    api.export('Lorem');
  }
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], 'client');
  api.use('dcoates:lorem');
  api.addFiles('lorem-tests.js', 'client');
});
