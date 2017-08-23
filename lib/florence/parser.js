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
    customGrammarDefaultBNFMap = require('./customGrammar/defaultBNFMap');

var array = necessary.array,
    BNFLexer = lexers.BNFLexer,
    push = array.push;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    customGrammarDefaultRules = customGrammar.rulesFromBNFMap(customGrammarDefaultBNFMap),
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
      customGrammarDefaultBNFMap: customGrammarDefaultBNFMap
});

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiY3VzdG9tR3JhbW1hciIsImN1c3RvbUdyYW1tYXJEZWZhdWx0Qk5GTWFwIiwiYXJyYXkiLCJCTkZMZXhlciIsInB1c2giLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiY3VzdG9tR3JhbW1hckRlZmF1bHRSdWxlcyIsInJ1bGVzRnJvbUJORk1hcCIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJGbG9yZW5jZVBhcnNlciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUJORkFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21CTkYiLCJydWxlc05vZGUiLCJydWxlc05vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLE1BQU1GLFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUcsV0FBV0gsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUksWUFBWUosUUFBUSxlQUFSLENBRmxCO0FBQUEsSUFHTUssZUFBZUwsUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1NLGdCQUFnQk4sUUFBUSxpQkFBUixDQUp0QjtBQUFBLElBS01PLDZCQUE2QlAsUUFBUSwrQkFBUixDQUxuQzs7QUFPTSxJQUFFUSxLQUFGLEdBQVlQLFNBQVosQ0FBRU8sS0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZVYsTUFEZixDQUNFVSxRQURGO0FBQUEsSUFFRUMsSUFGRixHQUVXRixLQUZYLENBRUVFLElBRkY7OztBQUlOLElBQU1DLFdBQVdGLFNBQVNHLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZVCxVQUFVUSxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsNEJBQTRCUixjQUFjUyxlQUFkLENBQThCUiwwQkFBOUIsQ0FGbEM7QUFBQSxJQUdNUyw0QkFBNEIsRUFIbEM7O0lBS01DLGM7Ozs7Ozs7Ozs7O2lGQUN3REMsMkIsRUFBNkJDLGtCLEVBQW9CO0FBQzNHLHNCQUFNQyxpQkFBaUJILGVBQWVJLGtCQUFmLENBQWtDbkIsR0FBbEMsRUFBdUNDLFFBQXZDLEVBQWlEZSwyQkFBakQsRUFBOEVDLGtCQUE5RSxDQUF2Qjs7QUFFQSx5QkFBT0MsY0FBUDtBQUNEOzs7K0NBRXlCbEIsRyxFQUFLQyxRLEVBQW1IO0FBQUEsc0JBQXpHZSwyQkFBeUcsdUVBQTNFSix5QkFBMkU7QUFBQSxzQkFBaERLLGtCQUFnRCx1RUFBM0JILHlCQUEyQjs7QUFDaEpiLDZCQUFXbUIsT0FBT0MsTUFBUCxDQUFjcEIsUUFBZCxFQUF3QmdCLGtCQUF4QixDQUFYLENBRGdKLENBQ3hGOztBQUV4RCxzQkFBTUssUUFBUWIsU0FBU2MsWUFBVCxDQUFzQnZCLEdBQXRCLENBQWQ7QUFBQSxzQkFDTXdCLFlBQVliLFVBQVVjLGtCQUFWLENBQTZCSCxLQUE3QixDQURsQjtBQUFBLHNCQUVNSSxRQUFReEIsVUFBVXlCLGFBQVYsQ0FBd0JILFNBQXhCLEVBQW1DdkIsUUFBbkMsQ0FGZDs7QUFJQU8sdUJBQUtrQixLQUFMLEVBQVlWLDJCQUFaOztBQUVBLHNCQUFNRSxpQkFBaUIsSUFBSUgsY0FBSixDQUFtQlcsS0FBbkIsQ0FBdkI7O0FBRUEseUJBQU9SLGNBQVA7QUFDRDs7OztFQW5CMEJmLFk7O0FBc0I3QmlCLE9BQU9DLE1BQVAsQ0FBY04sY0FBZCxFQUE4QjtBQUM1QmYsV0FBS0EsR0FEdUI7QUFFNUJDLGdCQUFVQSxRQUZrQjtBQUc1Qkksa0NBQTRCQTtBQUhBLENBQTlCOztBQU1BdUIsT0FBT0MsT0FBUCxHQUFpQmQsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBjdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi9jdXN0b21HcmFtbWFyJyksXG4gICAgICBjdXN0b21HcmFtbWFyRGVmYXVsdEJORk1hcCA9IHJlcXVpcmUoJy4vY3VzdG9tR3JhbW1hci9kZWZhdWx0Qk5GTWFwJyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgcHVzaCB9ID0gYXJyYXk7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgY3VzdG9tR3JhbW1hckRlZmF1bHRSdWxlcyA9IGN1c3RvbUdyYW1tYXIucnVsZXNGcm9tQk5GTWFwKGN1c3RvbUdyYW1tYXJEZWZhdWx0Qk5GTWFwKSxcbiAgICAgIGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MgPSB7fTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlc0FuZEFkZGl0aW9uYWxNYXBwaW5ncyhjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzKTtcbiAgXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyA9IGN1c3RvbUdyYW1tYXJEZWZhdWx0UnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyA9IGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncyk7IC8vL1xuXG4gICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlc05vZGUgPSBibmZQYXJzZXIucnVsZXNOb2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgcHVzaChydWxlcywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKTtcbiAgICBcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZVBhcnNlciwge1xuICBibmY6IGJuZixcbiAgbWFwcGluZ3M6IG1hcHBpbmdzLFxuICBjdXN0b21HcmFtbWFyRGVmYXVsdEJORk1hcDogY3VzdG9tR3JhbW1hckRlZmF1bHRCTkZNYXAgIFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=