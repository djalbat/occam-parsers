'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    RuleNameNode = require('../node/ruleName'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var RuleNameRuleName = ruleNames.RuleNameRuleName;

var RuleNameRule = function (_Rule) {
  _inherits(RuleNameRule, _Rule);

  function RuleNameRule() {
    _classCallCheck(this, RuleNameRule);

    var nameSignificantTokenType = 'name',
        nameSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(nameSignificantTokenType),
        name = RuleNameRuleName,
        definitions = [nameSignificantTokenTypeDefinition],
        Node = RuleNameNode;

    return _possibleConstructorReturn(this, (RuleNameRule.__proto__ || Object.getPrototypeOf(RuleNameRule)).call(this, name, definitions, Node));
  }

  return RuleNameRule;
}(Rule);

module.exports = RuleNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUnVsZU5hbWUiLCJSdWxlTmFtZVJ1bGUiLCJuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01HLGlDQUFpQ0gsUUFBUSxvQ0FBUixDQUh2Qzs7SUFLUUksZ0IsR0FBcUJILFMsQ0FBckJHLGdCOztJQUVGQyxZOzs7QUFDSiwwQkFBYztBQUFBOztBQUNaLFFBQU1DLDJCQUEyQixNQUFqQztBQUFBLFFBQ01DLHFDQUFxQyxJQUFJSiw4QkFBSixDQUFtQ0csd0JBQW5DLENBRDNDO0FBQUEsUUFFTUUsT0FBT0osZ0JBRmI7QUFBQSxRQUdNSyxjQUFjLENBQ1pGLGtDQURZLENBSHBCO0FBQUEsUUFNTUcsT0FBT1IsWUFOYjs7QUFEWSx1SEFTTk0sSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWHdCWCxJOztBQWMzQlksT0FBT0MsT0FBUCxHQUFpQlAsWUFBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcnVsZU5hbWUnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY29uc3QgeyBSdWxlTmFtZVJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJ1bGVOYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAnbmFtZScsXG4gICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24obmFtZVNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gUnVsZU5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSdWxlTmFtZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZVJ1bGU7XG4iXX0=