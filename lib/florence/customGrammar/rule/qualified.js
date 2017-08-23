'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../../bnf/definition'),
    CustomGrammarRule = require('../../customGrammar/rule'),
    RuleNamePart = require('../../../bnf/part/nonTerminal/ruleName'),
    EndOfLinePart = require('../../../bnf/part/terminal/endOfLine'),
    OptionalPartPart = require('../../../bnf/part/nonTerminal/optionalPart');

var QualifiedCustomGrammarRule = function (_CustomGrammarRule) {
  _inherits(QualifiedCustomGrammarRule, _CustomGrammarRule);

  function QualifiedCustomGrammarRule() {
    _classCallCheck(this, QualifiedCustomGrammarRule);

    return _possibleConstructorReturn(this, (QualifiedCustomGrammarRule.__proto__ || Object.getPrototypeOf(QualifiedCustomGrammarRule)).apply(this, arguments));
  }

  _createClass(QualifiedCustomGrammarRule, null, [{
    key: 'fromRuleNameAndRule',
    value: function fromRuleNameAndRule(ruleName, rule) {
      return CustomGrammarRule.fromRuleNameAndRule(QualifiedCustomGrammarRule, ruleName, rule);
    }
  }, {
    key: 'definitionsFromRuleDefinitions',
    value: function definitionsFromRuleDefinitions(ruleDefinitions) {
      var definitions = ruleDefinitions.map(function (ruleDefinition) {
        var ruleDefinitionParts = ruleDefinition.getParts(),
            qualificationRuleName = 'qualification',
            ///
        qualificationRuleNamePart = new RuleNamePart(qualificationRuleName),
            optionalQualificationRuleNamePart = new OptionalPartPart(qualificationRuleNamePart),
            endOfLinePart = new EndOfLinePart(),
            parts = [].concat(ruleDefinitionParts).concat(optionalQualificationRuleNamePart).concat(endOfLinePart),
            definition = new Definition(parts);

        return definition;
      });

      return definitions;
    }
  }]);

  return QualifiedCustomGrammarRule;
}(CustomGrammarRule);

module.exports = QualifiedCustomGrammarRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9jdXN0b21HcmFtbWFyL3J1bGUvcXVhbGlmaWVkLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiQ3VzdG9tR3JhbW1hclJ1bGUiLCJSdWxlTmFtZVBhcnQiLCJFbmRPZkxpbmVQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIlF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlIiwicnVsZU5hbWUiLCJydWxlIiwiZnJvbVJ1bGVOYW1lQW5kUnVsZSIsInJ1bGVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwibWFwIiwicnVsZURlZmluaXRpb24iLCJydWxlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJxdWFsaWZpY2F0aW9uUnVsZU5hbWUiLCJxdWFsaWZpY2F0aW9uUnVsZU5hbWVQYXJ0Iiwib3B0aW9uYWxRdWFsaWZpY2F0aW9uUnVsZU5hbWVQYXJ0IiwiZW5kT2ZMaW5lUGFydCIsInBhcnRzIiwiY29uY2F0IiwiZGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSx5QkFBUixDQUFuQjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSwwQkFBUixDQUQxQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsd0NBQVIsQ0FGckI7QUFBQSxJQUdNRyxnQkFBZ0JILFFBQVEsc0NBQVIsQ0FIdEI7QUFBQSxJQUlNSSxtQkFBbUJKLFFBQVEsNENBQVIsQ0FKekI7O0lBTU1LLDBCOzs7Ozs7Ozs7Ozt3Q0FDdUJDLFEsRUFBVUMsSSxFQUFNO0FBQUUsYUFBT04sa0JBQWtCTyxtQkFBbEIsQ0FBc0NILDBCQUF0QyxFQUFrRUMsUUFBbEUsRUFBNEVDLElBQTVFLENBQVA7QUFBMkY7OzttREFFbEdFLGUsRUFBaUI7QUFDckQsVUFBTUMsY0FBY0QsZ0JBQWdCRSxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQy9ELFlBQU1DLHNCQUFzQkQsZUFBZUUsUUFBZixFQUE1QjtBQUFBLFlBQ01DLHdCQUF3QixlQUQ5QjtBQUFBLFlBQ2dEO0FBQzFDQyxvQ0FBNEIsSUFBSWQsWUFBSixDQUFpQmEscUJBQWpCLENBRmxDO0FBQUEsWUFHTUUsb0NBQW9DLElBQUliLGdCQUFKLENBQXFCWSx5QkFBckIsQ0FIMUM7QUFBQSxZQUlNRSxnQkFBZ0IsSUFBSWYsYUFBSixFQUp0QjtBQUFBLFlBS01nQixRQUFRLEdBQUdDLE1BQUgsQ0FBVVAsbUJBQVYsRUFBK0JPLE1BQS9CLENBQXNDSCxpQ0FBdEMsRUFBeUVHLE1BQXpFLENBQWdGRixhQUFoRixDQUxkO0FBQUEsWUFNTUcsYUFBYSxJQUFJdEIsVUFBSixDQUFlb0IsS0FBZixDQU5uQjs7QUFRQSxlQUFPRSxVQUFQO0FBQ0QsT0FWbUIsQ0FBcEI7O0FBWUEsYUFBT1gsV0FBUDtBQUNEOzs7O0VBakJzQ1QsaUI7O0FBb0J6Q3FCLE9BQU9DLE9BQVAsR0FBaUJsQiwwQkFBakIiLCJmaWxlIjoicXVhbGlmaWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vLi4vYm5mL2RlZmluaXRpb24nKSxcbiAgICAgIEN1c3RvbUdyYW1tYXJSdWxlID0gcmVxdWlyZSgnLi4vLi4vY3VzdG9tR3JhbW1hci9ydWxlJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi8uLi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZScpLFxuICAgICAgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZScpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydCcpO1xuXG5jbGFzcyBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZSBleHRlbmRzIEN1c3RvbUdyYW1tYXJSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZFJ1bGUocnVsZU5hbWUsIHJ1bGUpIHsgcmV0dXJuIEN1c3RvbUdyYW1tYXJSdWxlLmZyb21SdWxlTmFtZUFuZFJ1bGUoUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUsIHJ1bGVOYW1lLCBydWxlKTsgfVxuXG4gIHN0YXRpYyBkZWZpbml0aW9uc0Zyb21SdWxlRGVmaW5pdGlvbnMocnVsZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlRGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uKHJ1bGVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBydWxlRGVmaW5pdGlvblBhcnRzID0gcnVsZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHF1YWxpZmljYXRpb25SdWxlTmFtZSA9ICdxdWFsaWZpY2F0aW9uJywgIC8vL1xuICAgICAgICAgICAgcXVhbGlmaWNhdGlvblJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocXVhbGlmaWNhdGlvblJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG9wdGlvbmFsUXVhbGlmaWNhdGlvblJ1bGVOYW1lUGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQpLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtdLmNvbmNhdChydWxlRGVmaW5pdGlvblBhcnRzKS5jb25jYXQob3B0aW9uYWxRdWFsaWZpY2F0aW9uUnVsZU5hbWVQYXJ0KS5jb25jYXQoZW5kT2ZMaW5lUGFydCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlO1xuIl19