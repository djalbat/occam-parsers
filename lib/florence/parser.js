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
    customGrammarDefaultBNFMap = require('./customGrammar/defaultBNFMap');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    customGrammarDefaultRules = rulesFromBNFMap(customGrammarDefaultBNFMap),
    defaultAdditionalMappings = {};

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCombinedCustomGrammarsRulesAndAdditionalMappings',
    value: function fromCombinedCustomGrammarsRulesAndAdditionalMappings(combinedCustomGrammarsRules, additionalMappings) {
      var florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromBNFAndMappings',
    value: function fromBNFAndMappings(bnf, mappings) {
      var combinedCustomGrammarsRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : customGrammarDefaultRules;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      mappings = Object.assign(mappings, additionalMappings); ///

      var lines = bnfLexer.linesFromBNF(bnf),
          node = bnfParser.nodeFromLines(lines),
          rules = BNFParser.generateRules(node, mappings);

      arrayUtil.push(rules, combinedCustomGrammarsRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.bnf = bnf;

FlorenceParser.customGrammarDefaultBNFMap = customGrammarDefaultBNFMap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIm1hcHBpbmdzIiwiYXJyYXlVdGlsIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiY3VzdG9tR3JhbW1hckRlZmF1bHRCTkZNYXAiLCJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJjdXN0b21HcmFtbWFyRGVmYXVsdFJ1bGVzIiwicnVsZXNGcm9tQk5GTWFwIiwiZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyIsIkZsb3JlbmNlUGFyc2VyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsImxpbmVzRnJvbUJORiIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJibmZNYXAiLCJydWxlTmFtZXMiLCJrZXlzIiwicmVkdWNlIiwicnVsZU5hbWUiLCJydWxlQk5GIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUcsWUFBWUgsUUFBUSxlQUFSLENBRmxCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxlQUFSLENBSGxCO0FBQUEsSUFJTUssZUFBZUwsUUFBUSxrQkFBUixDQUpyQjtBQUFBLElBS01NLDZCQUE2Qk4sUUFBUSwrQkFBUixDQUxuQzs7SUFPUU8sUSxHQUFhUixNLENBQWJRLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZTixVQUFVSyxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsNEJBQTRCQyxnQkFBZ0JOLDBCQUFoQixDQUZsQztBQUFBLElBR01PLDRCQUE0QixFQUhsQzs7SUFLTUMsYzs7Ozs7Ozs7Ozs7eUVBQ3dEQywyQixFQUE2QkMsa0IsRUFBb0I7QUFDM0csVUFBTUMsaUJBQWlCSCxlQUFlSSxrQkFBZixDQUFrQ2pCLEdBQWxDLEVBQXVDQyxRQUF2QyxFQUFpRGEsMkJBQWpELEVBQThFQyxrQkFBOUUsQ0FBdkI7O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7dUNBRXlCaEIsRyxFQUFLQyxRLEVBQW1IO0FBQUEsVUFBekdhLDJCQUF5Ryx1RUFBM0VKLHlCQUEyRTtBQUFBLFVBQWhESyxrQkFBZ0QsdUVBQTNCSCx5QkFBMkI7O0FBQ2hKWCxpQkFBV2lCLE9BQU9DLE1BQVAsQ0FBY2xCLFFBQWQsRUFBd0JjLGtCQUF4QixDQUFYLENBRGdKLENBQ3hGOztBQUV4RCxVQUFNSyxRQUFRYixTQUFTYyxZQUFULENBQXNCckIsR0FBdEIsQ0FBZDtBQUFBLFVBQ01zQixPQUFPYixVQUFVYyxhQUFWLENBQXdCSCxLQUF4QixDQURiO0FBQUEsVUFFTUksUUFBUXJCLFVBQVVzQixhQUFWLENBQXdCSCxJQUF4QixFQUE4QnJCLFFBQTlCLENBRmQ7O0FBSUFDLGdCQUFVd0IsSUFBVixDQUFlRixLQUFmLEVBQXNCViwyQkFBdEI7O0FBRUEsVUFBTUUsaUJBQWlCLElBQUlILGNBQUosQ0FBbUJXLEtBQW5CLENBQXZCOztBQUVBLGFBQU9SLGNBQVA7QUFDRDs7OztFQW5CMEJaLFk7O0FBc0I3QnVCLE9BQU9DLE9BQVAsR0FBaUJmLGNBQWpCOztBQUVBQSxlQUFlWixRQUFmLEdBQTBCQSxRQUExQjs7QUFFQVksZUFBZWIsR0FBZixHQUFxQkEsR0FBckI7O0FBRUFhLGVBQWVSLDBCQUFmLEdBQTRDQSwwQkFBNUM7O0FBRUEsU0FBU00sZUFBVCxDQUF5QmtCLE1BQXpCLEVBQWlDO0FBQy9CLE1BQU1DLFlBQVlaLE9BQU9hLElBQVAsQ0FBWUYsTUFBWixDQUFsQjtBQUFBLE1BQ003QixNQUFNOEIsVUFBVUUsTUFBVixDQUFpQixVQUFTaEMsR0FBVCxFQUFjaUMsUUFBZCxFQUF3QjtBQUM3QyxRQUFNQyxVQUFVTCxPQUFPSSxRQUFQLENBQWhCOztBQUVBakMsZUFBU0EsR0FBVCxHQUFla0MsT0FBZjs7QUFFQSxXQUFPbEMsR0FBUDtBQUNELEdBTkssRUFNSCxFQU5HLENBRFo7QUFBQSxNQVFNb0IsUUFBUWIsU0FBU2MsWUFBVCxDQUFzQnJCLEdBQXRCLENBUmQ7QUFBQSxNQVNNc0IsT0FBT2IsVUFBVWMsYUFBVixDQUF3QkgsS0FBeEIsQ0FUYjtBQUFBLE1BVU1JLFFBQVFyQixVQUFVc0IsYUFBVixDQUF3QkgsSUFBeEIsQ0FWZDs7QUFZQSxTQUFPRSxLQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgY3VzdG9tR3JhbW1hckRlZmF1bHRCTkZNYXAgPSByZXF1aXJlKCcuL2N1c3RvbUdyYW1tYXIvZGVmYXVsdEJORk1hcCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgY3VzdG9tR3JhbW1hckRlZmF1bHRSdWxlcyA9IHJ1bGVzRnJvbUJORk1hcChjdXN0b21HcmFtbWFyRGVmYXVsdEJORk1hcCksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0ge307XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXNBbmRBZGRpdGlvbmFsTWFwcGluZ3MoY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBjdXN0b21HcmFtbWFyRGVmYXVsdFJ1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgbm9kZSA9IGJuZlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUsIG1hcHBpbmdzKTtcblxuICAgIGFycmF5VXRpbC5wdXNoKHJ1bGVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMpO1xuICAgIFxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuXG5GbG9yZW5jZVBhcnNlci5ibmYgPSBibmY7XG5cbkZsb3JlbmNlUGFyc2VyLmN1c3RvbUdyYW1tYXJEZWZhdWx0Qk5GTWFwID0gY3VzdG9tR3JhbW1hckRlZmF1bHRCTkZNYXA7XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUJORk1hcChibmZNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gT2JqZWN0LmtleXMoYm5mTWFwKSxcbiAgICAgICAgYm5mID0gcnVsZU5hbWVzLnJlZHVjZShmdW5jdGlvbihibmYsIHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZUJORiA9IGJuZk1hcFtydWxlTmFtZV07XG4gIFxuICAgICAgICAgIGJuZiA9IGAke2JuZn0ke3J1bGVCTkZ9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSwgJycpLFxuICAgICAgICBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICBub2RlID0gYm5mUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==