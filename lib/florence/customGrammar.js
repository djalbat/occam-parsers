'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var BNFParser = require('../bnf/parser'),
    parserUtilities = require('../utilities/parser'),
    qualificationRule = require('./customGrammar/rule/qualification'),
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
                      rules = BNFParser.generateRules(rulesNode);

                  rules.push(qualificationRule);

                  var statementRuleName = 'statement',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jdXN0b21HcmFtbWFyLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJwYXJzZXJVdGlsaXRpZXMiLCJxdWFsaWZpY2F0aW9uUnVsZSIsIlF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlIiwiVW5xdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZSIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImN1c3RvbUdyYW1tYXIiLCJibmZNYXAiLCJydWxlTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiYm5mIiwicmVkdWNlIiwicnVsZU5hbWUiLCJydWxlQk5GIiwibGluZXMiLCJsaW5lc0Zyb21CTkYiLCJydWxlc05vZGUiLCJydWxlc05vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJwdXNoIiwic3RhdGVtZW50UnVsZU5hbWUiLCJtZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSIsInVucXVhbGlmaWVkU3RhdGVtZW50UnVsZU5hbWUiLCJxdWFsaWZpZWRNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsInN0YXRlbWVudFJ1bGUiLCJmaW5kUnVsZUJ5TmFtZSIsIm1ldGFzdGF0ZW1lbnRSdWxlIiwicXVhbGlmaWVkU3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUiLCJmcm9tUnVsZU5hbWVBbmRSdWxlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsZUFBUixDQUFsQjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUR4QjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSxvQ0FBUixDQUYxQjtBQUFBLElBR01JLDZCQUE2QkosUUFBUSxnQ0FBUixDQUhuQztBQUFBLElBSU1LLCtCQUErQkwsUUFBUSxrQ0FBUixDQUpyQzs7SUFNUU0sUSxHQUFhUCxNLENBQWJPLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZUixVQUFVTyxXQUFWLEVBRGxCOztJQUdNRSxhOzs7Ozs7OzRDQUNtQkMsTSxFQUFRO0FBQzdCLHNCQUFNQyxZQUFZQyxPQUFPQyxJQUFQLENBQVlILE1BQVosQ0FBbEI7QUFBQSxzQkFDTUksTUFBTUgsVUFBVUksTUFBVixDQUFpQixVQUFTRCxHQUFULEVBQWNFLFFBQWQsRUFBd0I7QUFDN0MsNEJBQU1DLFVBQVVQLE9BQU9NLFFBQVAsQ0FBaEI7O0FBRUFGLG1DQUFTQSxHQUFULEdBQWVHLE9BQWY7O0FBRUEsK0JBQU9ILEdBQVA7QUFDRCxtQkFOSyxFQU1ILEVBTkcsQ0FEWjtBQUFBLHNCQVFNSSxRQUFRWixTQUFTYSxZQUFULENBQXNCTCxHQUF0QixDQVJkO0FBQUEsc0JBU01NLFlBQVlaLFVBQVVhLGtCQUFWLENBQTZCSCxLQUE3QixDQVRsQjtBQUFBLHNCQVVNSSxRQUFRdEIsVUFBVXVCLGFBQVYsQ0FBd0JILFNBQXhCLENBVmQ7O0FBWUFFLHdCQUFNRSxJQUFOLENBQVd0QixpQkFBWDs7QUFFQSxzQkFBTXVCLG9CQUFvQixXQUExQjtBQUFBLHNCQUNNQyx3QkFBd0IsZUFEOUI7QUFBQSxzQkFFTUMsNkJBQTZCLG9CQUZuQztBQUFBLHNCQUdNQywrQkFBK0Isc0JBSHJDO0FBQUEsc0JBSU1DLGlDQUFpQyx3QkFKdkM7QUFBQSxzQkFLTUMsbUNBQW1DLDBCQUx6QztBQUFBLHNCQU1NQyxnQkFBZ0I5QixnQkFBZ0IrQixjQUFoQixDQUErQlAsaUJBQS9CLEVBQWtESCxLQUFsRCxDQU50QjtBQUFBLHNCQU9NVyxvQkFBb0JoQyxnQkFBZ0IrQixjQUFoQixDQUErQk4scUJBQS9CLEVBQXNESixLQUF0RCxDQVAxQjtBQUFBLHNCQVFNWSxzQ0FBc0MsSUFBSS9CLDJCQUEyQmdDLG1CQUEvQixDQUFtRFIsMEJBQW5ELEVBQStFSSxhQUEvRSxDQVI1QztBQUFBLHNCQVNNSyx3Q0FBd0MsSUFBSWhDLDZCQUE2QitCLG1CQUFqQyxDQUFxRFAsNEJBQXJELEVBQW1GRyxhQUFuRixDQVQ5QztBQUFBLHNCQVVNTSwwQ0FBMEMsSUFBSWxDLDJCQUEyQmdDLG1CQUEvQixDQUFtRE4sOEJBQW5ELEVBQW1GSSxpQkFBbkYsQ0FWaEQ7QUFBQSxzQkFXTUssNENBQTRDLElBQUlsQyw2QkFBNkIrQixtQkFBakMsQ0FBcURMLGdDQUFyRCxFQUF1RkcsaUJBQXZGLENBWGxEOztBQWFBWCx3QkFBTUUsSUFBTixDQUFXVSxtQ0FBWDtBQUNBWix3QkFBTUUsSUFBTixDQUFXWSxxQ0FBWDtBQUNBZCx3QkFBTUUsSUFBTixDQUFXYSx1Q0FBWDtBQUNBZix3QkFBTUUsSUFBTixDQUFXYyx5Q0FBWDs7QUFFQSx5QkFBT2hCLEtBQVA7QUFDRDs7Ozs7O0FBR0hpQixPQUFPQyxPQUFQLEdBQWlCL0IsYUFBakIiLCJmaWxlIjoiY3VzdG9tR3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIHBhcnNlclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXInKSxcbiAgICAgIHF1YWxpZmljYXRpb25SdWxlID0gcmVxdWlyZSgnLi9jdXN0b21HcmFtbWFyL3J1bGUvcXVhbGlmaWNhdGlvbicpLFxuICAgICAgUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUgPSByZXF1aXJlKCcuL2N1c3RvbUdyYW1tYXIvcnVsZS9xdWFsaWZpZWQnKSxcbiAgICAgIFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUgPSByZXF1aXJlKCcuL2N1c3RvbUdyYW1tYXIvcnVsZS91bnF1YWxpZmllZCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBjdXN0b21HcmFtbWFyIHtcbiAgc3RhdGljIHJ1bGVzRnJvbUJORk1hcChibmZNYXApIHtcbiAgICBjb25zdCBydWxlTmFtZXMgPSBPYmplY3Qua2V5cyhibmZNYXApLFxuICAgICAgICAgIGJuZiA9IHJ1bGVOYW1lcy5yZWR1Y2UoZnVuY3Rpb24oYm5mLCBydWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZUJORiA9IGJuZk1hcFtydWxlTmFtZV07XG4gIFxuICAgICAgICAgICAgYm5mID0gYCR7Ym5mfSR7cnVsZUJORn1gO1xuICBcbiAgICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgICAgfSwgJycpLFxuICAgICAgICAgIGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUpO1xuXG4gICAgcnVsZXMucHVzaChxdWFsaWZpY2F0aW9uUnVsZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRSdWxlTmFtZSA9ICdzdGF0ZW1lbnQnLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9ICdtZXRhc3RhdGVtZW50JyxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRSdWxlTmFtZSA9ICdxdWFsaWZpZWRTdGF0ZW1lbnQnLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50UnVsZU5hbWUgPSAndW5xdWFsaWZpZWRTdGF0ZW1lbnQnLFxuICAgICAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9ICdxdWFsaWZpZWRNZXRhc3RhdGVtZW50JyxcbiAgICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9ICd1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQnLFxuICAgICAgICAgIHN0YXRlbWVudFJ1bGUgPSBwYXJzZXJVdGlsaXRpZXMuZmluZFJ1bGVCeU5hbWUoc3RhdGVtZW50UnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50UnVsZSA9IHBhcnNlclV0aWxpdGllcy5maW5kUnVsZUJ5TmFtZShtZXRhc3RhdGVtZW50UnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSA9IG5ldyBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZS5mcm9tUnVsZU5hbWVBbmRSdWxlKHF1YWxpZmllZFN0YXRlbWVudFJ1bGVOYW1lLCBzdGF0ZW1lbnRSdWxlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudEN1c3RvbUdyYW1tYXJSdWxlID0gbmV3IFVucXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUuZnJvbVJ1bGVOYW1lQW5kUnVsZSh1bnF1YWxpZmllZFN0YXRlbWVudFJ1bGVOYW1lLCBzdGF0ZW1lbnRSdWxlKSxcbiAgICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUgPSBuZXcgUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUuZnJvbVJ1bGVOYW1lQW5kUnVsZShxdWFsaWZpZWRNZXRhc3RhdGVtZW50UnVsZU5hbWUsIG1ldGFzdGF0ZW1lbnRSdWxlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSA9IG5ldyBVbnF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlLmZyb21SdWxlTmFtZUFuZFJ1bGUodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50UnVsZU5hbWUsIG1ldGFzdGF0ZW1lbnRSdWxlKTtcblxuICAgIHJ1bGVzLnB1c2gocXVhbGlmaWVkU3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpO1xuICAgIHJ1bGVzLnB1c2godW5xdWFsaWZpZWRTdGF0ZW1lbnRDdXN0b21HcmFtbWFyUnVsZSk7XG4gICAgcnVsZXMucHVzaChxdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpO1xuICAgIHJ1bGVzLnB1c2godW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Q3VzdG9tR3JhbW1hclJ1bGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3VzdG9tR3JhbW1hcjtcbiJdfQ==