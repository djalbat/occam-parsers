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
    termDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/term'),
    statementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/statement'),
    expressionDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/expression'),
    metastatementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/metastatement');

var BNFLexer = lexers.BNFLexer,
    push = arrayUtilities.push,
    rulesFromBNFs = customGrammarUtilities.rulesFromBNFs,
    addQualifiedAndUnqualifiedStatementAndMetastatementRules = customGrammarUtilities.addQualifiedAndUnqualifiedStatementAndMetastatementRules;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    defaultCustomGrammarBNFs = [termDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF],
    defaultCustomGrammarRules = rulesFromBNFs(defaultCustomGrammarBNFs),
    defaultCombinedCustomGrammarsRules = defaultCustomGrammarRules; ///;

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
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
      var florenceParser = FlorenceParser.fromBNF(bnf);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

Object.assign(FlorenceParser, {
  bnf: bnf
});

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsImFycmF5VXRpbGl0aWVzIiwiY3VzdG9tR3JhbW1hclV0aWxpdGllcyIsInRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsInN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwibWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiQk5GTGV4ZXIiLCJwdXNoIiwicnVsZXNGcm9tQk5GcyIsImFkZFF1YWxpZmllZEFuZFVucXVhbGlmaWVkU3RhdGVtZW50QW5kTWV0YXN0YXRlbWVudFJ1bGVzIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImRlZmF1bHRDdXN0b21HcmFtbWFyQk5GcyIsImRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMiLCJkZWZhdWx0Q29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzIiwiRmxvcmVuY2VQYXJzZXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVRva2VucyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUJORiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksaUJBQWlCSixRQUFRLG9CQUFSLENBSHZCO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLDRCQUFSLENBSi9CO0FBQUEsSUFLTU0sOEJBQThCTixRQUFRLGdDQUFSLENBTHBDO0FBQUEsSUFNTU8sbUNBQW1DUCxRQUFRLHFDQUFSLENBTnpDO0FBQUEsSUFPTVEsb0NBQW9DUixRQUFRLHNDQUFSLENBUDFDO0FBQUEsSUFRTVMsdUNBQXVDVCxRQUFRLHlDQUFSLENBUjdDOztBQVVNLElBQUVVLFFBQUYsR0FBZVgsTUFBZixDQUFFVyxRQUFGO0FBQUEsSUFDRUMsSUFERixHQUNXUCxjQURYLENBQ0VPLElBREY7QUFBQSxJQUVFQyxhQUZGLEdBRThFUCxzQkFGOUUsQ0FFRU8sYUFGRjtBQUFBLElBRWlCQyx3REFGakIsR0FFOEVSLHNCQUY5RSxDQUVpQlEsd0RBRmpCOzs7QUFJTixJQUFNQyxXQUFXSixTQUFTSyxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWWQsVUFBVWEsV0FBVixFQURsQjtBQUFBLElBRU1FLDJCQUEyQixDQUN6QlgsMkJBRHlCLEVBRXpCRSxpQ0FGeUIsRUFHekJELGdDQUh5QixFQUl6QkUsb0NBSnlCLENBRmpDO0FBQUEsSUFRTVMsNEJBQTRCTixjQUFjSyx3QkFBZCxDQVJsQztBQUFBLElBU01FLHFDQUFxQ0QseUJBVDNDLEMsQ0FTc0U7O0lBRWhFRSxjOzs7Ozs7Ozs7Ozs0QkFDV25CLEcsRUFBdUU7QUFBQSxVQUFsRW9CLDJCQUFrRSx1RUFBcENGLGtDQUFvQzs7QUFDcEZFLG9DQUE4QlIseURBQXlEUSwyQkFBekQsQ0FBOUIsQ0FEb0YsQ0FDa0M7O0FBRXRILFVBQU1DLFNBQVNSLFNBQVNTLGFBQVQsQ0FBdUJ0QixHQUF2QixDQUFmO0FBQUEsVUFDTXVCLFlBQVlSLFVBQVVTLG1CQUFWLENBQThCSCxNQUE5QixDQURsQjtBQUFBLFVBRU1JLFFBQVF4QixVQUFVeUIsYUFBVixDQUF3QkgsU0FBeEIsQ0FGZDs7QUFJQWIsV0FBS2UsS0FBTCxFQUFZTCwyQkFBWjs7QUFFQSxVQUFNTyxpQkFBaUIsSUFBSVIsY0FBSixDQUFtQk0sS0FBbkIsQ0FBdkI7O0FBRUEsYUFBT0UsY0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGlCQUFpQlIsZUFBZVMsT0FBZixDQUF1QjVCLEdBQXZCLENBQXZCOztBQUVBLGFBQU8yQixjQUFQO0FBQ0Q7Ozs7RUFuQjBCekIsWTs7QUFzQjdCMkIsT0FBT0MsTUFBUCxDQUFjWCxjQUFkLEVBQThCO0FBQzVCbkI7QUFENEIsQ0FBOUI7O0FBSUErQixPQUFPQyxPQUFQLEdBQWlCYixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGN1c3RvbUdyYW1tYXJVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hcicpLFxuICAgICAgdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GID0gcmVxdWlyZSgnLi9kZWZhdWx0Q3VzdG9tR3JhbW1hckJORi90ZXJtJyksXG4gICAgICBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYvc3RhdGVtZW50JyksXG4gICAgICBleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyQk5GL2V4cHJlc3Npb24nKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYvbWV0YXN0YXRlbWVudCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBydWxlc0Zyb21CTkZzLCBhZGRRdWFsaWZpZWRBbmRVbnF1YWxpZmllZFN0YXRlbWVudEFuZE1ldGFzdGF0ZW1lbnRSdWxlcyB9ID0gY3VzdG9tR3JhbW1hclV0aWxpdGllcztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORnMgPSBbXG4gICAgICAgIHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORixcbiAgICAgICAgZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GLFxuICAgICAgICBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcyA9IHJ1bGVzRnJvbUJORnMoZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZzKSxcbiAgICAgIGRlZmF1bHRDb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzOyAvLy87XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkYoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBkZWZhdWx0Q29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKSB7XG4gICAgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzID0gYWRkUXVhbGlmaWVkQW5kVW5xdWFsaWZpZWRTdGF0ZW1lbnRBbmRNZXRhc3RhdGVtZW50UnVsZXMoY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKTsgIC8vL1xuXG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzTm9kZSA9IGJuZlBhcnNlci5ydWxlc05vZGVGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUpO1xuXG4gICAgcHVzaChydWxlcywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKTtcblxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlUGFyc2VyLCB7XG4gIGJuZlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=