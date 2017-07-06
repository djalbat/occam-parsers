'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    mappings = require('./mappings'),
    arrayUtil = require('../util/array'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    defaultCustomGrammarBNFMap = require('./defaultCustomGrammar/bnfMap');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    defaultCustomGrammarRules = rulesFromBNFMap(defaultCustomGrammarBNFMap),
    defaultAdditionalMappings = {};

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCustomGrammarsRulesAndAdditionalMappings',
    value: function fromCustomGrammarsRulesAndAdditionalMappings(customGrammarsRules, additionalMappings) {
      var florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, customGrammarsRules, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromBNFAndMappings',
    value: function fromBNFAndMappings(bnf, mappings) {
      var customGrammarsRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCustomGrammarRules;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      mappings = Object.assign(mappings, additionalMappings); ///

      var lines = bnfLexer.linesFromBNF(bnf),
          node = bnfParser.nodeFromLines(lines),
          rules = BNFParser.generateRules(node, mappings);

      arrayUtil.push(rules, customGrammarsRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.bnf = bnf;

FlorenceParser.defaultCustomGrammarBNFMap = defaultCustomGrammarBNFMap;

function rulesFromBNFMap(bnfMap) {
  var ruleNames = Object.keys(bnfMap),
      bnf = ruleNames.reduce(function (bnf, ruleName) {
    var ruleBNF = bnfMap[ruleName];

    bnf = '' + bnf + ruleBNF;

    return bnf;
  }, ''),
      lines = bnfLexer.linesFromBNF(bnf),
      node = bnfParser.nodeFromLines(lines),
      rules = BNFParser.generateRules(node);

  return rules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIm1hcHBpbmdzIiwiYXJyYXlVdGlsIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAiLCJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzIiwicnVsZXNGcm9tQk5GTWFwIiwiZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyIsIkZsb3JlbmNlUGFyc2VyIiwiY3VzdG9tR3JhbW1hcnNSdWxlcyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUJORkFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21CTkYiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwiYm5mTWFwIiwicnVsZU5hbWVzIiwia2V5cyIsInJlZHVjZSIsInJ1bGVOYW1lIiwicnVsZUJORiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxNQUFNRCxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsWUFBUixDQURqQjtBQUFBLElBRU1HLFlBQVlILFFBQVEsZUFBUixDQUZsQjtBQUFBLElBR01JLFlBQVlKLFFBQVEsZUFBUixDQUhsQjtBQUFBLElBSU1LLGVBQWVMLFFBQVEsa0JBQVIsQ0FKckI7QUFBQSxJQUtNTSw2QkFBNkJOLFFBQVEsK0JBQVIsQ0FMbkM7O0lBT1FPLFEsR0FBYVIsTSxDQUFiUSxROzs7QUFFUixJQUFNQyxXQUFXRCxTQUFTRSxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWU4sVUFBVUssV0FBVixFQURsQjtBQUFBLElBRU1FLDRCQUE0QkMsZ0JBQWdCTiwwQkFBaEIsQ0FGbEM7QUFBQSxJQUdNTyw0QkFBNEIsRUFIbEM7O0lBS01DLGM7Ozs7Ozs7Ozs7O2lFQUNnREMsbUIsRUFBcUJDLGtCLEVBQW9CO0FBQzNGLFVBQU1DLGlCQUFpQkgsZUFBZUksa0JBQWYsQ0FBa0NqQixHQUFsQyxFQUF1Q0MsUUFBdkMsRUFBaURhLG1CQUFqRCxFQUFzRUMsa0JBQXRFLENBQXZCOztBQUVBLGFBQU9DLGNBQVA7QUFDRDs7O3VDQUV5QmhCLEcsRUFBS0MsUSxFQUEyRztBQUFBLFVBQWpHYSxtQkFBaUcsdUVBQTNFSix5QkFBMkU7QUFBQSxVQUFoREssa0JBQWdELHVFQUEzQkgseUJBQTJCOztBQUN4SVgsaUJBQVdpQixPQUFPQyxNQUFQLENBQWNsQixRQUFkLEVBQXdCYyxrQkFBeEIsQ0FBWCxDQUR3SSxDQUNoRjs7QUFFeEQsVUFBTUssUUFBUWIsU0FBU2MsWUFBVCxDQUFzQnJCLEdBQXRCLENBQWQ7QUFBQSxVQUNNc0IsT0FBT2IsVUFBVWMsYUFBVixDQUF3QkgsS0FBeEIsQ0FEYjtBQUFBLFVBRU1JLFFBQVFyQixVQUFVc0IsYUFBVixDQUF3QkgsSUFBeEIsRUFBOEJyQixRQUE5QixDQUZkOztBQUlBQyxnQkFBVXdCLElBQVYsQ0FBZUYsS0FBZixFQUFzQlYsbUJBQXRCOztBQUVBLFVBQU1FLGlCQUFpQixJQUFJSCxjQUFKLENBQW1CVyxLQUFuQixDQUF2Qjs7QUFFQSxhQUFPUixjQUFQO0FBQ0Q7Ozs7RUFuQjBCWixZOztBQXNCN0J1QixPQUFPQyxPQUFQLEdBQWlCZixjQUFqQjs7QUFFQUEsZUFBZVosUUFBZixHQUEwQkEsUUFBMUI7O0FBRUFZLGVBQWViLEdBQWYsR0FBcUJBLEdBQXJCOztBQUVBYSxlQUFlUiwwQkFBZixHQUE0Q0EsMEJBQTVDOztBQUVBLFNBQVNNLGVBQVQsQ0FBeUJrQixNQUF6QixFQUFpQztBQUMvQixNQUFNQyxZQUFZWixPQUFPYSxJQUFQLENBQVlGLE1BQVosQ0FBbEI7QUFBQSxNQUNNN0IsTUFBTThCLFVBQVVFLE1BQVYsQ0FBaUIsVUFBU2hDLEdBQVQsRUFBY2lDLFFBQWQsRUFBd0I7QUFDN0MsUUFBTUMsVUFBVUwsT0FBT0ksUUFBUCxDQUFoQjs7QUFFQWpDLGVBQVNBLEdBQVQsR0FBZWtDLE9BQWY7O0FBRUEsV0FBT2xDLEdBQVA7QUFDRCxHQU5LLEVBTUgsRUFORyxDQURaO0FBQUEsTUFRTW9CLFFBQVFiLFNBQVNjLFlBQVQsQ0FBc0JyQixHQUF0QixDQVJkO0FBQUEsTUFTTXNCLE9BQU9iLFVBQVVjLGFBQVYsQ0FBd0JILEtBQXhCLENBVGI7QUFBQSxNQVVNSSxRQUFRckIsVUFBVXNCLGFBQVYsQ0FBd0JILElBQXhCLENBVmQ7O0FBWUEsU0FBT0UsS0FBUDtBQUNEIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4vbWFwcGluZ3MnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwID0gcmVxdWlyZSgnLi9kZWZhdWx0Q3VzdG9tR3JhbW1hci9ibmZNYXAnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMgPSBydWxlc0Zyb21CTkZNYXAoZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXApLFxuICAgICAgZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyA9IHt9O1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnNSdWxlc0FuZEFkZGl0aW9uYWxNYXBwaW5ncyhjdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hcnNSdWxlcyA9IGRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyA9IGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncyk7IC8vL1xuXG4gICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBub2RlID0gYm5mUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgYXJyYXlVdGlsLnB1c2gocnVsZXMsIGN1c3RvbUdyYW1tYXJzUnVsZXMpO1xuICAgIFxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuXG5GbG9yZW5jZVBhcnNlci5ibmYgPSBibmY7XG5cbkZsb3JlbmNlUGFyc2VyLmRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXA7XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUJORk1hcChibmZNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gT2JqZWN0LmtleXMoYm5mTWFwKSxcbiAgICAgICAgYm5mID0gcnVsZU5hbWVzLnJlZHVjZShmdW5jdGlvbihibmYsIHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZUJORiA9IGJuZk1hcFtydWxlTmFtZV07XG4gIFxuICAgICAgICAgIGJuZiA9IGAke2JuZn0ke3J1bGVCTkZ9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSwgJycpLFxuICAgICAgICBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICBub2RlID0gYm5mUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==