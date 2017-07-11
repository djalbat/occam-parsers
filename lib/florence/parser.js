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
    customGrammarsDefaultBNFMap = require('./customGrammars/defaultBNFMap');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    customGrammarsDefaultRules = rulesFromBNFMap(customGrammarsDefaultBNFMap),
    defaultAdditionalMappings = {};

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCustomGrammarsCombinedRulesAndAdditionalMappings',
    value: function fromCustomGrammarsCombinedRulesAndAdditionalMappings(customGrammarsCombinedRules, additionalMappings) {
      var florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, customGrammarsCombinedRules, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromBNFAndMappings',
    value: function fromBNFAndMappings(bnf, mappings) {
      var customGrammarsCombinedRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : customGrammarsDefaultRules;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      mappings = Object.assign(mappings, additionalMappings); ///

      var lines = bnfLexer.linesFromBNF(bnf),
          node = bnfParser.nodeFromLines(lines),
          rules = BNFParser.generateRules(node, mappings);

      arrayUtil.push(rules, customGrammarsCombinedRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.bnf = bnf;

FlorenceParser.customGrammarsDefaultBNFMap = customGrammarsDefaultBNFMap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIm1hcHBpbmdzIiwiYXJyYXlVdGlsIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiY3VzdG9tR3JhbW1hcnNEZWZhdWx0Qk5GTWFwIiwiQk5GTGV4ZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiY3VzdG9tR3JhbW1hcnNEZWZhdWx0UnVsZXMiLCJydWxlc0Zyb21CTkZNYXAiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRmxvcmVuY2VQYXJzZXIiLCJjdXN0b21HcmFtbWFyc0NvbWJpbmVkUnVsZXMiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkZBbmRNYXBwaW5ncyIsIk9iamVjdCIsImFzc2lnbiIsImxpbmVzIiwibGluZXNGcm9tQk5GIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsImJuZk1hcCIsInJ1bGVOYW1lcyIsImtleXMiLCJyZWR1Y2UiLCJydWxlTmFtZSIsInJ1bGVCTkYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxZQUFZSCxRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNSSxZQUFZSixRQUFRLGVBQVIsQ0FIbEI7QUFBQSxJQUlNSyxlQUFlTCxRQUFRLGtCQUFSLENBSnJCO0FBQUEsSUFLTU0sOEJBQThCTixRQUFRLGdDQUFSLENBTHBDOztJQU9RTyxRLEdBQWFSLE0sQ0FBYlEsUTs7O0FBRVIsSUFBTUMsV0FBV0QsU0FBU0UsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlOLFVBQVVLLFdBQVYsRUFEbEI7QUFBQSxJQUVNRSw2QkFBNkJDLGdCQUFnQk4sMkJBQWhCLENBRm5DO0FBQUEsSUFHTU8sNEJBQTRCLEVBSGxDOztJQUtNQyxjOzs7Ozs7Ozs7Ozt5RUFDd0RDLDJCLEVBQTZCQyxrQixFQUFvQjtBQUMzRyxVQUFNQyxpQkFBaUJILGVBQWVJLGtCQUFmLENBQWtDakIsR0FBbEMsRUFBdUNDLFFBQXZDLEVBQWlEYSwyQkFBakQsRUFBOEVDLGtCQUE5RSxDQUF2Qjs7QUFFQSxhQUFPQyxjQUFQO0FBQ0Q7Ozt1Q0FFeUJoQixHLEVBQUtDLFEsRUFBb0g7QUFBQSxVQUExR2EsMkJBQTBHLHVFQUE1RUosMEJBQTRFO0FBQUEsVUFBaERLLGtCQUFnRCx1RUFBM0JILHlCQUEyQjs7QUFDakpYLGlCQUFXaUIsT0FBT0MsTUFBUCxDQUFjbEIsUUFBZCxFQUF3QmMsa0JBQXhCLENBQVgsQ0FEaUosQ0FDekY7O0FBRXhELFVBQU1LLFFBQVFiLFNBQVNjLFlBQVQsQ0FBc0JyQixHQUF0QixDQUFkO0FBQUEsVUFDTXNCLE9BQU9iLFVBQVVjLGFBQVYsQ0FBd0JILEtBQXhCLENBRGI7QUFBQSxVQUVNSSxRQUFRckIsVUFBVXNCLGFBQVYsQ0FBd0JILElBQXhCLEVBQThCckIsUUFBOUIsQ0FGZDs7QUFJQUMsZ0JBQVV3QixJQUFWLENBQWVGLEtBQWYsRUFBc0JWLDJCQUF0Qjs7QUFFQSxVQUFNRSxpQkFBaUIsSUFBSUgsY0FBSixDQUFtQlcsS0FBbkIsQ0FBdkI7O0FBRUEsYUFBT1IsY0FBUDtBQUNEOzs7O0VBbkIwQlosWTs7QUFzQjdCdUIsT0FBT0MsT0FBUCxHQUFpQmYsY0FBakI7O0FBRUFBLGVBQWVaLFFBQWYsR0FBMEJBLFFBQTFCOztBQUVBWSxlQUFlYixHQUFmLEdBQXFCQSxHQUFyQjs7QUFFQWEsZUFBZVIsMkJBQWYsR0FBNkNBLDJCQUE3Qzs7QUFFQSxTQUFTTSxlQUFULENBQXlCa0IsTUFBekIsRUFBaUM7QUFDL0IsTUFBTUMsWUFBWVosT0FBT2EsSUFBUCxDQUFZRixNQUFaLENBQWxCO0FBQUEsTUFDTTdCLE1BQU04QixVQUFVRSxNQUFWLENBQWlCLFVBQVNoQyxHQUFULEVBQWNpQyxRQUFkLEVBQXdCO0FBQzdDLFFBQU1DLFVBQVVMLE9BQU9JLFFBQVAsQ0FBaEI7O0FBRUFqQyxlQUFTQSxHQUFULEdBQWVrQyxPQUFmOztBQUVBLFdBQU9sQyxHQUFQO0FBQ0QsR0FOSyxFQU1ILEVBTkcsQ0FEWjtBQUFBLE1BUU1vQixRQUFRYixTQUFTYyxZQUFULENBQXNCckIsR0FBdEIsQ0FSZDtBQUFBLE1BU01zQixPQUFPYixVQUFVYyxhQUFWLENBQXdCSCxLQUF4QixDQVRiO0FBQUEsTUFVTUksUUFBUXJCLFVBQVVzQixhQUFWLENBQXdCSCxJQUF4QixDQVZkOztBQVlBLFNBQU9FLEtBQVA7QUFDRCIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5JyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBjdXN0b21HcmFtbWFyc0RlZmF1bHRCTkZNYXAgPSByZXF1aXJlKCcuL2N1c3RvbUdyYW1tYXJzL2RlZmF1bHRCTkZNYXAnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGN1c3RvbUdyYW1tYXJzRGVmYXVsdFJ1bGVzID0gcnVsZXNGcm9tQk5GTWFwKGN1c3RvbUdyYW1tYXJzRGVmYXVsdEJORk1hcCksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0ge307XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFyc0NvbWJpbmVkUnVsZXNBbmRBZGRpdGlvbmFsTWFwcGluZ3MoY3VzdG9tR3JhbW1hcnNDb21iaW5lZFJ1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFyc0NvbWJpbmVkUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFyc0NvbWJpbmVkUnVsZXMgPSBjdXN0b21HcmFtbWFyc0RlZmF1bHRSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyk7XG5cbiAgICBhcnJheVV0aWwucHVzaChydWxlcywgY3VzdG9tR3JhbW1hcnNDb21iaW5lZFJ1bGVzKTtcbiAgICBcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcblxuRmxvcmVuY2VQYXJzZXIubWFwcGluZ3MgPSBtYXBwaW5ncztcblxuRmxvcmVuY2VQYXJzZXIuYm5mID0gYm5mO1xuXG5GbG9yZW5jZVBhcnNlci5jdXN0b21HcmFtbWFyc0RlZmF1bHRCTkZNYXAgPSBjdXN0b21HcmFtbWFyc0RlZmF1bHRCTkZNYXA7XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUJORk1hcChibmZNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gT2JqZWN0LmtleXMoYm5mTWFwKSxcbiAgICAgICAgYm5mID0gcnVsZU5hbWVzLnJlZHVjZShmdW5jdGlvbihibmYsIHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZUJORiA9IGJuZk1hcFtydWxlTmFtZV07XG4gIFxuICAgICAgICAgIGJuZiA9IGAke2JuZn0ke3J1bGVCTkZ9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSwgJycpLFxuICAgICAgICBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICBub2RlID0gYm5mUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==