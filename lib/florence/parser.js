'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    arrayUtilities = require('../utilities/array'),
    customGrammarUtilities = require('../utilities/customGrammar'),
    defaultCustomGrammarTermBNF = require('./defaultCustomGrammar/termBNF'),
    defaultCustomGrammarExpressionBNF = require('./defaultCustomGrammar/expressionBNF'),
    defaultCustomGrammarStatementBNF = require('./defaultCustomGrammar/statementBNF'),
    defaultCustomGrammarMetastatementBNF = require('./defaultCustomGrammar/metastatementBNF');

var BNFLexer = lexers.BNFLexer,
    push = arrayUtilities.push,
    rulesFromBNFs = customGrammarUtilities.rulesFromBNFs,
    addQualifiedAndUnqualifiedStatementAndMetastatementRules = customGrammarUtilities.addQualifiedAndUnqualifiedStatementAndMetastatementRules;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    defaultCustomGrammarBNFs = [defaultCustomGrammarTermBNF, defaultCustomGrammarExpressionBNF, defaultCustomGrammarStatementBNF, defaultCustomGrammarMetastatementBNF],
    defaultCustomGrammarRules = rulesFromBNFs(defaultCustomGrammarBNFs),
    defaultCombinedCustomGrammarsRules = defaultCustomGrammarRules; ///

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCombinedCustomGrammarsRules',
    value: function fromCombinedCustomGrammarsRules(combinedCustomGrammarsRules) {
      var florenceParser = FlorenceParser.fromBNF(bnf, combinedCustomGrammarsRules);

      return florenceParser;
    }
  }, {
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var combinedCustomGrammarsRules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCombinedCustomGrammarsRules;

      combinedCustomGrammarsRules = addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules); ///

      var tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode);

      push(rules, combinedCustomGrammarsRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return FlorenceParser.fromBNF(bnf);
    } ///

  }]);

  return FlorenceParser;
}(CommonParser);

