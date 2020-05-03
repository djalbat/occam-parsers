"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var Definition = require("../definition"),
    TerminalSymbolPart = require("../part/terminal/terminalSymbol");

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var NoWhitespacePartDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(NoWhitespacePartDefinition, _Definition);

  function NoWhitespacePartDefinition() {
    _classCallCheck(this, NoWhitespacePartDefinition);

    var content = NO_WHITESPACE,
        terminalSymbolPart = new TerminalSymbolPart(content),
        parts = [terminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartDefinition).call(this, parts));
  }

  return NoWhitespacePartDefinition;
}(Definition);

module.exports = NoWhitespacePartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsImNvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCO0FBQUEsSUFDTUUsa0JBQWtCLEdBQUdGLE9BQU8sQ0FBQyxpQ0FBRCxDQURsQzs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsYUFERixHQUNvQkQsY0FEcEIsQ0FDRUMsYUFERjs7SUFHQUMsMEI7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsT0FBTyxHQUFHRixhQUFoQjtBQUFBLFFBQ01HLGtCQUFrQixHQUFHLElBQUlMLGtCQUFKLENBQXVCSSxPQUF2QixDQUQzQjtBQUFBLFFBRU1FLEtBQUssR0FBRyxDQUNORCxrQkFETSxDQUZkO0FBRFksbUdBT05DLEtBUE07QUFRYjs7O0VBVHNDUCxVOztBQVl6Q1EsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCwwQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZShcIm9jY2FtLWxleGVyc1wiKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoXCIuLi9kZWZpbml0aW9uXCIpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZShcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIik7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBOT19XSElURVNQQUNFLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbjtcbiJdfQ==