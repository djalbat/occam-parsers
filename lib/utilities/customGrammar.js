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
    push = array.push,
    add = push; ///

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
            key: 'addQualifiedAndUnqualifiedStatementAndMetastatementRules',
            value: function addQualifiedAndUnqualifiedStatementAndMetastatementRules(customGrammarRules) {
                  customGrammarRules = customGrammarRules.slice(); ///

                  var statementCustomGrammarRule = parserUtilities.findRuleByName(statementRuleName, customGrammarRules),
                      metastatementCustomGrammarRule = parserUtilities.findRuleByName(metastatementRuleName, customGrammarRules),
                      qualifiedStatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(qualifiedStatementRuleName, statementCustomGrammarRule),
                      unqualifiedStatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(unqualifiedStatementRuleName, statementCustomGrammarRule),
                      qualifiedMetastatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(qualifiedMetastatementRuleName, metastatementCustomGrammarRule),
                      unqualifiedMetastatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(unqualifiedMetastatementRuleName, metastatementCustomGrammarRule),
                      qualifiedAndUnqualifiedStatementAndMetastatementRules = [qualifiedStatementCustomGrammarRule, unqualifiedStatementCustomGrammarRule, qualifiedMetastatementCustomGrammarRule, unqualifiedMetastatementCustomGrammarRule];

                  add(customGrammarRules, qualifiedAndUnqualifiedStatementAndMetastatementRules);

                  return customGrammarRules;
            }
      }]);

      return customGrammarUtilities;
}();