Object.assign(FlorenceParser, {
  bnf: bnf,
  defaultCustomGrammarTermBNF: defaultCustomGrammarTermBNF,
  defaultCustomGrammarExpressionBNF: defaultCustomGrammarExpressionBNF,
  defaultCustomGrammarStatementBNF: defaultCustomGrammarStatementBNF,
  defaultCustomGrammarMetastatementBNF: defaultCustomGrammarMetastatementBNF
});

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsImFycmF5VXRpbGl0aWVzIiwiY3VzdG9tR3JhbW1hclV0aWxpdGllcyIsImRlZmF1bHRDdXN0b21HcmFtbWFyVGVybUJORiIsImRlZmF1bHRDdXN0b21HcmFtbWFyRXhwcmVzc2lvbkJORiIsImRlZmF1bHRDdXN0b21HcmFtbWFyU3RhdGVtZW50Qk5GIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJNZXRhc3RhdGVtZW50Qk5GIiwiQk5GTGV4ZXIiLCJwdXNoIiwicnVsZXNGcm9tQk5GcyIsImFkZFF1YWxpZmllZEFuZFVucXVhbGlmaWVkU3RhdGVtZW50QW5kTWV0YXN0YXRlbWVudFJ1bGVzIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImRlZmF1bHRDdXN0b21HcmFtbWFyQk5GcyIsImRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMiLCJkZWZhdWx0Q29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzIiwiRmxvcmVuY2VQYXJzZXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVRva2VucyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksaUJBQWlCSixRQUFRLG9CQUFSLENBSHZCO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLDRCQUFSLENBSi9CO0FBQUEsSUFLTU0sOEJBQThCTixRQUFRLGdDQUFSLENBTHBDO0FBQUEsSUFNTU8sb0NBQW9DUCxRQUFRLHNDQUFSLENBTjFDO0FBQUEsSUFPTVEsbUNBQW1DUixRQUFRLHFDQUFSLENBUHpDO0FBQUEsSUFRTVMsdUNBQXVDVCxRQUFRLHlDQUFSLENBUjdDOztBQVVNLElBQUVVLFFBQUYsR0FBZVgsTUFBZixDQUFFVyxRQUFGO0FBQUEsSUFDRUMsSUFERixHQUNXUCxjQURYLENBQ0VPLElBREY7QUFBQSxJQUVFQyxhQUZGLEdBRThFUCxzQkFGOUUsQ0FFRU8sYUFGRjtBQUFBLElBRWlCQyx3REFGakIsR0FFOEVSLHNCQUY5RSxDQUVpQlEsd0RBRmpCOzs7QUFJTixJQUFNQyxXQUFXSixTQUFTSyxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWWQsVUFBVWEsV0FBVixFQURsQjtBQUFBLElBRU1FLDJCQUEyQixDQUN6QlgsMkJBRHlCLEVBRXpCQyxpQ0FGeUIsRUFHekJDLGdDQUh5QixFQUl6QkMsb0NBSnlCLENBRmpDO0FBQUEsSUFRTVMsNEJBQTRCTixjQUFjSyx3QkFBZCxDQVJsQztBQUFBLElBU01FLHFDQUFxQ0QseUJBVDNDLEMsQ0FTc0U7O0lBRWhFRSxjOzs7Ozs7Ozs7OztvREFDbUNDLDJCLEVBQTZCO0FBQ2xFLFVBQU1DLGlCQUFpQkYsZUFBZUcsT0FBZixDQUF1QnRCLEdBQXZCLEVBQTRCb0IsMkJBQTVCLENBQXZCOztBQUVBLGFBQU9DLGNBQVA7QUFDRDs7OzRCQUVjckIsRyxFQUF1RTtBQUFBLFVBQWxFb0IsMkJBQWtFLHVFQUFwQ0Ysa0NBQW9DOztBQUNwRkUsb0NBQThCUix5REFBeURRLDJCQUF6RCxDQUE5QixDQURvRixDQUNrQzs7QUFFdEgsVUFBTUcsU0FBU1YsU0FBU1csYUFBVCxDQUF1QnhCLEdBQXZCLENBQWY7QUFBQSxVQUNNeUIsWUFBWVYsVUFBVVcsbUJBQVYsQ0FBOEJILE1BQTlCLENBRGxCO0FBQUEsVUFFTUksUUFBUTFCLFVBQVUyQixhQUFWLENBQXdCSCxTQUF4QixDQUZkOztBQUlBZixXQUFLaUIsS0FBTCxFQUFZUCwyQkFBWjs7QUFFQSxVQUFNQyxpQkFBaUIsSUFBSUYsY0FBSixDQUFtQlEsS0FBbkIsQ0FBdkI7O0FBRUEsYUFBT04sY0FBUDtBQUNEOzs7a0NBRW9CO0FBQUUsYUFBT0YsZUFBZUcsT0FBZixDQUF1QnRCLEdBQXZCLENBQVA7QUFBcUMsSyxDQUFDOzs7OztFQXJCbENFLFk7O0FBd0I3QjJCLE9BQU9DLE1BQVAsQ0FBY1gsY0FBZCxFQUE4QjtBQUM1Qm5CLFVBRDRCO0FBRTVCSywwREFGNEI7QUFHNUJDLHNFQUg0QjtBQUk1QkMsb0VBSjRCO0FBSzVCQztBQUw0QixDQUE5Qjs7QUFRQXVCLE9BQU9DLE9BQVAsR0FBaUJiLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgY3VzdG9tR3JhbW1hclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hclRlcm1CTkYgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyL3Rlcm1CTkYnKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyRXhwcmVzc2lvbkJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXIvZXhwcmVzc2lvbkJORicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJTdGF0ZW1lbnRCTkYgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyL3N0YXRlbWVudEJORicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJNZXRhc3RhdGVtZW50Qk5GID0gcmVxdWlyZSgnLi9kZWZhdWx0Q3VzdG9tR3JhbW1hci9tZXRhc3RhdGVtZW50Qk5GJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUJORnMsIGFkZFF1YWxpZmllZEFuZFVucXVhbGlmaWVkU3RhdGVtZW50QW5kTWV0YXN0YXRlbWVudFJ1bGVzIH0gPSBjdXN0b21HcmFtbWFyVXRpbGl0aWVzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GcyA9IFtcbiAgICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJUZXJtQk5GLFxuICAgICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckV4cHJlc3Npb25CTkYsXG4gICAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyU3RhdGVtZW50Qk5GLCBcbiAgICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJNZXRhc3RhdGVtZW50Qk5GXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcyA9IHJ1bGVzRnJvbUJORnMoZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZzKSxcbiAgICAgIGRlZmF1bHRDb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzOyAvLy9cblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyhjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkYoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBkZWZhdWx0Q29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKSB7XG4gICAgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzID0gYWRkUXVhbGlmaWVkQW5kVW5xdWFsaWZpZWRTdGF0ZW1lbnRBbmRNZXRhc3RhdGVtZW50UnVsZXMoY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKTsgIC8vL1xuXG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzTm9kZSA9IGJuZlBhcnNlci5ydWxlc05vZGVGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUpO1xuXG4gICAgcHVzaChydWxlcywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKTtcblxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEZsb3JlbmNlUGFyc2VyLmZyb21CTkYoYm5mKTsgfSAvLy9cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZVBhcnNlciwge1xuICBibmYsXG4gIGRlZmF1bHRDdXN0b21HcmFtbWFyVGVybUJORixcbiAgZGVmYXVsdEN1c3RvbUdyYW1tYXJFeHByZXNzaW9uQk5GLFxuICBkZWZhdWx0Q3VzdG9tR3JhbW1hclN0YXRlbWVudEJORixcbiAgZGVmYXVsdEN1c3RvbUdyYW1tYXJNZXRhc3RhdGVtZW50Qk5GXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==