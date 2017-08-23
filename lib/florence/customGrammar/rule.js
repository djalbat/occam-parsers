'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../bnf/rule');

var CustomGrammarRule = function (_Rule) {
  _inherits(CustomGrammarRule, _Rule);

  function CustomGrammarRule() {
    _classCallCheck(this, CustomGrammarRule);

    return _possibleConstructorReturn(this, (CustomGrammarRule.__proto__ || Object.getPrototypeOf(CustomGrammarRule)).apply(this, arguments));
  }

  _createClass(CustomGrammarRule, null, [{
    key: 'fromRuleNameAndRule',
    value: function fromRuleNameAndRule(Class, ruleName, rule) {
      var ruleNonTerminalNode = rule.getNonTerminalNode(),
          ruleDefinitions = rule.getDefinitions(),
          name = ruleName,
          ///
      definitions = Class.definitionsFromRuleDefinitions(ruleDefinitions),
          NonTerminalNode = ruleNonTerminalNode,
          ///
      statementRule = new CustomGrammarRule(name, definitions, NonTerminalNode);

      return statementRule;
    }
  }]);

  return CustomGrammarRule;
}(Rule);

module.exports = CustomGrammarRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9jdXN0b21HcmFtbWFyL3J1bGUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJDdXN0b21HcmFtbWFyUnVsZSIsIkNsYXNzIiwicnVsZU5hbWUiLCJydWxlIiwicnVsZU5vblRlcm1pbmFsTm9kZSIsImdldE5vblRlcm1pbmFsTm9kZSIsInJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibmFtZSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNGcm9tUnVsZURlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwic3RhdGVtZW50UnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxnQkFBUixDQUFiOztJQUVNQyxpQjs7Ozs7Ozs7Ozs7d0NBQ3VCQyxLLEVBQU9DLFEsRUFBVUMsSSxFQUFNO0FBQ2hELFVBQU1DLHNCQUFzQkQsS0FBS0Usa0JBQUwsRUFBNUI7QUFBQSxVQUNNQyxrQkFBa0JILEtBQUtJLGNBQUwsRUFEeEI7QUFBQSxVQUVNQyxPQUFPTixRQUZiO0FBQUEsVUFFd0I7QUFDbEJPLG9CQUFjUixNQUFNUyw4QkFBTixDQUFxQ0osZUFBckMsQ0FIcEI7QUFBQSxVQUlNSyxrQkFBa0JQLG1CQUp4QjtBQUFBLFVBSTZDO0FBQ3ZDUSxzQkFBZ0IsSUFBSVosaUJBQUosQ0FBc0JRLElBQXRCLEVBQTRCQyxXQUE1QixFQUF5Q0UsZUFBekMsQ0FMdEI7O0FBT0EsYUFBT0MsYUFBUDtBQUNEOzs7O0VBVjZCZCxJOztBQWFoQ2UsT0FBT0MsT0FBUCxHQUFpQmQsaUJBQWpCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvcnVsZScpO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kUnVsZShDbGFzcywgcnVsZU5hbWUsIHJ1bGUpIHtcbiAgICBjb25zdCBydWxlTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBydWxlRGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBDbGFzcy5kZWZpbml0aW9uc0Zyb21SdWxlRGVmaW5pdGlvbnMocnVsZURlZmluaXRpb25zKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRSdWxlID0gbmV3IEN1c3RvbUdyYW1tYXJSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIFxuICAgIHJldHVybiBzdGF0ZW1lbnRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hclJ1bGU7XG4iXX0=