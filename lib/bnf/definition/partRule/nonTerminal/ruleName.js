"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ruleNames = require("../../../ruleNames"),
    Definition = require("../../../definition"),
    RuleNamePart = require("../../../part/nonTerminal/ruleName"),
    OptionalPartPart = require("../../../part/nonTerminal/optionalPart");

var RuleNameRuleName = ruleNames.RuleNameRuleName,
    LookAheadModifierRuleName = ruleNames.LookAheadModifierRuleName;

var RuleNameNonTerminalPartRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RuleNameNonTerminalPartRuleDefinition, _Definition);

  function RuleNameNonTerminalPartRuleDefinition() {
    _classCallCheck(this, RuleNameNonTerminalPartRuleDefinition);

    var ruleNameRuleName = RuleNameRuleName,
        lookAheadModifierRuleName = LookAheadModifierRuleName,
        ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName),
        lookAheadModifierRuleNamePart = new RuleNamePart(lookAheadModifierRuleName),
        optionalLookAheadRuleNamePartPart = new OptionalPartPart(lookAheadModifierRuleNamePart),
        parts = [ruleNameRuleNamePart, optionalLookAheadRuleNamePartPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameNonTerminalPartRuleDefinition).call(this, parts));
  }

  return RuleNameNonTerminalPartRuleDefinition;
}(Definition);

module.exports = RuleNameNonTerminalPartRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIlJ1bGVOYW1lUnVsZU5hbWUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsInJ1bGVOYW1lUnVsZU5hbWUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCIsIm9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxvQkFBRCxDQUF6QjtBQUFBLElBQ01DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLHFCQUFELENBRDFCO0FBQUEsSUFFTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsb0NBQUQsQ0FGNUI7QUFBQSxJQUdNRyxnQkFBZ0IsR0FBR0gsT0FBTyxDQUFDLHdDQUFELENBSGhDOztJQUtRSSxnQixHQUFnREwsUyxDQUFoREssZ0I7SUFBa0JDLHlCLEdBQThCTixTLENBQTlCTSx5Qjs7SUFFcEJDLHFDOzs7QUFDSixtREFBYztBQUFBOztBQUNaLFFBQU1DLGdCQUFnQixHQUFHSCxnQkFBekI7QUFBQSxRQUNNSSx5QkFBeUIsR0FBR0gseUJBRGxDO0FBQUEsUUFFTUksb0JBQW9CLEdBQUcsSUFBSVAsWUFBSixDQUFpQkssZ0JBQWpCLENBRjdCO0FBQUEsUUFHTUcsNkJBQTZCLEdBQUcsSUFBSVIsWUFBSixDQUFpQk0seUJBQWpCLENBSHRDO0FBQUEsUUFJTUcsaUNBQWlDLEdBQUcsSUFBSVIsZ0JBQUosQ0FBcUJPLDZCQUFyQixDQUoxQztBQUFBLFFBS01FLEtBQUssR0FBRyxDQUNOSCxvQkFETSxFQUVORSxpQ0FGTSxDQUxkO0FBRFksOEdBV05DLEtBWE07QUFZYjs7O0VBYmlEWCxVOztBQWdCcERZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIscUNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ydWxlTmFtZXNcIiksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uLy4uLy4uL2RlZmluaXRpb25cIiksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKFwiLi4vLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKFwiLi4vLi4vLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnRcIik7XG5cbmNvbnN0IHsgUnVsZU5hbWVSdWxlTmFtZSwgTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWUgPSBSdWxlTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQobG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxMb29rQWhlYWRSdWxlTmFtZVBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQobG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvcHRpb25hbExvb2tBaGVhZFJ1bGVOYW1lUGFydFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbjtcbiJdfQ==