'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var BNFParser = require('../bnf/parser'),
    parserUtilities = require('../utilities/parser'),
    QualifiedCustomGrammarRule = require('./customGrammar/rule/qualified'),
    UnqualifiedCustomGrammarRule = require('./customGrammar/rule/unqualified');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var customGrammar = function () {
      function customGrammar() {
            _classCallCheck(this, customGrammar);
      }

      _createClass(customGrammar, null, [{
            key: 'rulesFromBNFMap',
            value: function rulesFromBNFMap(bnfMap) {
                  var ruleNames = Object.keys(bnfMap),
                      bnf = ruleNames.reduce(function (bnf, ruleName) {
                        var ruleBNF = bnfMap[ruleName];

                        bnf = '' + bnf + ruleBNF;

                        return bnf;
                  }, ''),
                      lines = bnfLexer.linesFromBNF(bnf),
                      rulesNode = bnfParser.rulesNodeFromLines(lines),
                      rules = BNFParser.generateRules(rulesNode),
                      statementRuleName = 'statement',
                      metastatementRuleName = 'metastatement',
                      qualifiedStatementRuleName = 'qualifiedStatement',
                      unqualifiedStatementRuleName = 'unqualifiedStatement',
                      qualifiedMetastatementRuleName = 'qualifiedMetastatement',
                      unqualifiedMetastatementRuleName = 'unqualifiedMetastatement',
                      statementRule = parserUtilities.findRuleByName(statementRuleName, rules),
                      metastatementRule = parserUtilities.findRuleByName(metastatementRuleName, rules),
                      qualifiedStatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndRule(qualifiedStatementRuleName, statementRule),
                      unqualifiedStatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndRule(unqualifiedStatementRuleName, statementRule),
                      qualifiedMetastatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndRule(qualifiedMetastatementRuleName, metastatementRule),
                      unqualifiedMetastatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndRule(unqualifiedMetastatementRuleName, metastatementRule);

                  rules.push(qualifiedStatementCustomGrammarRule);
                  rules.push(unqualifiedStatementCustomGrammarRule);
                  rules.push(qualifiedMetastatementCustomGrammarRule);
                  rules.push(unqualifiedMetastatementCustomGrammarRule);

                  return rules;
            }
      }]);

      return customGrammar;
}();

