'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    SignificantTokenTypePart = require('../../part/significantTokenType');

var RegularExpressionSignificantTokenTypeRule = function (_Rule) {
  _inherits(RegularExpressionSignificantTokenTypeRule, _Rule);

  function RegularExpressionSignificantTokenTypeRule() {
    _classCallCheck(this, RegularExpressionSignificantTokenTypeRule);

    var noWhitespace = false,
        regularExpressionSignificantTokenType = 'regularExpression',
        regularExpressionSignificantTokenTypePart = new SignificantTokenTypePart(regularExpressionSignificantTokenType, noWhitespace),
        parts = [regularExpressionSignificantTokenTypePart];

    return _possibleConstructorReturn(this, (RegularExpressionSignificantTokenTypeRule.__proto__ || Object.getPrototypeOf(RegularExpressionSignificantTokenTypeRule)).call(this, parts));
  }

  return RegularExpressionSignificantTokenTypeRule;
}(Rule);

module.exports = RegularExpressionSignificantTokenTypeRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwibm9XaGl0ZXNwYWNlIiwicmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjtBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSxpQ0FBUixDQURqQzs7SUFHTUUseUM7OztBQUNKLHVEQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLHdDQUF3QyxtQkFEOUM7QUFBQSxRQUVNQyw0Q0FBNEMsSUFBSUosd0JBQUosQ0FBNkJHLHFDQUE3QixFQUFvRUQsWUFBcEUsQ0FGbEQ7QUFBQSxRQUdNRyxRQUFRLENBQ05ELHlDQURNLENBSGQ7O0FBRFksaUxBUU5DLEtBUk07QUFTYjs7O0VBVnFEUCxJOztBQWF4RFEsT0FBT0MsT0FBUCxHQUFpQk4seUNBQWpCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlID0gJ3JlZ3VsYXJFeHByZXNzaW9uJyxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQocmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZVJ1bGU7XG4iXX0=