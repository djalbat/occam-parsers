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
    customGrammarDefaultBNFMap = require('./customGrammarDefaultBNFMap');

var array = necessary.array,
    BNFLexer = lexers.BNFLexer,
    push = array.push;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    customGrammarDefaultRules = customGrammarUtilities.rulesFromBNFMap(customGrammarDefaultBNFMap),
    defaultAdditionalMappings = {};

var FlorenceParser = function (_CommonParser) {
      _inherits(FlorenceParser, _CommonParser);

      function FlorenceParser() {
            _classCallCheck(this, FlorenceParser);

            return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
      }

      _createClass(FlorenceParser, null, [{
            key: 'fromCustomGrammarRulesAndAdditionalMappings',
            value: function fromCustomGrammarRulesAndAdditionalMappings(customGrammarRules, additionalMappings) {
                  var florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, customGrammarRules, additionalMappings);

                  return florenceParser;
            }
      }, {
            key: 'fromBNFAndMappings',
            value: function fromBNFAndMappings(bnf, mappings) {
                  var customGrammarRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : customGrammarDefaultRules;
                  var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

                  customGrammarRules = customGrammarUtilities.replaceStatementAndMetaStatementRules(customGrammarRules); ///

                  mappings = Object.assign(mappings, additionalMappings); ///

                  var lines = bnfLexer.linesFromBNF(bnf),
                      rulesNode = bnfParser.rulesNodeFromLines(lines),
                      rules = BNFParser.generateRules(rulesNode, mappings);

                  push(rules, customGrammarRules);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiY3VzdG9tR3JhbW1hclV0aWxpdGllcyIsImN1c3RvbUdyYW1tYXJEZWZhdWx0Qk5GTWFwIiwiYXJyYXkiLCJCTkZMZXhlciIsInB1c2giLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiY3VzdG9tR3JhbW1hckRlZmF1bHRSdWxlcyIsInJ1bGVzRnJvbUJORk1hcCIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJGbG9yZW5jZVBhcnNlciIsImN1c3RvbUdyYW1tYXJSdWxlcyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUJORkFuZE1hcHBpbmdzIiwicmVwbGFjZVN0YXRlbWVudEFuZE1ldGFTdGF0ZW1lbnRSdWxlcyIsIk9iamVjdCIsImFzc2lnbiIsImxpbmVzIiwibGluZXNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ01DLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxNQUFNRixRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01HLFdBQVdILFFBQVEsWUFBUixDQURqQjtBQUFBLElBRU1JLFlBQVlKLFFBQVEsZUFBUixDQUZsQjtBQUFBLElBR01LLGVBQWVMLFFBQVEsa0JBQVIsQ0FIckI7QUFBQSxJQUlNTSx5QkFBeUJOLFFBQVEsNEJBQVIsQ0FKL0I7QUFBQSxJQUtNTyw2QkFBNkJQLFFBQVEsOEJBQVIsQ0FMbkM7O0FBT00sSUFBRVEsS0FBRixHQUFZUCxTQUFaLENBQUVPLEtBQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2VWLE1BRGYsQ0FDRVUsUUFERjtBQUFBLElBRUVDLElBRkYsR0FFV0YsS0FGWCxDQUVFRSxJQUZGOzs7QUFJTixJQUFNQyxXQUFXRixTQUFTRyxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWVQsVUFBVVEsV0FBVixFQURsQjtBQUFBLElBRU1FLDRCQUE0QlIsdUJBQXVCUyxlQUF2QixDQUF1Q1IsMEJBQXZDLENBRmxDO0FBQUEsSUFHTVMsNEJBQTRCLEVBSGxDOztJQUtNQyxjOzs7Ozs7Ozs7Ozt3RUFDK0NDLGtCLEVBQW9CQyxrQixFQUFvQjtBQUN6RixzQkFBTUMsaUJBQWlCSCxlQUFlSSxrQkFBZixDQUFrQ25CLEdBQWxDLEVBQXVDQyxRQUF2QyxFQUFpRGUsa0JBQWpELEVBQXFFQyxrQkFBckUsQ0FBdkI7O0FBRUEseUJBQU9DLGNBQVA7QUFDRDs7OytDQUV5QmxCLEcsRUFBS0MsUSxFQUEwRztBQUFBLHNCQUFoR2Usa0JBQWdHLHVFQUEzRUoseUJBQTJFO0FBQUEsc0JBQWhESyxrQkFBZ0QsdUVBQTNCSCx5QkFBMkI7O0FBQ3ZJRSx1Q0FBcUJaLHVCQUF1QmdCLHFDQUF2QixDQUE2REosa0JBQTdELENBQXJCLENBRHVJLENBQy9COztBQUV4R2YsNkJBQVdvQixPQUFPQyxNQUFQLENBQWNyQixRQUFkLEVBQXdCZ0Isa0JBQXhCLENBQVgsQ0FIdUksQ0FHL0U7O0FBRXhELHNCQUFNTSxRQUFRZCxTQUFTZSxZQUFULENBQXNCeEIsR0FBdEIsQ0FBZDtBQUFBLHNCQUNNeUIsWUFBWWQsVUFBVWUsa0JBQVYsQ0FBNkJILEtBQTdCLENBRGxCO0FBQUEsc0JBRU1JLFFBQVF6QixVQUFVMEIsYUFBVixDQUF3QkgsU0FBeEIsRUFBbUN4QixRQUFuQyxDQUZkOztBQUlBTyx1QkFBS21CLEtBQUwsRUFBWVgsa0JBQVo7O0FBRUEsc0JBQU1FLGlCQUFpQixJQUFJSCxjQUFKLENBQW1CWSxLQUFuQixDQUF2Qjs7QUFFQSx5QkFBT1QsY0FBUDtBQUNEOzs7O0VBckIwQmYsWTs7QUF3QjdCa0IsT0FBT0MsTUFBUCxDQUFjUCxjQUFkLEVBQThCO0FBQzVCZixXQUFLQSxHQUR1QjtBQUU1QkMsZ0JBQVVBLFFBRmtCO0FBRzVCSSxrQ0FBNEJBO0FBSEEsQ0FBOUI7O0FBTUF3QixPQUFPQyxPQUFQLEdBQWlCZixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4vbWFwcGluZ3MnKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIGN1c3RvbUdyYW1tYXJVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hcicpLFxuICAgICAgY3VzdG9tR3JhbW1hckRlZmF1bHRCTkZNYXAgPSByZXF1aXJlKCcuL2N1c3RvbUdyYW1tYXJEZWZhdWx0Qk5GTWFwJyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgcHVzaCB9ID0gYXJyYXk7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgY3VzdG9tR3JhbW1hckRlZmF1bHRSdWxlcyA9IGN1c3RvbUdyYW1tYXJVdGlsaXRpZXMucnVsZXNGcm9tQk5GTWFwKGN1c3RvbUdyYW1tYXJEZWZhdWx0Qk5GTWFwKSxcbiAgICAgIGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MgPSB7fTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJSdWxlc0FuZEFkZGl0aW9uYWxNYXBwaW5ncyhjdXN0b21HcmFtbWFyUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hclJ1bGVzID0gY3VzdG9tR3JhbW1hckRlZmF1bHRSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGN1c3RvbUdyYW1tYXJSdWxlcyA9IGN1c3RvbUdyYW1tYXJVdGlsaXRpZXMucmVwbGFjZVN0YXRlbWVudEFuZE1ldGFTdGF0ZW1lbnRSdWxlcyhjdXN0b21HcmFtbWFyUnVsZXMpOyAgLy8vXG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncyk7IC8vL1xuXG4gICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlc05vZGUgPSBibmZQYXJzZXIucnVsZXNOb2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgcHVzaChydWxlcywgY3VzdG9tR3JhbW1hclJ1bGVzKTtcblxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlUGFyc2VyLCB7XG4gIGJuZjogYm5mLFxuICBtYXBwaW5nczogbWFwcGluZ3MsXG4gIGN1c3RvbUdyYW1tYXJEZWZhdWx0Qk5GTWFwOiBjdXN0b21HcmFtbWFyRGVmYXVsdEJORk1hcCAgXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==