module.exports = customGrammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jdXN0b21HcmFtbWFyLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJwYXJzZXJVdGlsaXRpZXMiLCJRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZSIsIlVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUiLCJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJjdXN0b21HcmFtbWFyIiwiYm5mTWFwIiwicnVsZU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImJuZiIsInJlZHVjZSIsInJ1bGVOYW1lIiwicnVsZUJORiIsImxpbmVzIiwibGluZXNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwic3RhdGVtZW50UnVsZU5hbWUiLCJtZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSIsInVucXVhbGlmaWVkU3RhdGVtZW50UnVsZU5hbWUiLCJxdWFsaWZpZWRNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsInN0YXRlbWVudFJ1bGUiLCJmaW5kUnVsZUJ5TmFtZSIsIm1ldGFzdGF0ZW1lbnRSdWxlIiwicXVhbGlmaWVkU3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUiLCJmcm9tUnVsZU5hbWVBbmRSdWxlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGVBQVIsQ0FBbEI7QUFBQSxJQUNNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FEeEI7QUFBQSxJQUVNRyw2QkFBNkJILFFBQVEsZ0NBQVIsQ0FGbkM7QUFBQSxJQUdNSSwrQkFBK0JKLFFBQVEsa0NBQVIsQ0FIckM7O0lBS1FLLFEsR0FBYU4sTSxDQUFiTSxROzs7QUFFUixJQUFNQyxXQUFXRCxTQUFTRSxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWVAsVUFBVU0sV0FBVixFQURsQjs7SUFHTUUsYTs7Ozs7Ozs0Q0FDbUJDLE0sRUFBUTtBQUM3QixzQkFBTUMsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSCxNQUFaLENBQWxCO0FBQUEsc0JBQ01JLE1BQU1ILFVBQVVJLE1BQVYsQ0FBaUIsVUFBU0QsR0FBVCxFQUFjRSxRQUFkLEVBQXdCO0FBQzdDLDRCQUFNQyxVQUFVUCxPQUFPTSxRQUFQLENBQWhCOztBQUVBRixtQ0FBU0EsR0FBVCxHQUFlRyxPQUFmOztBQUVBLCtCQUFPSCxHQUFQO0FBQ0QsbUJBTkssRUFNSCxFQU5HLENBRFo7QUFBQSxzQkFRTUksUUFBUVosU0FBU2EsWUFBVCxDQUFzQkwsR0FBdEIsQ0FSZDtBQUFBLHNCQVNNTSxZQUFZWixVQUFVYSxrQkFBVixDQUE2QkgsS0FBN0IsQ0FUbEI7QUFBQSxzQkFVTUksUUFBUXJCLFVBQVVzQixhQUFWLENBQXdCSCxTQUF4QixDQVZkO0FBQUEsc0JBV01JLG9CQUFvQixXQVgxQjtBQUFBLHNCQVlNQyx3QkFBd0IsZUFaOUI7QUFBQSxzQkFhTUMsNkJBQTZCLG9CQWJuQztBQUFBLHNCQWNNQywrQkFBK0Isc0JBZHJDO0FBQUEsc0JBZU1DLGlDQUFpQyx3QkFmdkM7QUFBQSxzQkFnQk1DLG1DQUFtQywwQkFoQnpDO0FBQUEsc0JBaUJNQyxnQkFBZ0I1QixnQkFBZ0I2QixjQUFoQixDQUErQlAsaUJBQS9CLEVBQWtERixLQUFsRCxDQWpCdEI7QUFBQSxzQkFrQk1VLG9CQUFvQjlCLGdCQUFnQjZCLGNBQWhCLENBQStCTixxQkFBL0IsRUFBc0RILEtBQXRELENBbEIxQjtBQUFBLHNCQW1CTVcsc0NBQXNDLElBQUk5QiwyQkFBMkIrQixtQkFBL0IsQ0FBbURSLDBCQUFuRCxFQUErRUksYUFBL0UsQ0FuQjVDO0FBQUEsc0JBb0JNSyx3Q0FBd0MsSUFBSS9CLDZCQUE2QjhCLG1CQUFqQyxDQUFxRFAsNEJBQXJELEVBQW1GRyxhQUFuRixDQXBCOUM7QUFBQSxzQkFxQk1NLDBDQUEwQyxJQUFJakMsMkJBQTJCK0IsbUJBQS9CLENBQW1ETiw4QkFBbkQsRUFBbUZJLGlCQUFuRixDQXJCaEQ7QUFBQSxzQkFzQk1LLDRDQUE0QyxJQUFJakMsNkJBQTZCOEIsbUJBQWpDLENBQXFETCxnQ0FBckQsRUFBdUZHLGlCQUF2RixDQXRCbEQ7O0FBd0JBVix3QkFBTWdCLElBQU4sQ0FBV0wsbUNBQVg7QUFDQVgsd0JBQU1nQixJQUFOLENBQVdILHFDQUFYO0FBQ0FiLHdCQUFNZ0IsSUFBTixDQUFXRix1Q0FBWDtBQUNBZCx3QkFBTWdCLElBQU4sQ0FBV0QseUNBQVg7O0FBRUEseUJBQU9mLEtBQVA7QUFDRDs7Ozs7O0FBR0hpQixPQUFPQyxPQUFQLEdBQWlCL0IsYUFBakIiLCJmaWxlIjoiY3VzdG9tR3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIHBhcnNlclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXInKSxcbiAgICAgIFF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlID0gcmVxdWlyZSgnLi9jdXN0b21HcmFtbWFyL3J1bGUvcXVhbGlmaWVkJyksXG4gICAgICBVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlID0gcmVxdWlyZSgnLi9jdXN0b21HcmFtbWFyL3J1bGUvdW5xdWFsaWZpZWQnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgY3VzdG9tR3JhbW1hciB7XG4gIHN0YXRpYyBydWxlc0Zyb21CTkZNYXAoYm5mTWFwKSB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gT2JqZWN0LmtleXMoYm5mTWFwKSxcbiAgICAgICAgICBibmYgPSBydWxlTmFtZXMucmVkdWNlKGZ1bmN0aW9uKGJuZiwgcnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVCTkYgPSBibmZNYXBbcnVsZU5hbWVdO1xuICBcbiAgICAgICAgICAgIGJuZiA9IGAke2JuZn0ke3J1bGVCTkZ9YDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzTm9kZSA9IGJuZlBhcnNlci5ydWxlc05vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRSdWxlTmFtZSA9ICdzdGF0ZW1lbnQnLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9ICdtZXRhc3RhdGVtZW50JyxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSA9ICdxdWFsaWZpZWRTdGF0ZW1lbnQnLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50UnVsZU5hbWUgPSAndW5xdWFsaWZpZWRTdGF0ZW1lbnQnLFxuICAgICAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9ICdxdWFsaWZpZWRNZXRhc3RhdGVtZW50JyxcbiAgICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9ICd1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQnLFxuICAgICAgICAgIHN0YXRlbWVudFJ1bGUgPSBwYXJzZXJVdGlsaXRpZXMuZmluZFJ1bGVCeU5hbWUoc3RhdGVtZW50UnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50UnVsZSA9IHBhcnNlclV0aWxpdGllcy5maW5kUnVsZUJ5TmFtZShtZXRhc3RhdGVtZW50UnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSA9IG5ldyBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZS5mcm9tUnVsZU5hbWVBbmRSdWxlKHF1YWxpZmllZFN0YXRlbWVudFJ1bGVOYW1lLCBzdGF0ZW1lbnRSdWxlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlID0gbmV3IFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUuZnJvbVJ1bGVOYW1lQW5kUnVsZSh1bnF1YWxpZmllZFN0YXRlbWVudFJ1bGVOYW1lLCBzdGF0ZW1lbnRSdWxlKSxcbiAgICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUgPSBuZXcgUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUuZnJvbVJ1bGVOYW1lQW5kUnVsZShxdWFsaWZpZWRNZXRhc3RhdGVtZW50UnVsZU5hbWUsIG1ldGFzdGF0ZW1lbnRSdWxlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSA9IG5ldyBVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlLmZyb21SdWxlTmFtZUFuZFJ1bGUodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50UnVsZU5hbWUsIG1ldGFzdGF0ZW1lbnRSdWxlKTtcblxuICAgIHJ1bGVzLnB1c2gocXVhbGlmaWVkU3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpO1xuICAgIHJ1bGVzLnB1c2godW5xdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSk7XG4gICAgcnVsZXMucHVzaChxdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpO1xuICAgIHJ1bGVzLnB1c2godW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1c3RvbUdyYW1tYXI7XG4iXX0=