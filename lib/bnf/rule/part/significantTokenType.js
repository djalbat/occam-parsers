'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    SignificantTokenTypePart = require('../../part/significantTokenType');

var SignificantTokenTypePartRule = function (_Rule) {
  _inherits(SignificantTokenTypePartRule, _Rule);

  function SignificantTokenTypePartRule() {
    _classCallCheck(this, SignificantTokenTypePartRule);

    var noWhitespace = false,
        significantTokenPart = new SignificantTokenTypePart(noWhitespace),
        parts = [significantTokenPart];

    return _possibleConstructorReturn(this, (SignificantTokenTypePartRule.__proto__ || Object.getPrototypeOf(SignificantTokenTypePartRule)).call(this, parts));
  }

  return SignificantTokenTypePartRule;
}(Rule);

module.exports = SignificantTokenTypePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UnVsZSIsIm5vV2hpdGVzcGFjZSIsInNpZ25pZmljYW50VG9rZW5QYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjtBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSxpQ0FBUixDQURqQzs7SUFHTUUsNEI7OztBQUNKLDBDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLHVCQUF1QixJQUFJSCx3QkFBSixDQUE2QkUsWUFBN0IsQ0FEN0I7QUFBQSxRQUVNRSxRQUFRLENBQ05ELG9CQURNLENBRmQ7O0FBRFksdUpBT05DLEtBUE07QUFRYjs7O0VBVHdDTixJOztBQVkzQ08sT0FBT0MsT0FBUCxHQUFpQkwsNEJBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5QYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UnVsZTtcbiJdfQ==