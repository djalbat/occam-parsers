"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Definition = require("../definition"),
    TerminalSymbolPart = require("../part/terminal/terminalSymbol");

var QuantifierRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(QuantifierRuleDefinition, _Definition);

  function QuantifierRuleDefinition(terminalSymbolContent) {
    _classCallCheck(this, QuantifierRuleDefinition);

    var content = terminalSymbolContent,
        ///
    terminalSymbolPart = new TerminalSymbolPart(content),
        parts = [terminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(QuantifierRuleDefinition).call(this, parts));
  }

  return QuantifierRuleDefinition;
}(Definition);

module.exports = QuantifierRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YW50aWZpZXJSdWxlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xDb250ZW50IiwiY29udGVudCIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCO0FBQUEsSUFDTUMsa0JBQWtCLEdBQUdELE9BQU8sQ0FBQyxpQ0FBRCxDQURsQzs7SUFHTUUsd0I7OztBQUNKLG9DQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxRQUFNQyxPQUFPLEdBQUdELHFCQUFoQjtBQUFBLFFBQXdDO0FBQ2xDRSxJQUFBQSxrQkFBa0IsR0FBRyxJQUFJSixrQkFBSixDQUF1QkcsT0FBdkIsQ0FEM0I7QUFBQSxRQUVNRSxLQUFLLEdBQUcsQ0FDTkQsa0JBRE0sQ0FGZDtBQURpQyxpR0FPM0JDLEtBUDJCO0FBUWxDOzs7RUFUb0NQLFU7O0FBWXZDUSxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLHdCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb25cIiksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiKTtcblxuY2xhc3MgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsU3ltYm9sQ29udGVudCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbFN5bWJvbENvbnRlbnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uO1xuIl19