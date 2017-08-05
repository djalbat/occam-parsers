'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    necessary = require('necessary');

var bnf = require('./bnf'),
    mappings = require('./mappings'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    defaultCustomGrammarBNFMap = require('./defaultCustomGrammarBNFMap');

var array = necessary.array,
    BNFLexer = lexers.BNFLexer;


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
            key: 'fromCombinedCustomGrammarsRulesAndAdditionalMappings',
            value: function fromCombinedCustomGrammarsRulesAndAdditionalMappings(combinedCustomGrammarsRules, additionalMappings) {
                  var florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules, additionalMappings);

                  return florenceParser;
            }
      }, {
            key: 'fromBNFAndMappings',
            value: function fromBNFAndMappings(bnf, mappings) {
                  var combinedCustomGrammarsRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCustomGrammarRules;
                  var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

                  mappings = Object.assign(mappings, additionalMappings); ///

                  var lines = bnfLexer.linesFromBNF(bnf),
                      node = bnfParser.nodeFromLines(lines),
                      rules = BNFParser.generateRules(node, mappings);

                  array.push(rules, combinedCustomGrammarsRules);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAiLCJhcnJheSIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMiLCJydWxlc0Zyb21CTkZNYXAiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRmxvcmVuY2VQYXJzZXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkZBbmRNYXBwaW5ncyIsIk9iamVjdCIsImFzc2lnbiIsImxpbmVzIiwibGluZXNGcm9tQk5GIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsImJuZk1hcCIsInJ1bGVOYW1lcyIsImtleXMiLCJyZWR1Y2UiLCJydWxlTmFtZSIsInJ1bGVCTkYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsTUFBTUYsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRyxXQUFXSCxRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNSSxZQUFZSixRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNSyxlQUFlTCxRQUFRLGtCQUFSLENBSHJCO0FBQUEsSUFJTU0sNkJBQTZCTixRQUFRLDhCQUFSLENBSm5DOztBQU1NLElBQUVPLEtBQUYsR0FBWU4sU0FBWixDQUFFTSxLQUFGO0FBQUEsSUFDRUMsUUFERixHQUNlVCxNQURmLENBQ0VTLFFBREY7OztBQUdOLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZUCxVQUFVTSxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsNEJBQTRCQyxnQkFBZ0JQLDBCQUFoQixDQUZsQztBQUFBLElBR01RLDRCQUE0QixFQUhsQzs7SUFLTUMsYzs7Ozs7Ozs7Ozs7aUZBQ3dEQywyQixFQUE2QkMsa0IsRUFBb0I7QUFDM0csc0JBQU1DLGlCQUFpQkgsZUFBZUksa0JBQWYsQ0FBa0NqQixHQUFsQyxFQUF1Q0MsUUFBdkMsRUFBaURhLDJCQUFqRCxFQUE4RUMsa0JBQTlFLENBQXZCOztBQUVBLHlCQUFPQyxjQUFQO0FBQ0Q7OzsrQ0FFeUJoQixHLEVBQUtDLFEsRUFBbUg7QUFBQSxzQkFBekdhLDJCQUF5Ryx1RUFBM0VKLHlCQUEyRTtBQUFBLHNCQUFoREssa0JBQWdELHVFQUEzQkgseUJBQTJCOztBQUNoSlgsNkJBQVdpQixPQUFPQyxNQUFQLENBQWNsQixRQUFkLEVBQXdCYyxrQkFBeEIsQ0FBWCxDQURnSixDQUN4Rjs7QUFFeEQsc0JBQU1LLFFBQVFiLFNBQVNjLFlBQVQsQ0FBc0JyQixHQUF0QixDQUFkO0FBQUEsc0JBQ01zQixPQUFPYixVQUFVYyxhQUFWLENBQXdCSCxLQUF4QixDQURiO0FBQUEsc0JBRU1JLFFBQVF0QixVQUFVdUIsYUFBVixDQUF3QkgsSUFBeEIsRUFBOEJyQixRQUE5QixDQUZkOztBQUlBSSx3QkFBTXFCLElBQU4sQ0FBV0YsS0FBWCxFQUFrQlYsMkJBQWxCOztBQUVBLHNCQUFNRSxpQkFBaUIsSUFBSUgsY0FBSixDQUFtQlcsS0FBbkIsQ0FBdkI7O0FBRUEseUJBQU9SLGNBQVA7QUFDRDs7OztFQW5CMEJiLFk7O0FBc0I3QndCLE9BQU9DLE9BQVAsR0FBaUJmLGNBQWpCOztBQUVBQSxlQUFlWixRQUFmLEdBQTBCQSxRQUExQjs7QUFFQVksZUFBZWIsR0FBZixHQUFxQkEsR0FBckI7O0FBRUFhLGVBQWVULDBCQUFmLEdBQTRDQSwwQkFBNUM7O0FBRUEsU0FBU08sZUFBVCxDQUF5QmtCLE1BQXpCLEVBQWlDO0FBQy9CLFVBQU1DLFlBQVlaLE9BQU9hLElBQVAsQ0FBWUYsTUFBWixDQUFsQjtBQUFBLFVBQ003QixNQUFNOEIsVUFBVUUsTUFBVixDQUFpQixVQUFTaEMsR0FBVCxFQUFjaUMsUUFBZCxFQUF3QjtBQUM3QyxnQkFBTUMsVUFBVUwsT0FBT0ksUUFBUCxDQUFoQjs7QUFFQWpDLHVCQUFTQSxHQUFULEdBQWVrQyxPQUFmOztBQUVBLG1CQUFPbEMsR0FBUDtBQUNELE9BTkssRUFNSCxFQU5HLENBRFo7QUFBQSxVQVFNb0IsUUFBUWIsU0FBU2MsWUFBVCxDQUFzQnJCLEdBQXRCLENBUmQ7QUFBQSxVQVNNc0IsT0FBT2IsVUFBVWMsYUFBVixDQUF3QkgsS0FBeEIsQ0FUYjtBQUFBLFVBVU1JLFFBQVF0QixVQUFVdUIsYUFBVixDQUF3QkgsSUFBeEIsQ0FWZDs7QUFZQSxhQUFPRSxLQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcCA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMgPSBydWxlc0Zyb21CTkZNYXAoZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXApLFxuICAgICAgZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyA9IHt9O1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzQW5kQWRkaXRpb25hbE1hcHBpbmdzKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyk7XG5cbiAgICBhcnJheS5wdXNoKHJ1bGVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMpO1xuICAgIFxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuXG5GbG9yZW5jZVBhcnNlci5ibmYgPSBibmY7XG5cbkZsb3JlbmNlUGFyc2VyLmRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXA7XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUJORk1hcChibmZNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gT2JqZWN0LmtleXMoYm5mTWFwKSxcbiAgICAgICAgYm5mID0gcnVsZU5hbWVzLnJlZHVjZShmdW5jdGlvbihibmYsIHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZUJORiA9IGJuZk1hcFtydWxlTmFtZV07XG4gIFxuICAgICAgICAgIGJuZiA9IGAke2JuZn0ke3J1bGVCTkZ9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSwgJycpLFxuICAgICAgICBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICBub2RlID0gYm5mUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==