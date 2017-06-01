'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    RegularExpressionPart = require('../part/regularExpression');

var RegularExpressionRule = function (_Rule) {
  _inherits(RegularExpressionRule, _Rule);

  function RegularExpressionRule() {
    _classCallCheck(this, RegularExpressionRule);

    var noWhitespace = false,
        regularExpressionPart = new RegularExpressionPart(noWhitespace),
        parts = [regularExpressionPart];

    return _possibleConstructorReturn(this, (RegularExpressionRule.__proto__ || Object.getPrototypeOf(RegularExpressionRule)).call(this, parts));
  }

  return RegularExpressionRule;
}(Rule);

module.exports = RegularExpressionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIm5vV2hpdGVzcGFjZSIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsMkJBQVIsQ0FEOUI7O0lBR01FLHFCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyx3QkFBd0IsSUFBSUgscUJBQUosQ0FBMEJFLFlBQTFCLENBRDlCO0FBQUEsUUFFTUUsUUFBUSxDQUNORCxxQkFETSxDQUZkOztBQURZLHlJQU9OQyxLQVBNO0FBUWI7OztFQVRpQ04sSTs7QUFZcENPLE9BQU9DLE9BQVAsR0FBaUJMLHFCQUFqQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcmVndWxhckV4cHJlc3Npb24nKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQobm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGU7XG4iXX0=