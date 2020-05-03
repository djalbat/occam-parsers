"use strict";

var _definition = _interopRequireDefault(require("../definition"));

var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));

var _choiceOfParts = _interopRequireDefault(require("../part/nonTerminal/choiceOfParts"));

var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DocumentDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(DocumentDefinition, _Definition);

  function DocumentDefinition() {
    _classCallCheck(this, DocumentDefinition);

    var ruleRuleName = _ruleNames.RuleRuleName,
        errorRuleName = _ruleNames.ErrorRuleName,
        ruleRuleNamePart = new _ruleName["default"](ruleRuleName),
        errorRuleNamePart = new _ruleName["default"](errorRuleName),
        ruleRuleNameAndErrorRuleNameParts = [ruleRuleNamePart, errorRuleNamePart],
        choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new _choiceOfParts["default"](ruleRuleNameAndErrorRuleNameParts),
        oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new _oneOrMoreParts["default"](choiceOfRuleRuleNameAndErrorRuleNamePartsPart),
        parts = [oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentDefinition).call(this, parts));
  }

  return DocumentDefinition;
}(_definition["default"]);

module.exports = DocumentDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50RGVmaW5pdGlvbiIsInJ1bGVSdWxlTmFtZSIsIlJ1bGVSdWxlTmFtZSIsImVycm9yUnVsZU5hbWUiLCJFcnJvclJ1bGVOYW1lIiwicnVsZVJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsImVycm9yUnVsZU5hbWVQYXJ0IiwicnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzIiwiY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsa0I7OztBQUNKLGdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxHQUFHQyx1QkFBckI7QUFBQSxRQUNNQyxhQUFhLEdBQUdDLHdCQUR0QjtBQUFBLFFBRU1DLGdCQUFnQixHQUFHLElBQUlDLG9CQUFKLENBQWlCTCxZQUFqQixDQUZ6QjtBQUFBLFFBR01NLGlCQUFpQixHQUFHLElBQUlELG9CQUFKLENBQWlCSCxhQUFqQixDQUgxQjtBQUFBLFFBSU1LLGlDQUFpQyxHQUFHLENBQ2xDSCxnQkFEa0MsRUFFbENFLGlCQUZrQyxDQUoxQztBQUFBLFFBUU1FLDZDQUE2QyxHQUFHLElBQUlDLHlCQUFKLENBQXNCRixpQ0FBdEIsQ0FSdEQ7QUFBQSxRQVNNRywyREFBMkQsR0FBRyxJQUFJQywwQkFBSixDQUF1QkgsNkNBQXZCLENBVHBFO0FBQUEsUUFVTUksS0FBSyxHQUFHLENBQ05GLDJEQURNLENBVmQ7QUFEWSwyRkFlTkUsS0FmTTtBQWdCYjs7O0VBakI4QkMsc0I7O0FBb0JqQ0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsa0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBSdWxlUnVsZU5hbWUsIEVycm9yUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIERvY3VtZW50RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBydWxlUnVsZU5hbWUgPSBSdWxlUnVsZU5hbWUsXG4gICAgICAgICAgZXJyb3JSdWxlTmFtZSA9IEVycm9yUnVsZU5hbWUsXG4gICAgICAgICAgcnVsZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZVJ1bGVOYW1lKSxcbiAgICAgICAgICBlcnJvclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZXJyb3JSdWxlTmFtZSksXG4gICAgICAgICAgcnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIGVycm9yUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQoY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZUNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvY3VtZW50RGVmaW5pdGlvbjtcbiJdfQ==