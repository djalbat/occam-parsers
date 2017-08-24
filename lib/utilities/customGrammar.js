'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    necessary = require('necessary');

var BNFParser = require('../bnf/parser'),
    parserUtilities = require('../utilities/parser'),
    QualifiedCustomGrammarRule = require('../florence/rule/customGrammar/qualified'),
    UnqualifiedCustomGrammarRule = require('../florence/rule/customGrammar/unqualified');

var BNFLexer = lexers.BNFLexer,
    array = necessary.array,
    filter = array.filter;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    statementRuleName = 'statement',
    metastatementRuleName = 'metastatement',
    qualifiedStatementRuleName = 'qualifiedStatement',
    qualifiedMetastatementRuleName = 'qualifiedMetastatement',
    unqualifiedStatementRuleName = 'unqualifiedStatement',
    unqualifiedMetastatementRuleName = 'unqualifiedMetastatement';

var customGrammarUtilities = function () {
      function customGrammarUtilities() {
            _classCallCheck(this, customGrammarUtilities);
      }

      _createClass(customGrammarUtilities, null, [{
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
                      rules = BNFParser.generateRules(rulesNode);

                  return rules;
            }
      }, {
            key: 'replaceStatementAndMetaStatementRules',
            value: function replaceStatementAndMetaStatementRules(customGrammarRules) {
                  customGrammarRules = customGrammarRules.slice(); ///

                  var statementCustomGrammarRule = parserUtilities.findRuleByName(statementRuleName, customGrammarRules),
                      metastatementCustomGrammarRule = parserUtilities.findRuleByName(metastatementRuleName, customGrammarRules),
                      qualifiedStatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(qualifiedStatementRuleName, statementCustomGrammarRule),
                      unqualifiedStatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(unqualifiedStatementRuleName, statementCustomGrammarRule),
                      qualifiedMetastatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(qualifiedMetastatementRuleName, metastatementCustomGrammarRule),
                      unqualifiedMetastatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(unqualifiedMetastatementRuleName, metastatementCustomGrammarRule);

                  customGrammarRules.push(qualifiedStatementCustomGrammarRule);
                  customGrammarRules.push(qualifiedMetastatementCustomGrammarRule);
                  customGrammarRules.push(unqualifiedStatementCustomGrammarRule);
                  customGrammarRules.push(unqualifiedMetastatementCustomGrammarRule);

                  filter(customGrammarRules, function (customGrammarRule) {
                        var keep = customGrammarRule !== statementCustomGrammarRule && customGrammarRule !== metastatementCustomGrammarRule;

                        return keep;
                  });

                  return customGrammarRules;
            }
      }]);

      return customGrammarUtilities;
}();

module.exports = customGrammarUtilities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiQk5GUGFyc2VyIiwicGFyc2VyVXRpbGl0aWVzIiwiUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUiLCJVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlIiwiQk5GTGV4ZXIiLCJhcnJheSIsImZpbHRlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJzdGF0ZW1lbnRSdWxlTmFtZSIsIm1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsInF1YWxpZmllZFN0YXRlbWVudFJ1bGVOYW1lIiwicXVhbGlmaWVkTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwiY3VzdG9tR3JhbW1hclV0aWxpdGllcyIsImJuZk1hcCIsInJ1bGVOYW1lcyIsIk9iamVjdCIsImtleXMiLCJibmYiLCJyZWR1Y2UiLCJydWxlTmFtZSIsInJ1bGVCTkYiLCJsaW5lcyIsImxpbmVzRnJvbUJORiIsInJ1bGVzTm9kZSIsInJ1bGVzTm9kZUZyb21MaW5lcyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImN1c3RvbUdyYW1tYXJSdWxlcyIsInNsaWNlIiwic3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUiLCJmaW5kUnVsZUJ5TmFtZSIsIm1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSIsInF1YWxpZmllZFN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlIiwiZnJvbVJ1bGVOYW1lQW5kQ3VzdG9tR3JhbW1hclJ1bGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlIiwicXVhbGlmaWVkTWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlIiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUiLCJwdXNoIiwiY3VzdG9tR3JhbW1hclJ1bGUiLCJrZWVwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLFlBQVlGLFFBQVEsZUFBUixDQUFsQjtBQUFBLElBQ01HLGtCQUFrQkgsUUFBUSxxQkFBUixDQUR4QjtBQUFBLElBRU1JLDZCQUE2QkosUUFBUSwwQ0FBUixDQUZuQztBQUFBLElBR01LLCtCQUErQkwsUUFBUSw0Q0FBUixDQUhyQzs7QUFLTSxJQUFFTSxRQUFGLEdBQWVQLE1BQWYsQ0FBRU8sUUFBRjtBQUFBLElBQ0VDLEtBREYsR0FDWU4sU0FEWixDQUNFTSxLQURGO0FBQUEsSUFFRUMsTUFGRixHQUVhRCxLQUZiLENBRUVDLE1BRkY7OztBQUlOLElBQU1DLFdBQVdILFNBQVNJLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZVCxVQUFVUSxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsb0JBQW9CLFdBRjFCO0FBQUEsSUFHTUMsd0JBQXdCLGVBSDlCO0FBQUEsSUFJTUMsNkJBQTZCLG9CQUpuQztBQUFBLElBS01DLGlDQUFpQyx3QkFMdkM7QUFBQSxJQU1NQywrQkFBK0Isc0JBTnJDO0FBQUEsSUFPTUMsbUNBQW1DLDBCQVB6Qzs7SUFTTUMsc0I7Ozs7Ozs7NENBQ21CQyxNLEVBQVE7QUFDN0Isc0JBQU1DLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUgsTUFBWixDQUFsQjtBQUFBLHNCQUNNSSxNQUFNSCxVQUFVSSxNQUFWLENBQWlCLFVBQVVELEdBQVYsRUFBZUUsUUFBZixFQUF5QjtBQUM5Qyw0QkFBTUMsVUFBVVAsT0FBT00sUUFBUCxDQUFoQjs7QUFFQUYsbUNBQVNBLEdBQVQsR0FBZUcsT0FBZjs7QUFFQSwrQkFBT0gsR0FBUDtBQUNELG1CQU5LLEVBTUgsRUFORyxDQURaO0FBQUEsc0JBUU1JLFFBQVFsQixTQUFTbUIsWUFBVCxDQUFzQkwsR0FBdEIsQ0FSZDtBQUFBLHNCQVNNTSxZQUFZbEIsVUFBVW1CLGtCQUFWLENBQTZCSCxLQUE3QixDQVRsQjtBQUFBLHNCQVVNSSxRQUFRN0IsVUFBVThCLGFBQVYsQ0FBd0JILFNBQXhCLENBVmQ7O0FBWUEseUJBQU9FLEtBQVA7QUFDRDs7O2tFQUU0Q0Usa0IsRUFBb0I7QUFDL0RBLHVDQUFxQkEsbUJBQW1CQyxLQUFuQixFQUFyQixDQUQrRCxDQUNiOztBQUVsRCxzQkFBTUMsNkJBQTZCaEMsZ0JBQWdCaUMsY0FBaEIsQ0FBK0J4QixpQkFBL0IsRUFBa0RxQixrQkFBbEQsQ0FBbkM7QUFBQSxzQkFDTUksaUNBQWlDbEMsZ0JBQWdCaUMsY0FBaEIsQ0FBK0J2QixxQkFBL0IsRUFBc0RvQixrQkFBdEQsQ0FEdkM7QUFBQSxzQkFFTUssc0NBQXNDLElBQUlsQywyQkFBMkJtQyxnQ0FBL0IsQ0FBZ0V6QiwwQkFBaEUsRUFBNEZxQiwwQkFBNUYsQ0FGNUM7QUFBQSxzQkFHTUssd0NBQXdDLElBQUluQyw2QkFBNkJrQyxnQ0FBakMsQ0FBa0V2Qiw0QkFBbEUsRUFBZ0dtQiwwQkFBaEcsQ0FIOUM7QUFBQSxzQkFJTU0sMENBQTBDLElBQUlyQywyQkFBMkJtQyxnQ0FBL0IsQ0FBZ0V4Qiw4QkFBaEUsRUFBZ0dzQiw4QkFBaEcsQ0FKaEQ7QUFBQSxzQkFLTUssNENBQTRDLElBQUlyQyw2QkFBNkJrQyxnQ0FBakMsQ0FBa0V0QixnQ0FBbEUsRUFBb0dvQiw4QkFBcEcsQ0FMbEQ7O0FBT0FKLHFDQUFtQlUsSUFBbkIsQ0FBd0JMLG1DQUF4QjtBQUNBTCxxQ0FBbUJVLElBQW5CLENBQXdCRix1Q0FBeEI7QUFDQVIscUNBQW1CVSxJQUFuQixDQUF3QkgscUNBQXhCO0FBQ0FQLHFDQUFtQlUsSUFBbkIsQ0FBd0JELHlDQUF4Qjs7QUFFQWxDLHlCQUFPeUIsa0JBQVAsRUFBMkIsVUFBU1csaUJBQVQsRUFBNEI7QUFDckQsNEJBQU1DLE9BQVNELHNCQUFzQlQsMEJBQXZCLElBQXVEUyxzQkFBc0JQLDhCQUEzRjs7QUFFQSwrQkFBT1EsSUFBUDtBQUNELG1CQUpEOztBQU1BLHlCQUFPWixrQkFBUDtBQUNEOzs7Ozs7QUFHSGEsT0FBT0MsT0FBUCxHQUFpQjdCLHNCQUFqQiIsImZpbGUiOiJjdXN0b21HcmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBwYXJzZXJVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFyc2VyJyksXG4gICAgICBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZSA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL3J1bGUvY3VzdG9tR3JhbW1hci9xdWFsaWZpZWQnKSxcbiAgICAgIFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9ydWxlL2N1c3RvbUdyYW1tYXIvdW5xdWFsaWZpZWQnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaWx0ZXIgfSA9IGFycmF5O1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIHN0YXRlbWVudFJ1bGVOYW1lID0gJ3N0YXRlbWVudCcsXG4gICAgICBtZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAnbWV0YXN0YXRlbWVudCcsXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSA9ICdxdWFsaWZpZWRTdGF0ZW1lbnQnLFxuICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gJ3F1YWxpZmllZE1ldGFzdGF0ZW1lbnQnLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSA9ICd1bnF1YWxpZmllZFN0YXRlbWVudCcsXG4gICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9ICd1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQnO1xuXG5jbGFzcyBjdXN0b21HcmFtbWFyVXRpbGl0aWVzIHtcbiAgc3RhdGljIHJ1bGVzRnJvbUJORk1hcChibmZNYXApIHtcbiAgICBjb25zdCBydWxlTmFtZXMgPSBPYmplY3Qua2V5cyhibmZNYXApLFxuICAgICAgICAgIGJuZiA9IHJ1bGVOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGJuZiwgcnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVCTkYgPSBibmZNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgICAgICBibmYgPSBgJHtibmZ9JHtydWxlQk5GfWA7XG5cbiAgICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgICAgfSwgJycpLFxuICAgICAgICAgIGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2VTdGF0ZW1lbnRBbmRNZXRhU3RhdGVtZW50UnVsZXMoY3VzdG9tR3JhbW1hclJ1bGVzKSB7XG4gICAgY3VzdG9tR3JhbW1hclJ1bGVzID0gY3VzdG9tR3JhbW1hclJ1bGVzLnNsaWNlKCk7ICAvLy9cbiAgICBcbiAgICBjb25zdCBzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSA9IHBhcnNlclV0aWxpdGllcy5maW5kUnVsZUJ5TmFtZShzdGF0ZW1lbnRSdWxlTmFtZSwgY3VzdG9tR3JhbW1hclJ1bGVzKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUgPSBwYXJzZXJVdGlsaXRpZXMuZmluZFJ1bGVCeU5hbWUobWV0YXN0YXRlbWVudFJ1bGVOYW1lLCBjdXN0b21HcmFtbWFyUnVsZXMpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlID0gbmV3IFF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlLmZyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJSdWxlKHF1YWxpZmllZFN0YXRlbWVudFJ1bGVOYW1lLCBzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSA9IG5ldyBVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlLmZyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJSdWxlKHVucXVhbGlmaWVkU3RhdGVtZW50UnVsZU5hbWUsIHN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlKSxcbiAgICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUgPSBuZXcgUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUuZnJvbVJ1bGVOYW1lQW5kQ3VzdG9tR3JhbW1hclJ1bGUocXVhbGlmaWVkTWV0YXN0YXRlbWVudFJ1bGVOYW1lLCBtZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlID0gbmV3IFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUuZnJvbVJ1bGVOYW1lQW5kQ3VzdG9tR3JhbW1hclJ1bGUodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50UnVsZU5hbWUsIG1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSk7XG5cbiAgICBjdXN0b21HcmFtbWFyUnVsZXMucHVzaChxdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSk7XG4gICAgY3VzdG9tR3JhbW1hclJ1bGVzLnB1c2gocXVhbGlmaWVkTWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlKTtcbiAgICBjdXN0b21HcmFtbWFyUnVsZXMucHVzaCh1bnF1YWxpZmllZFN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlKTtcbiAgICBjdXN0b21HcmFtbWFyUnVsZXMucHVzaCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSk7XG5cbiAgICBmaWx0ZXIoY3VzdG9tR3JhbW1hclJ1bGVzLCBmdW5jdGlvbihjdXN0b21HcmFtbWFyUnVsZSkge1xuICAgICAgY29uc3Qga2VlcCA9ICgoY3VzdG9tR3JhbW1hclJ1bGUgIT09IHN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlKSAmJiAoY3VzdG9tR3JhbW1hclJ1bGUgIT09IG1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSkpO1xuICAgICAgXG4gICAgICByZXR1cm4ga2VlcDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hclJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3VzdG9tR3JhbW1hclV0aWxpdGllcztcbiJdfQ==