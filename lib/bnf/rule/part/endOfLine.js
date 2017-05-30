'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    EndOfLinePart = require('../../part/endOfLine');

var EndOfLinePartRule = function (_Rule) {
  _inherits(EndOfLinePartRule, _Rule);

  function EndOfLinePartRule() {
    _classCallCheck(this, EndOfLinePartRule);

    var noWhitespace = false,
        endOfLinePart = new EndOfLinePart(noWhitespace),
        parts = [endOfLinePart];

    return _possibleConstructorReturn(this, (EndOfLinePartRule.__proto__ || Object.getPrototypeOf(EndOfLinePartRule)).call(this, parts));
  }

  return EndOfLinePartRule;
}(Rule);

module.exports = EndOfLinePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wYXJ0L2VuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIkVuZE9mTGluZVBhcnQiLCJFbmRPZkxpbmVQYXJ0UnVsZSIsIm5vV2hpdGVzcGFjZSIsImVuZE9mTGluZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsWUFBUixDQUFiO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCOztJQUdNRSxpQjs7O0FBQ0osK0JBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsZ0JBQWdCLElBQUlILGFBQUosQ0FBa0JFLFlBQWxCLENBRHRCO0FBQUEsUUFFTUUsUUFBUSxDQUNORCxhQURNLENBRmQ7O0FBRFksaUlBT05DLEtBUE07QUFRYjs7O0VBVDZCTixJOztBQVloQ08sT0FBT0MsT0FBUCxHQUFpQkwsaUJBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUnKSxcbiAgICAgIEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L2VuZE9mTGluZScpO1xuXG5jbGFzcyBFbmRPZkxpbmVQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQobm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGVuZE9mTGluZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUGFydFJ1bGU7XG4iXX0=