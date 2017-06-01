'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ProductionNamePart = require('../part/productionName');

var EndOfLineProductionNameRule = function (_Rule) {
  _inherits(EndOfLineProductionNameRule, _Rule);

  function EndOfLineProductionNameRule() {
    _classCallCheck(this, EndOfLineProductionNameRule);

    var noWhitespace = false,
        endOfLineProductionName = 'endOfLine',
        endOfLineProductionNamePart = new ProductionNamePart(endOfLineProductionName, noWhitespace),
        parts = [endOfLineProductionNamePart];

    return _possibleConstructorReturn(this, (EndOfLineProductionNameRule.__proto__ || Object.getPrototypeOf(EndOfLineProductionNameRule)).call(this, parts));
  }

  return EndOfLineProductionNameRule;
}(Rule);

module.exports = EndOfLineProductionNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9lbmRPZkxpbmVQcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUnVsZSIsIm5vV2hpdGVzcGFjZSIsImVuZE9mTGluZVByb2R1Y3Rpb25OYW1lIiwiZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjs7SUFHTUUsMkI7OztBQUNKLHlDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLDBCQUEwQixXQURoQztBQUFBLFFBRU1DLDhCQUE4QixJQUFJSixrQkFBSixDQUF1QkcsdUJBQXZCLEVBQWdERCxZQUFoRCxDQUZwQztBQUFBLFFBR01HLFFBQVEsQ0FDTkQsMkJBRE0sQ0FIZDs7QUFEWSxxSkFRTkMsS0FSTTtBQVNiOzs7RUFWdUNQLEk7O0FBYTFDUSxPQUFPQyxPQUFQLEdBQWlCTiwyQkFBakIiLCJmaWxlIjoiZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIEVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQoZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVSdWxlO1xuIl19