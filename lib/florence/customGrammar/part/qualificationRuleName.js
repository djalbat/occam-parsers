'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QualificationRule = require('../rule/qualification'),
    RuleNamePart = require('../../../bnf/part/nonTerminal/ruleName');

var QualificationRuleNamePart = function (_RuleNamePart) {
  _inherits(QualificationRuleNamePart, _RuleNamePart);

  function QualificationRuleNamePart() {
    _classCallCheck(this, QualificationRuleNamePart);

    var ruleName = QualificationRule.ruleName;

    return _possibleConstructorReturn(this, (QualificationRuleNamePart.__proto__ || Object.getPrototypeOf(QualificationRuleNamePart)).call(this, ruleName));
  }

  return QualificationRuleNamePart;
}(RuleNamePart);

module.exports = QualificationRuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9jdXN0b21HcmFtbWFyL3BhcnQvcXVhbGlmaWNhdGlvblJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlF1YWxpZmljYXRpb25SdWxlIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFydCIsIlF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQkMsUUFBUSx1QkFBUixDQUExQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsd0NBQVIsQ0FEckI7O0lBR01FLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLFdBQVdKLGtCQUFrQkksUUFBbkM7O0FBRFksaUpBR05BLFFBSE07QUFJYjs7O0VBTHFDRixZOztBQVF4Q0csT0FBT0MsT0FBUCxHQUFpQkgseUJBQWpCIiwiZmlsZSI6InF1YWxpZmljYXRpb25SdWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUXVhbGlmaWNhdGlvblJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3F1YWxpZmljYXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uLy4uL2JuZi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyk7XG5cbmNsYXNzIFF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQgZXh0ZW5kcyBSdWxlTmFtZVBhcnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFF1YWxpZmljYXRpb25SdWxlLnJ1bGVOYW1lO1xuICAgIFxuICAgIHN1cGVyKHJ1bGVOYW1lKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1YWxpZmljYXRpb25SdWxlTmFtZVBhcnQ7XG4iXX0=