'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    RegularExpressionPart = require('../../part/regularExpression');

var RegularExpressionPartRule = function (_Rule) {
  _inherits(RegularExpressionPartRule, _Rule);

  function RegularExpressionPartRule() {
    _classCallCheck(this, RegularExpressionPartRule);

    var noWhitespace = false,
        regularExpressionPart = new RegularExpressionPart(noWhitespace),
        parts = [regularExpressionPart];

    return _possibleConstructorReturn(this, (RegularExpressionPartRule.__proto__ || Object.getPrototypeOf(RegularExpressionPartRule)).call(this, parts));
  }

  return RegularExpressionPartRule;
}(Rule);

module.exports = RegularExpressionPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwiUmVndWxhckV4cHJlc3Npb25QYXJ0UnVsZSIsIm5vV2hpdGVzcGFjZSIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsOEJBQVIsQ0FEOUI7O0lBR01FLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyx3QkFBd0IsSUFBSUgscUJBQUosQ0FBMEJFLFlBQTFCLENBRDlCO0FBQUEsUUFFTUUsUUFBUSxDQUNORCxxQkFETSxDQUZkOztBQURZLGlKQU9OQyxLQVBNO0FBUWI7OztFQVRxQ04sSTs7QUFZeENPLE9BQU9DLE9BQVAsR0FBaUJMLHlCQUFqQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvcmVndWxhckV4cHJlc3Npb24nKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0UnVsZTtcbiJdfQ==