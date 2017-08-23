'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../../bnf/definition'),
    CustomGrammarRule = require('../../customGrammar/rule'),
    EndOfLinePart = require('../../../bnf/part/terminal/endOfLine'),
    QualificationRuleNamePart = require('../part/qualificationRuleName');

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
            qualificationRuleNamePart = new QualificationRuleNamePart(),
            endOfLinePart = new EndOfLinePart(),
            parts = [].concat(ruleDefinitionParts).concat(qualificationRuleNamePart).concat(endOfLinePart),
            definition = new Definition(parts);

        return definition;
      });

      return definitions;
    }
  }]);

  return QualifiedCustomGrammarRule;
}(CustomGrammarRule);

module.exports = QualifiedCustomGrammarRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9jdXN0b21HcmFtbWFyL3J1bGUvcXVhbGlmaWVkLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiQ3VzdG9tR3JhbW1hclJ1bGUiLCJFbmRPZkxpbmVQYXJ0IiwiUXVhbGlmaWNhdGlvblJ1bGVOYW1lUGFydCIsIlF1YWxpZmllZEN1c3RvbUdyYW1tYXJSdWxlIiwicnVsZU5hbWUiLCJydWxlIiwiZnJvbVJ1bGVOYW1lQW5kUnVsZSIsInJ1bGVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwibWFwIiwicnVsZURlZmluaXRpb24iLCJydWxlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJxdWFsaWZpY2F0aW9uUnVsZU5hbWVQYXJ0IiwiZW5kT2ZMaW5lUGFydCIsInBhcnRzIiwiY29uY2F0IiwiZGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSx5QkFBUixDQUFuQjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSwwQkFBUixDQUQxQjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxzQ0FBUixDQUZ0QjtBQUFBLElBR01HLDRCQUE0QkgsUUFBUSwrQkFBUixDQUhsQzs7SUFLTUksMEI7Ozs7Ozs7Ozs7O3dDQUN1QkMsUSxFQUFVQyxJLEVBQU07QUFBRSxhQUFPTCxrQkFBa0JNLG1CQUFsQixDQUFzQ0gsMEJBQXRDLEVBQWtFQyxRQUFsRSxFQUE0RUMsSUFBNUUsQ0FBUDtBQUEyRjs7O21EQUVsR0UsZSxFQUFpQjtBQUNyRCxVQUFNQyxjQUFjRCxnQkFBZ0JFLEdBQWhCLENBQW9CLFVBQVNDLGNBQVQsRUFBeUI7QUFDL0QsWUFBTUMsc0JBQXNCRCxlQUFlRSxRQUFmLEVBQTVCO0FBQUEsWUFDTUMsNEJBQTRCLElBQUlYLHlCQUFKLEVBRGxDO0FBQUEsWUFFTVksZ0JBQWdCLElBQUliLGFBQUosRUFGdEI7QUFBQSxZQUdNYyxRQUFRLEdBQUdDLE1BQUgsQ0FBVUwsbUJBQVYsRUFBK0JLLE1BQS9CLENBQXNDSCx5QkFBdEMsRUFBaUVHLE1BQWpFLENBQXdFRixhQUF4RSxDQUhkO0FBQUEsWUFJTUcsYUFBYSxJQUFJbkIsVUFBSixDQUFlaUIsS0FBZixDQUpuQjs7QUFNQSxlQUFPRSxVQUFQO0FBQ0QsT0FSbUIsQ0FBcEI7O0FBVUEsYUFBT1QsV0FBUDtBQUNEOzs7O0VBZnNDUixpQjs7QUFrQnpDa0IsT0FBT0MsT0FBUCxHQUFpQmhCLDBCQUFqQiIsImZpbGUiOiJxdWFsaWZpZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi8uLi9ibmYvZGVmaW5pdGlvbicpLFxuICAgICAgQ3VzdG9tR3JhbW1hclJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jdXN0b21HcmFtbWFyL3J1bGUnKSxcbiAgICAgIEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuLi8uLi8uLi9ibmYvcGFydC90ZXJtaW5hbC9lbmRPZkxpbmUnKSxcbiAgICAgIFF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3F1YWxpZmljYXRpb25SdWxlTmFtZScpO1xuXG5jbGFzcyBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZSBleHRlbmRzIEN1c3RvbUdyYW1tYXJSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZFJ1bGUocnVsZU5hbWUsIHJ1bGUpIHsgcmV0dXJuIEN1c3RvbUdyYW1tYXJSdWxlLmZyb21SdWxlTmFtZUFuZFJ1bGUoUXVhbGlmaWVkQ3VzdG9tR3JhbW1hclJ1bGUsIHJ1bGVOYW1lLCBydWxlKTsgfVxuXG4gIHN0YXRpYyBkZWZpbml0aW9uc0Zyb21SdWxlRGVmaW5pdGlvbnMocnVsZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlRGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uKHJ1bGVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBydWxlRGVmaW5pdGlvblBhcnRzID0gcnVsZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQgPSBuZXcgUXVhbGlmaWNhdGlvblJ1bGVOYW1lUGFydCgpLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtdLmNvbmNhdChydWxlRGVmaW5pdGlvblBhcnRzKS5jb25jYXQocXVhbGlmaWNhdGlvblJ1bGVOYW1lUGFydCkuY29uY2F0KGVuZE9mTGluZVBhcnQpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWFsaWZpZWRDdXN0b21HcmFtbWFyUnVsZTtcbiJdfQ==