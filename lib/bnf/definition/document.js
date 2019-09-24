'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

var RuleRuleName = ruleNames.RuleRuleName,
    ErrorRuleName = ruleNames.ErrorRuleName;

var DocumentDefinition = function (_Definition) {
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

    return _possibleConstructorReturn(this, (DocumentDefinition.__proto__ || Object.getPrototypeOf(DocumentDefinition)).call(this, parts));
  }

  return DocumentDefinition;
}(Definition);

module.exports = DocumentDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiUnVsZVJ1bGVOYW1lIiwiRXJyb3JSdWxlTmFtZSIsIkRvY3VtZW50RGVmaW5pdGlvbiIsInJ1bGVSdWxlTmFtZSIsImVycm9yUnVsZU5hbWUiLCJydWxlUnVsZU5hbWVQYXJ0IiwiZXJyb3JSdWxlTmFtZVBhcnQiLCJydWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHMiLCJjaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnQiLCJvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSw4QkFBUixDQUZyQjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxtQ0FBUixDQUgxQjtBQUFBLElBSU1JLHFCQUFxQkosUUFBUSxvQ0FBUixDQUozQjs7SUFNUUssWSxHQUFnQ04sUyxDQUFoQ00sWTtJQUFjQyxhLEdBQWtCUCxTLENBQWxCTyxhOztJQUVoQkMsa0I7OztBQUNKLGdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZUgsWUFBckI7QUFBQSxRQUNNSSxnQkFBZ0JILGFBRHRCO0FBQUEsUUFFTUksbUJBQW1CLElBQUlSLFlBQUosQ0FBaUJNLFlBQWpCLENBRnpCO0FBQUEsUUFHTUcsb0JBQW9CLElBQUlULFlBQUosQ0FBaUJPLGFBQWpCLENBSDFCO0FBQUEsUUFJTUcsb0NBQW9DLENBQ2xDRixnQkFEa0MsRUFFbENDLGlCQUZrQyxDQUoxQztBQUFBLFFBUU1FLGdEQUFnRCxJQUFJVixpQkFBSixDQUFzQlMsaUNBQXRCLENBUnREO0FBQUEsUUFTTUUsOERBQThELElBQUlWLGtCQUFKLENBQXVCUyw2Q0FBdkIsQ0FUcEU7QUFBQSxRQVVNRSxRQUFRLENBQ05ELDJEQURNLENBVmQ7O0FBRFksbUlBZU5DLEtBZk07QUFnQmI7OztFQWpCOEJkLFU7O0FBb0JqQ2UsT0FBT0MsT0FBUCxHQUFpQlYsa0JBQWpCIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IFJ1bGVSdWxlTmFtZSwgRXJyb3JSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBEb2N1bWVudERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZVJ1bGVOYW1lID0gUnVsZVJ1bGVOYW1lLFxuICAgICAgICAgIGVycm9yUnVsZU5hbWUgPSBFcnJvclJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgZXJyb3JSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGVycm9yUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBlcnJvclJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgb25lT3JNb3JlQ2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudERlZmluaXRpb247XG4iXX0=