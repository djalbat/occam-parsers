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
    customGrammar = require('./customGrammar'),
    defaultCustomGrammarBNFMap = require('./defaultCustomGrammarBNFMap');

var array = necessary.array,
    BNFLexer = lexers.BNFLexer,
    push = array.push;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    defaultCustomGrammarRules = customGrammar.rulesFromBNFMap(defaultCustomGrammarBNFMap),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiY3VzdG9tR3JhbW1hciIsImRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwIiwiYXJyYXkiLCJCTkZMZXhlciIsInB1c2giLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcyIsInJ1bGVzRnJvbUJORk1hcCIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJGbG9yZW5jZVBhcnNlciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUJORkFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21CTkYiLCJydWxlc05vZGUiLCJydWxlc05vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLE1BQU1GLFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUcsV0FBV0gsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUksWUFBWUosUUFBUSxlQUFSLENBRmxCO0FBQUEsSUFHTUssZUFBZUwsUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1NLGdCQUFnQk4sUUFBUSxpQkFBUixDQUp0QjtBQUFBLElBS01PLDZCQUE2QlAsUUFBUSw4QkFBUixDQUxuQzs7QUFPTSxJQUFFUSxLQUFGLEdBQVlQLFNBQVosQ0FBRU8sS0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZVYsTUFEZixDQUNFVSxRQURGO0FBQUEsSUFFRUMsSUFGRixHQUVXRixLQUZYLENBRUVFLElBRkY7OztBQUlOLElBQU1DLFdBQVdGLFNBQVNHLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZVCxVQUFVUSxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsNEJBQTRCUixjQUFjUyxlQUFkLENBQThCUiwwQkFBOUIsQ0FGbEM7QUFBQSxJQUdNUyw0QkFBNEIsRUFIbEM7O0lBS01DLGM7Ozs7Ozs7Ozs7O2lGQUN3REMsMkIsRUFBNkJDLGtCLEVBQW9CO0FBQzNHLHNCQUFNQyxpQkFBaUJILGVBQWVJLGtCQUFmLENBQWtDbkIsR0FBbEMsRUFBdUNDLFFBQXZDLEVBQWlEZSwyQkFBakQsRUFBOEVDLGtCQUE5RSxDQUF2Qjs7QUFFQSx5QkFBT0MsY0FBUDtBQUNEOzs7K0NBRXlCbEIsRyxFQUFLQyxRLEVBQW1IO0FBQUEsc0JBQXpHZSwyQkFBeUcsdUVBQTNFSix5QkFBMkU7QUFBQSxzQkFBaERLLGtCQUFnRCx1RUFBM0JILHlCQUEyQjs7QUFDaEpiLDZCQUFXbUIsT0FBT0MsTUFBUCxDQUFjcEIsUUFBZCxFQUF3QmdCLGtCQUF4QixDQUFYLENBRGdKLENBQ3hGOztBQUV4RCxzQkFBTUssUUFBUWIsU0FBU2MsWUFBVCxDQUFzQnZCLEdBQXRCLENBQWQ7QUFBQSxzQkFDTXdCLFlBQVliLFVBQVVjLGtCQUFWLENBQTZCSCxLQUE3QixDQURsQjtBQUFBLHNCQUVNSSxRQUFReEIsVUFBVXlCLGFBQVYsQ0FBd0JILFNBQXhCLEVBQW1DdkIsUUFBbkMsQ0FGZDs7QUFJQU8sdUJBQUtrQixLQUFMLEVBQVlWLDJCQUFaOztBQUVBLHNCQUFNRSxpQkFBaUIsSUFBSUgsY0FBSixDQUFtQlcsS0FBbkIsQ0FBdkI7O0FBRUEseUJBQU9SLGNBQVA7QUFDRDs7OztFQW5CMEJmLFk7O0FBc0I3QnlCLE9BQU9DLE9BQVAsR0FBaUJkLGNBQWpCOztBQUVBQSxlQUFlZCxRQUFmLEdBQTBCQSxRQUExQjs7QUFFQWMsZUFBZWYsR0FBZixHQUFxQkEsR0FBckI7O0FBRUFlLGVBQWVWLDBCQUFmLEdBQTRDQSwwQkFBNUMiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBjdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi9jdXN0b21HcmFtbWFyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcCA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBwdXNoIH0gPSBhcnJheTtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzID0gY3VzdG9tR3JhbW1hci5ydWxlc0Zyb21CTkZNYXAoZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXApLFxuICAgICAgZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyA9IHt9O1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzQW5kQWRkaXRpb25hbE1hcHBpbmdzKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzTm9kZSA9IGJuZlBhcnNlci5ydWxlc05vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlLCBtYXBwaW5ncyk7XG5cbiAgICBwdXNoKHJ1bGVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMpO1xuICAgIFxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuXG5GbG9yZW5jZVBhcnNlci5ibmYgPSBibmY7XG5cbkZsb3JlbmNlUGFyc2VyLmRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXA7XG4iXX0=