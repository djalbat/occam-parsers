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
                      rulesNode = bnfParser.rulesNodeFromLines(lines),
                      rules = BNFParser.generateRules(rulesNode, mappings);

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
          rulesNode = bnfParser.rulesNodeFromLines(lines),
          rules = BNFParser.generateRules(rulesNode);

      return rules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAiLCJhcnJheSIsIkJORkxleGVyIiwicHVzaCIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzIiwicnVsZXNGcm9tQk5GTWFwIiwiZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyIsIkZsb3JlbmNlUGFyc2VyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsImxpbmVzRnJvbUJORiIsInJ1bGVzTm9kZSIsInJ1bGVzTm9kZUZyb21MaW5lcyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJibmZNYXAiLCJydWxlTmFtZXMiLCJrZXlzIiwicmVkdWNlIiwicnVsZU5hbWUiLCJydWxlQk5GIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLE1BQU1GLFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUcsV0FBV0gsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUksWUFBWUosUUFBUSxlQUFSLENBRmxCO0FBQUEsSUFHTUssZUFBZUwsUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1NLDZCQUE2Qk4sUUFBUSw4QkFBUixDQUpuQzs7QUFNTSxJQUFFTyxLQUFGLEdBQVlOLFNBQVosQ0FBRU0sS0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZVQsTUFEZixDQUNFUyxRQURGO0FBQUEsSUFFRUMsSUFGRixHQUVXRixLQUZYLENBRUVFLElBRkY7OztBQUlOLElBQU1DLFdBQVdGLFNBQVNHLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZUixVQUFVTyxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsNEJBQTRCQyxnQkFBZ0JSLDBCQUFoQixDQUZsQztBQUFBLElBR01TLDRCQUE0QixFQUhsQzs7SUFLTUMsYzs7Ozs7Ozs7Ozs7aUZBQ3dEQywyQixFQUE2QkMsa0IsRUFBb0I7QUFDM0csc0JBQU1DLGlCQUFpQkgsZUFBZUksa0JBQWYsQ0FBa0NsQixHQUFsQyxFQUF1Q0MsUUFBdkMsRUFBaURjLDJCQUFqRCxFQUE4RUMsa0JBQTlFLENBQXZCOztBQUVBLHlCQUFPQyxjQUFQO0FBQ0Q7OzsrQ0FFeUJqQixHLEVBQUtDLFEsRUFBbUg7QUFBQSxzQkFBekdjLDJCQUF5Ryx1RUFBM0VKLHlCQUEyRTtBQUFBLHNCQUFoREssa0JBQWdELHVFQUEzQkgseUJBQTJCOztBQUNoSlosNkJBQVdrQixPQUFPQyxNQUFQLENBQWNuQixRQUFkLEVBQXdCZSxrQkFBeEIsQ0FBWCxDQURnSixDQUN4Rjs7QUFFeEQsc0JBQU1LLFFBQVFiLFNBQVNjLFlBQVQsQ0FBc0J0QixHQUF0QixDQUFkO0FBQUEsc0JBQ011QixZQUFZYixVQUFVYyxrQkFBVixDQUE2QkgsS0FBN0IsQ0FEbEI7QUFBQSxzQkFFTUksUUFBUXZCLFVBQVV3QixhQUFWLENBQXdCSCxTQUF4QixFQUFtQ3RCLFFBQW5DLENBRmQ7O0FBSUFNLHVCQUFLa0IsS0FBTCxFQUFZViwyQkFBWjs7QUFFQSxzQkFBTUUsaUJBQWlCLElBQUlILGNBQUosQ0FBbUJXLEtBQW5CLENBQXZCOztBQUVBLHlCQUFPUixjQUFQO0FBQ0Q7Ozs7RUFuQjBCZCxZOztBQXNCN0J3QixPQUFPQyxPQUFQLEdBQWlCZCxjQUFqQjs7QUFFQUEsZUFBZWIsUUFBZixHQUEwQkEsUUFBMUI7O0FBRUFhLGVBQWVkLEdBQWYsR0FBcUJBLEdBQXJCOztBQUVBYyxlQUFlViwwQkFBZixHQUE0Q0EsMEJBQTVDOztBQUVBLFNBQVNRLGVBQVQsQ0FBeUJpQixNQUF6QixFQUFpQztBQUMvQixVQUFNQyxZQUFZWCxPQUFPWSxJQUFQLENBQVlGLE1BQVosQ0FBbEI7QUFBQSxVQUNNN0IsTUFBTThCLFVBQVVFLE1BQVYsQ0FBaUIsVUFBU2hDLEdBQVQsRUFBY2lDLFFBQWQsRUFBd0I7QUFDN0MsZ0JBQU1DLFVBQVVMLE9BQU9JLFFBQVAsQ0FBaEI7O0FBRUFqQyx1QkFBU0EsR0FBVCxHQUFla0MsT0FBZjs7QUFFQSxtQkFBT2xDLEdBQVA7QUFDRCxPQU5LLEVBTUgsRUFORyxDQURaO0FBQUEsVUFRTXFCLFFBQVFiLFNBQVNjLFlBQVQsQ0FBc0J0QixHQUF0QixDQVJkO0FBQUEsVUFTTXVCLFlBQVliLFVBQVVjLGtCQUFWLENBQTZCSCxLQUE3QixDQVRsQjtBQUFBLFVBVU1JLFFBQVF2QixVQUFVd0IsYUFBVixDQUF3QkgsU0FBeEIsQ0FWZDs7QUFZQSxhQUFPRSxLQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcCA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBwdXNoIH0gPSBhcnJheTtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzID0gcnVsZXNGcm9tQk5GTWFwKGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwKSxcbiAgICAgIGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MgPSB7fTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlc0FuZEFkZGl0aW9uYWxNYXBwaW5ncyhjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzKTtcbiAgXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyA9IGRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyA9IGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncyk7IC8vL1xuXG4gICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlc05vZGUgPSBibmZQYXJzZXIucnVsZXNOb2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgcHVzaChydWxlcywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKTtcbiAgICBcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcblxuRmxvcmVuY2VQYXJzZXIubWFwcGluZ3MgPSBtYXBwaW5ncztcblxuRmxvcmVuY2VQYXJzZXIuYm5mID0gYm5mO1xuXG5GbG9yZW5jZVBhcnNlci5kZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcCA9IGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwO1xuXG5mdW5jdGlvbiBydWxlc0Zyb21CTkZNYXAoYm5mTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IE9iamVjdC5rZXlzKGJuZk1hcCksXG4gICAgICAgIGJuZiA9IHJ1bGVOYW1lcy5yZWR1Y2UoZnVuY3Rpb24oYm5mLCBydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVCTkYgPSBibmZNYXBbcnVsZU5hbWVdO1xuICBcbiAgICAgICAgICBibmYgPSBgJHtibmZ9JHtydWxlQk5GfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgIH0sICcnKSxcbiAgICAgICAgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXX0=