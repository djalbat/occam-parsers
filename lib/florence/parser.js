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
    BNFLexer = lexers.BNFLexer,
    push = array.push;


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

                  push(rules, combinedCustomGrammarsRules);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAiLCJhcnJheSIsIkJORkxleGVyIiwicHVzaCIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzIiwicnVsZXNGcm9tQk5GTWFwIiwiZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyIsIkZsb3JlbmNlUGFyc2VyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsImxpbmVzRnJvbUJORiIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImJuZk1hcCIsInJ1bGVOYW1lcyIsImtleXMiLCJyZWR1Y2UiLCJydWxlTmFtZSIsInJ1bGVCTkYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsTUFBTUYsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRyxXQUFXSCxRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNSSxZQUFZSixRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNSyxlQUFlTCxRQUFRLGtCQUFSLENBSHJCO0FBQUEsSUFJTU0sNkJBQTZCTixRQUFRLDhCQUFSLENBSm5DOztBQU1NLElBQUVPLEtBQUYsR0FBWU4sU0FBWixDQUFFTSxLQUFGO0FBQUEsSUFDRUMsUUFERixHQUNlVCxNQURmLENBQ0VTLFFBREY7QUFBQSxJQUVFQyxJQUZGLEdBRVdGLEtBRlgsQ0FFRUUsSUFGRjs7O0FBSU4sSUFBTUMsV0FBV0YsU0FBU0csV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlSLFVBQVVPLFdBQVYsRUFEbEI7QUFBQSxJQUVNRSw0QkFBNEJDLGdCQUFnQlIsMEJBQWhCLENBRmxDO0FBQUEsSUFHTVMsNEJBQTRCLEVBSGxDOztJQUtNQyxjOzs7Ozs7Ozs7OztpRkFDd0RDLDJCLEVBQTZCQyxrQixFQUFvQjtBQUMzRyxzQkFBTUMsaUJBQWlCSCxlQUFlSSxrQkFBZixDQUFrQ2xCLEdBQWxDLEVBQXVDQyxRQUF2QyxFQUFpRGMsMkJBQWpELEVBQThFQyxrQkFBOUUsQ0FBdkI7O0FBRUEseUJBQU9DLGNBQVA7QUFDRDs7OytDQUV5QmpCLEcsRUFBS0MsUSxFQUFtSDtBQUFBLHNCQUF6R2MsMkJBQXlHLHVFQUEzRUoseUJBQTJFO0FBQUEsc0JBQWhESyxrQkFBZ0QsdUVBQTNCSCx5QkFBMkI7O0FBQ2hKWiw2QkFBV2tCLE9BQU9DLE1BQVAsQ0FBY25CLFFBQWQsRUFBd0JlLGtCQUF4QixDQUFYLENBRGdKLENBQ3hGOztBQUV4RCxzQkFBTUssUUFBUWIsU0FBU2MsWUFBVCxDQUFzQnRCLEdBQXRCLENBQWQ7QUFBQSxzQkFDTXVCLE9BQU9iLFVBQVVjLGFBQVYsQ0FBd0JILEtBQXhCLENBRGI7QUFBQSxzQkFFTUksUUFBUXZCLFVBQVV3QixhQUFWLENBQXdCSCxJQUF4QixFQUE4QnRCLFFBQTlCLENBRmQ7O0FBSUFNLHVCQUFLa0IsS0FBTCxFQUFZViwyQkFBWjs7QUFFQSxzQkFBTUUsaUJBQWlCLElBQUlILGNBQUosQ0FBbUJXLEtBQW5CLENBQXZCOztBQUVBLHlCQUFPUixjQUFQO0FBQ0Q7Ozs7RUFuQjBCZCxZOztBQXNCN0J3QixPQUFPQyxPQUFQLEdBQWlCZCxjQUFqQjs7QUFFQUEsZUFBZWIsUUFBZixHQUEwQkEsUUFBMUI7O0FBRUFhLGVBQWVkLEdBQWYsR0FBcUJBLEdBQXJCOztBQUVBYyxlQUFlViwwQkFBZixHQUE0Q0EsMEJBQTVDOztBQUVBLFNBQVNRLGVBQVQsQ0FBeUJpQixNQUF6QixFQUFpQztBQUMvQixVQUFNQyxZQUFZWCxPQUFPWSxJQUFQLENBQVlGLE1BQVosQ0FBbEI7QUFBQSxVQUNNN0IsTUFBTThCLFVBQVVFLE1BQVYsQ0FBaUIsVUFBU2hDLEdBQVQsRUFBY2lDLFFBQWQsRUFBd0I7QUFDN0MsZ0JBQU1DLFVBQVVMLE9BQU9JLFFBQVAsQ0FBaEI7O0FBRUFqQyx1QkFBU0EsR0FBVCxHQUFla0MsT0FBZjs7QUFFQSxtQkFBT2xDLEdBQVA7QUFDRCxPQU5LLEVBTUgsRUFORyxDQURaO0FBQUEsVUFRTXFCLFFBQVFiLFNBQVNjLFlBQVQsQ0FBc0J0QixHQUF0QixDQVJkO0FBQUEsVUFTTXVCLE9BQU9iLFVBQVVjLGFBQVYsQ0FBd0JILEtBQXhCLENBVGI7QUFBQSxVQVVNSSxRQUFRdkIsVUFBVXdCLGFBQVYsQ0FBd0JILElBQXhCLENBVmQ7O0FBWUEsYUFBT0UsS0FBUDtBQUNEIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwJyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgcHVzaCB9ID0gYXJyYXk7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcyA9IHJ1bGVzRnJvbUJORk1hcChkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcCksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0ge307XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXNBbmRBZGRpdGlvbmFsTWFwcGluZ3MoY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgbm9kZSA9IGJuZlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUsIG1hcHBpbmdzKTtcblxuICAgIHB1c2gocnVsZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyk7XG4gICAgXG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG5cbkZsb3JlbmNlUGFyc2VyLm1hcHBpbmdzID0gbWFwcGluZ3M7XG5cbkZsb3JlbmNlUGFyc2VyLmJuZiA9IGJuZjtcblxuRmxvcmVuY2VQYXJzZXIuZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcDtcblxuZnVuY3Rpb24gcnVsZXNGcm9tQk5GTWFwKGJuZk1hcCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBPYmplY3Qua2V5cyhibmZNYXApLFxuICAgICAgICBibmYgPSBydWxlTmFtZXMucmVkdWNlKGZ1bmN0aW9uKGJuZiwgcnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBydWxlQk5GID0gYm5mTWFwW3J1bGVOYW1lXTtcbiAgXG4gICAgICAgICAgYm5mID0gYCR7Ym5mfSR7cnVsZUJORn1gO1xuICBcbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9LCAnJyksXG4gICAgICAgIGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tQk5GKGJuZiksXG4gICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl19