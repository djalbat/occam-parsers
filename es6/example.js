'use strict';

require('juxtapose');

const easy = require('easy');

const CSSExampleView = require('./example/css/view'),
      BNFExampleView = require('./example/bnf/view'),
      BasicExampleView = require('./example/basic/view'),
      FlorenceExampleView = require('./example/florence/view');

const { Body } = easy;

let ExampleView;

const body = new Body(),
      example = window.location.search.substring(1);

switch (example) {
  case 'css' : ExampleView = CSSExampleView; break;
  case 'bnf' : ExampleView = BNFExampleView; break;
  case 'basic' : ExampleView = BasicExampleView; break;
  case 'florence' : ExampleView = FlorenceExampleView; break;
}

const exampleView = <ExampleView />;

exampleView.appendTo(body);
