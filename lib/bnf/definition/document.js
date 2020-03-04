'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

var RuleRuleName = ruleNames.RuleRuleName,
    ErrorRuleName = ruleNames.ErrorRuleName;

var DocumentDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(DocumentDefinition, _Definition);

  function DocumentDefinition() {
    _classCallCheck(this, DocumentDefinition);

    var ruleRuleName = RuleRuleName,
        errorRuleName = ErrorRuleName,
        ruleRuleNamePart = new RuleNamePart(ruleRuleName),
        errorRuleNamePart = new RuleNamePart(errorRuleName),
        ruleRuleNameAndErrorRuleNameParts = [ruleRuleNamePart, errorRuleNamePart],
        choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new ChoiceOfPartsPart(ruleRuleNameAndErrorRuleNameParts),
        oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new OneOrMorePartsPart(choiceOfRuleRuleNameAndErrorRuleNamePartsPart),
        parts = [oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentDefinition).call(this, parts));
  }

  return DocumentDefinition;
}(Definition);

module.exports = DocumentDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJSdWxlUnVsZU5hbWUiLCJFcnJvclJ1bGVOYW1lIiwiRG9jdW1lbnREZWZpbml0aW9uIiwicnVsZVJ1bGVOYW1lIiwiZXJyb3JSdWxlTmFtZSIsInJ1bGVSdWxlTmFtZVBhcnQiLCJlcnJvclJ1bGVOYW1lUGFydCIsInJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyIsImNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCIsIm9uZU9yTW9yZUNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7QUFBQSxJQUNNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBRDFCO0FBQUEsSUFFTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsOEJBQUQsQ0FGNUI7QUFBQSxJQUdNRyxpQkFBaUIsR0FBR0gsT0FBTyxDQUFDLG1DQUFELENBSGpDO0FBQUEsSUFJTUksa0JBQWtCLEdBQUdKLE9BQU8sQ0FBQyxvQ0FBRCxDQUpsQzs7SUFNUUssWSxHQUFnQ04sUyxDQUFoQ00sWTtJQUFjQyxhLEdBQWtCUCxTLENBQWxCTyxhOztJQUVoQkMsa0I7OztBQUNKLGdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxHQUFHSCxZQUFyQjtBQUFBLFFBQ01JLGFBQWEsR0FBR0gsYUFEdEI7QUFBQSxRQUVNSSxnQkFBZ0IsR0FBRyxJQUFJUixZQUFKLENBQWlCTSxZQUFqQixDQUZ6QjtBQUFBLFFBR01HLGlCQUFpQixHQUFHLElBQUlULFlBQUosQ0FBaUJPLGFBQWpCLENBSDFCO0FBQUEsUUFJTUcsaUNBQWlDLEdBQUcsQ0FDbENGLGdCQURrQyxFQUVsQ0MsaUJBRmtDLENBSjFDO0FBQUEsUUFRTUUsNkNBQTZDLEdBQUcsSUFBSVYsaUJBQUosQ0FBc0JTLGlDQUF0QixDQVJ0RDtBQUFBLFFBU01FLDJEQUEyRCxHQUFHLElBQUlWLGtCQUFKLENBQXVCUyw2Q0FBdkIsQ0FUcEU7QUFBQSxRQVVNRSxLQUFLLEdBQUcsQ0FDTkQsMkRBRE0sQ0FWZDtBQURZLDJGQWVOQyxLQWZNO0FBZ0JiOzs7RUFqQjhCZCxVOztBQW9CakNlLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsa0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IFJ1bGVSdWxlTmFtZSwgRXJyb3JSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBEb2N1bWVudERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZVJ1bGVOYW1lID0gUnVsZVJ1bGVOYW1lLFxuICAgICAgICAgIGVycm9yUnVsZU5hbWUgPSBFcnJvclJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgZXJyb3JSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGVycm9yUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBlcnJvclJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgb25lT3JNb3JlQ2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudERlZmluaXRpb247XG4iXX0=