module.exports = customGrammarUtilities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiQk5GUGFyc2VyIiwicGFyc2VyVXRpbGl0aWVzIiwiUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUiLCJVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlIiwiQk5GTGV4ZXIiLCJhcnJheSIsInB1c2giLCJhZGQiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwic3RhdGVtZW50UnVsZU5hbWUiLCJtZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsInVucXVhbGlmaWVkU3RhdGVtZW50UnVsZU5hbWUiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsImN1c3RvbUdyYW1tYXJVdGlsaXRpZXMiLCJibmZNYXAiLCJydWxlTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiYm5mIiwicmVkdWNlIiwicnVsZU5hbWUiLCJydWxlQk5GIiwibGluZXMiLCJsaW5lc0Zyb21CTkYiLCJydWxlc05vZGUiLCJydWxlc05vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJjdXN0b21HcmFtbWFyUnVsZXMiLCJzbGljZSIsInN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlIiwiZmluZFJ1bGVCeU5hbWUiLCJtZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSIsImZyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJSdWxlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlIiwicXVhbGlmaWVkQW5kVW5xdWFsaWZpZWRTdGF0ZW1lbnRBbmRNZXRhc3RhdGVtZW50UnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsWUFBWUYsUUFBUSxlQUFSLENBQWxCO0FBQUEsSUFDTUcsa0JBQWtCSCxRQUFRLHFCQUFSLENBRHhCO0FBQUEsSUFFTUksNkJBQTZCSixRQUFRLDBDQUFSLENBRm5DO0FBQUEsSUFHTUssK0JBQStCTCxRQUFRLDRDQUFSLENBSHJDOztBQUtNLElBQUVNLFFBQUYsR0FBZVAsTUFBZixDQUFFTyxRQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZTixTQURaLENBQ0VNLEtBREY7QUFBQSxJQUVFQyxJQUZGLEdBRVdELEtBRlgsQ0FFRUMsSUFGRjtBQUFBLElBR0FDLEdBSEEsR0FHTUQsSUFITixDLENBR1k7O0FBRWxCLElBQU1FLFdBQVdKLFNBQVNLLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZVixVQUFVUyxXQUFWLEVBRGxCO0FBQUEsSUFFTUUsb0JBQW9CLFdBRjFCO0FBQUEsSUFHTUMsd0JBQXdCLGVBSDlCO0FBQUEsSUFJTUMsNkJBQTZCLG9CQUpuQztBQUFBLElBS01DLGlDQUFpQyx3QkFMdkM7QUFBQSxJQU1NQywrQkFBK0Isc0JBTnJDO0FBQUEsSUFPTUMsbUNBQW1DLDBCQVB6Qzs7SUFTTUMsc0I7Ozs7Ozs7NENBQ21CQyxNLEVBQVE7QUFDN0Isc0JBQU1DLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUgsTUFBWixDQUFsQjtBQUFBLHNCQUNNSSxNQUFNSCxVQUFVSSxNQUFWLENBQWlCLFVBQVVELEdBQVYsRUFBZUUsUUFBZixFQUF5QjtBQUM5Qyw0QkFBTUMsVUFBVVAsT0FBT00sUUFBUCxDQUFoQjs7QUFFQUYsbUNBQVNBLEdBQVQsR0FBZUcsT0FBZjs7QUFFQSwrQkFBT0gsR0FBUDtBQUNELG1CQU5LLEVBTUgsRUFORyxDQURaO0FBQUEsc0JBUU1JLFFBQVFsQixTQUFTbUIsWUFBVCxDQUFzQkwsR0FBdEIsQ0FSZDtBQUFBLHNCQVNNTSxZQUFZbEIsVUFBVW1CLGtCQUFWLENBQTZCSCxLQUE3QixDQVRsQjtBQUFBLHNCQVVNSSxRQUFROUIsVUFBVStCLGFBQVYsQ0FBd0JILFNBQXhCLENBVmQ7O0FBWUEseUJBQU9FLEtBQVA7QUFDRDs7O3FGQUUrREUsa0IsRUFBb0I7QUFDbEZBLHVDQUFxQkEsbUJBQW1CQyxLQUFuQixFQUFyQixDQURrRixDQUNoQzs7QUFFbEQsc0JBQU1DLDZCQUE2QmpDLGdCQUFnQmtDLGNBQWhCLENBQStCeEIsaUJBQS9CLEVBQWtEcUIsa0JBQWxELENBQW5DO0FBQUEsc0JBQ01JLGlDQUFpQ25DLGdCQUFnQmtDLGNBQWhCLENBQStCdkIscUJBQS9CLEVBQXNEb0Isa0JBQXRELENBRHZDO0FBQUEsc0JBRU1LLHNDQUFzQyxJQUFJbkMsMkJBQTJCb0MsZ0NBQS9CLENBQWdFekIsMEJBQWhFLEVBQTRGcUIsMEJBQTVGLENBRjVDO0FBQUEsc0JBR01LLHdDQUF3QyxJQUFJcEMsNkJBQTZCbUMsZ0NBQWpDLENBQWtFdkIsNEJBQWxFLEVBQWdHbUIsMEJBQWhHLENBSDlDO0FBQUEsc0JBSU1NLDBDQUEwQyxJQUFJdEMsMkJBQTJCb0MsZ0NBQS9CLENBQWdFeEIsOEJBQWhFLEVBQWdHc0IsOEJBQWhHLENBSmhEO0FBQUEsc0JBS01LLDRDQUE0QyxJQUFJdEMsNkJBQTZCbUMsZ0NBQWpDLENBQWtFdEIsZ0NBQWxFLEVBQW9Hb0IsOEJBQXBHLENBTGxEO0FBQUEsc0JBTU1NLHdEQUF3RCxDQUN0REwsbUNBRHNELEVBRXRERSxxQ0FGc0QsRUFHdERDLHVDQUhzRCxFQUl0REMseUNBSnNELENBTjlEOztBQWFBbEMsc0JBQUl5QixrQkFBSixFQUF3QlUscURBQXhCOztBQUVBLHlCQUFPVixrQkFBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQjNCLHNCQUFqQiIsImZpbGUiOiJjdXN0b21HcmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBwYXJzZXJVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFyc2VyJyksXG4gICAgICBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZSA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL3J1bGUvY3VzdG9tR3JhbW1hci9xdWFsaWZpZWQnKSxcbiAgICAgIFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9ydWxlL2N1c3RvbUdyYW1tYXIvdW5xdWFsaWZpZWQnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBwdXNoIH0gPSBhcnJheSxcbiAgICAgIGFkZCA9IHB1c2g7IC8vL1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIHN0YXRlbWVudFJ1bGVOYW1lID0gJ3N0YXRlbWVudCcsXG4gICAgICBtZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAnbWV0YXN0YXRlbWVudCcsXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSA9ICdxdWFsaWZpZWRTdGF0ZW1lbnQnLFxuICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gJ3F1YWxpZmllZE1ldGFzdGF0ZW1lbnQnLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSA9ICd1bnF1YWxpZmllZFN0YXRlbWVudCcsXG4gICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9ICd1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQnO1xuXG5jbGFzcyBjdXN0b21HcmFtbWFyVXRpbGl0aWVzIHtcbiAgc3RhdGljIHJ1bGVzRnJvbUJORk1hcChibmZNYXApIHtcbiAgICBjb25zdCBydWxlTmFtZXMgPSBPYmplY3Qua2V5cyhibmZNYXApLFxuICAgICAgICAgIGJuZiA9IHJ1bGVOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGJuZiwgcnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVCTkYgPSBibmZNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgICAgICBibmYgPSBgJHtibmZ9JHtydWxlQk5GfWA7XG5cbiAgICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgICAgfSwgJycpLFxuICAgICAgICAgIGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGFkZFF1YWxpZmllZEFuZFVucXVhbGlmaWVkU3RhdGVtZW50QW5kTWV0YXN0YXRlbWVudFJ1bGVzKGN1c3RvbUdyYW1tYXJSdWxlcykge1xuICAgIGN1c3RvbUdyYW1tYXJSdWxlcyA9IGN1c3RvbUdyYW1tYXJSdWxlcy5zbGljZSgpOyAgLy8vXG4gICAgXG4gICAgY29uc3Qgc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUgPSBwYXJzZXJVdGlsaXRpZXMuZmluZFJ1bGVCeU5hbWUoc3RhdGVtZW50UnVsZU5hbWUsIGN1c3RvbUdyYW1tYXJSdWxlcyksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlID0gcGFyc2VyVXRpbGl0aWVzLmZpbmRSdWxlQnlOYW1lKG1ldGFzdGF0ZW1lbnRSdWxlTmFtZSwgY3VzdG9tR3JhbW1hclJ1bGVzKSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSA9IG5ldyBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZS5mcm9tUnVsZU5hbWVBbmRDdXN0b21HcmFtbWFyUnVsZShxdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSwgc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUgPSBuZXcgVW5xdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZS5mcm9tUnVsZU5hbWVBbmRDdXN0b21HcmFtbWFyUnVsZSh1bnF1YWxpZmllZFN0YXRlbWVudFJ1bGVOYW1lLCBzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSksXG4gICAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlID0gbmV3IFF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlLmZyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJSdWxlKHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSwgbWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSA9IG5ldyBVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlLmZyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJSdWxlKHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFJ1bGVOYW1lLCBtZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpLFxuICAgICAgICAgIHF1YWxpZmllZEFuZFVucXVhbGlmaWVkU3RhdGVtZW50QW5kTWV0YXN0YXRlbWVudFJ1bGVzID0gW1xuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUsXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlLFxuICAgICAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGVcbiAgICAgICAgICBdO1xuXG4gICAgYWRkKGN1c3RvbUdyYW1tYXJSdWxlcywgcXVhbGlmaWVkQW5kVW5xdWFsaWZpZWRTdGF0ZW1lbnRBbmRNZXRhc3RhdGVtZW50UnVsZXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJSdWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1c3RvbUdyYW1tYXJVdGlsaXRpZXM7XG4iXX0=