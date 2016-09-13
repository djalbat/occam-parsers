'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    CommonParts = require('./commonParts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = this.parts.every(function (part) {
        var parsed = part.parse(input, context, productions);

        return parsed;
      });

      return parsed;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, Parts) {
      var AllParts = spliceParts(CommonParts, Parts),
          parts = symbolSequence.mapSymbols(function (symbol) {
        var part = partFromAllParts(AllParts, symbol);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromAllParts(AllParts, symbol) {
  var part = null;

  AllParts.some(function (Part) {
    part = Part.fromSymbol(symbol);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}

function spliceParts(CommonParts, Parts) {
  var AllParts = CommonParts.slice(),
      CommonPartsLength = CommonParts.length,
      start = CommonPartsLength,
      ///
  deleteCount = 0;

  util.spliceArray(AllParts, start, deleteCount, Parts);

  return AllParts;
}