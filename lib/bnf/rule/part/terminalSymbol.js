'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolPart = require('../../part/terminalSymbol');

var TerminalSymbolPartRule = function (_Rule) {
  _inherits(TerminalSymbolPartRule, _Rule);

  function TerminalSymbolPartRule() {
    _classCallCheck(this, TerminalSymbolPartRule);

    var noWhitespace = false,
        terminalSymbolPart = new TerminalSymbolPart(noWhitespace),
        parts = [terminalSymbolPart];

    return _possibleConstructorReturn(this, (TerminalSymbolPartRule.__proto__ || Object.getPrototypeOf(TerminalSymbolPartRule)).call(this, parts));
  }

  return TerminalSymbolPartRule;
}(Rule);

module.exports = TerminalSymbolPartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wYXJ0L3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0UnVsZSIsIm5vV2hpdGVzcGFjZSIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsMkJBQVIsQ0FEM0I7O0lBR01FLHNCOzs7QUFDSixvQ0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyxxQkFBcUIsSUFBSUgsa0JBQUosQ0FBdUJFLFlBQXZCLENBRDNCO0FBQUEsUUFFTUUsUUFBUSxDQUNORCxrQkFETSxDQUZkOztBQURZLDJJQU9OQyxLQVBNO0FBUWI7OztFQVRrQ04sSTs7QUFZckNPLE9BQU9DLE9BQVAsR0FBaUJMLHNCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQYXJ0UnVsZTtcbiJdfQ==