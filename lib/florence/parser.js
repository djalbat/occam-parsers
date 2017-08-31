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
    customGrammarUtilities = require('../utilities/customGrammar'),
    defaultCustomGrammarBNFMap = require('./defaultCustomGrammarBNFMap');

var array = necessary.array,
    BNFLexer = lexers.BNFLexer,
    push = array.push;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    defaultCustomGrammarRules = customGrammarUtilities.rulesFromBNFMap(defaultCustomGrammarBNFMap),
    defaultCombinedCustomGrammarsRules = defaultCustomGrammarRules,
    ///
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
                  var combinedCustomGrammarsRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCombinedCustomGrammarsRules;
                  var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

                  combinedCustomGrammarsRules = customGrammarUtilities.addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules); ///

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

Object.assign(FlorenceParser, {
      bnf: bnf,
      mappings: mappings,
      defaultCustomGrammarBNFMap: defaultCustomGrammarBNFMap
});

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiY3VzdG9tR3JhbW1hclV0aWxpdGllcyIsImRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwIiwiYXJyYXkiLCJCTkZMZXhlciIsInB1c2giLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcyIsInJ1bGVzRnJvbUJORk1hcCIsImRlZmF1bHRDb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRmxvcmVuY2VQYXJzZXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkZBbmRNYXBwaW5ncyIsImFkZFF1YWxpZmllZEFuZFVucXVhbGlmaWVkU3RhdGVtZW50QW5kTWV0YXN0YXRlbWVudFJ1bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21CTkYiLCJydWxlc05vZGUiLCJydWxlc05vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLE1BQU1GLFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUcsV0FBV0gsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUksWUFBWUosUUFBUSxlQUFSLENBRmxCO0FBQUEsSUFHTUssZUFBZUwsUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1NLHlCQUF5Qk4sUUFBUSw0QkFBUixDQUovQjtBQUFBLElBS01PLDZCQUE2QlAsUUFBUSw4QkFBUixDQUxuQzs7QUFPTSxJQUFFUSxLQUFGLEdBQVlQLFNBQVosQ0FBRU8sS0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZVYsTUFEZixDQUNFVSxRQURGO0FBQUEsSUFFRUMsSUFGRixHQUVXRixLQUZYLENBRUVFLElBRkY7OztBQUlOLElBQU1DLFdBQVdGLFNBQVNHLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZVCxVQUFVUSxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsNEJBQTRCUix1QkFBdUJTLGVBQXZCLENBQXVDUiwwQkFBdkMsQ0FGbEM7QUFBQSxJQUdNUyxxQ0FBcUNGLHlCQUgzQztBQUFBLElBR3NFO0FBQzlERyw0QkFBNEIsRUFKcEM7O0lBTU1DLGM7Ozs7Ozs7Ozs7O2lGQUN3REMsMkIsRUFBNkJDLGtCLEVBQW9CO0FBQzNHLHNCQUFNQyxpQkFBaUJILGVBQWVJLGtCQUFmLENBQWtDcEIsR0FBbEMsRUFBdUNDLFFBQXZDLEVBQWlEZ0IsMkJBQWpELEVBQThFQyxrQkFBOUUsQ0FBdkI7O0FBRUEseUJBQU9DLGNBQVA7QUFDRDs7OytDQUV5Qm5CLEcsRUFBS0MsUSxFQUE0SDtBQUFBLHNCQUFsSGdCLDJCQUFrSCx1RUFBcEZILGtDQUFvRjtBQUFBLHNCQUFoREksa0JBQWdELHVFQUEzQkgseUJBQTJCOztBQUN6SkUsZ0RBQThCYix1QkFBdUJpQix3REFBdkIsQ0FBZ0ZKLDJCQUFoRixDQUE5QixDQUR5SixDQUNaOztBQUU3SWhCLDZCQUFXcUIsT0FBT0MsTUFBUCxDQUFjdEIsUUFBZCxFQUF3QmlCLGtCQUF4QixDQUFYLENBSHlKLENBR2pHOztBQUV4RCxzQkFBTU0sUUFBUWYsU0FBU2dCLFlBQVQsQ0FBc0J6QixHQUF0QixDQUFkO0FBQUEsc0JBQ00wQixZQUFZZixVQUFVZ0Isa0JBQVYsQ0FBNkJILEtBQTdCLENBRGxCO0FBQUEsc0JBRU1JLFFBQVExQixVQUFVMkIsYUFBVixDQUF3QkgsU0FBeEIsRUFBbUN6QixRQUFuQyxDQUZkOztBQUlBTyx1QkFBS29CLEtBQUwsRUFBWVgsMkJBQVo7O0FBRUEsc0JBQU1FLGlCQUFpQixJQUFJSCxjQUFKLENBQW1CWSxLQUFuQixDQUF2Qjs7QUFFQSx5QkFBT1QsY0FBUDtBQUNEOzs7O0VBckIwQmhCLFk7O0FBd0I3Qm1CLE9BQU9DLE1BQVAsQ0FBY1AsY0FBZCxFQUE4QjtBQUM1QmhCLFdBQUtBLEdBRHVCO0FBRTVCQyxnQkFBVUEsUUFGa0I7QUFHNUJJLGtDQUE0QkE7QUFIQSxDQUE5Qjs7QUFNQXlCLE9BQU9DLE9BQVAsR0FBaUJmLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgY3VzdG9tR3JhbW1hclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcCA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBwdXNoIH0gPSBhcnJheTtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzID0gY3VzdG9tR3JhbW1hclV0aWxpdGllcy5ydWxlc0Zyb21CTkZNYXAoZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXApLFxuICAgICAgZGVmYXVsdENvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyA9IGRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMsIC8vL1xuICAgICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0ge307XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXNBbmRBZGRpdGlvbmFsTWFwcGluZ3MoY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyA9IGRlZmF1bHRDb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyA9IGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBjdXN0b21HcmFtbWFyVXRpbGl0aWVzLmFkZFF1YWxpZmllZEFuZFVucXVhbGlmaWVkU3RhdGVtZW50QW5kTWV0YXN0YXRlbWVudFJ1bGVzKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyk7ICAvLy9cblxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzTm9kZSA9IGJuZlBhcnNlci5ydWxlc05vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlLCBtYXBwaW5ncyk7XG5cbiAgICBwdXNoKHJ1bGVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMpO1xuXG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VQYXJzZXIsIHtcbiAgYm5mOiBibmYsXG4gIG1hcHBpbmdzOiBtYXBwaW5ncyxcbiAgZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXA6IGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwICBcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19