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
    exclamationMark = specialSymbols.exclamationMark;

var LookAheadModifierRuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(LookAheadModifierRuleDefinition, _Definition);

  function LookAheadModifierRuleDefinition() {
    _classCallCheck(this, LookAheadModifierRuleDefinition);

    var content = exclamationMark,
        ///
    terminalSymbolPart = new TerminalSymbolPart(content),
        parts = [terminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(LookAheadModifierRuleDefinition).call(this, parts));
  }

  return LookAheadModifierRuleDefinition;
}(Definition);

module.exports = LookAheadModifierRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2tBaGVhZE1vZGlmaWVyUnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sUGFydCIsInNwZWNpYWxTeW1ib2xzIiwiZXhjbGFtYXRpb25NYXJrIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsImNvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCO0FBQUEsSUFDTUUsa0JBQWtCLEdBQUdGLE9BQU8sQ0FBQyxpQ0FBRCxDQURsQzs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsZUFERixHQUNzQkQsY0FEdEIsQ0FDRUMsZUFERjs7SUFHQUMsK0I7OztBQUNKLDZDQUFjO0FBQUE7O0FBQ1osUUFBTUMsT0FBTyxHQUFHRixlQUFoQjtBQUFBLFFBQWtDO0FBQzVCRyxJQUFBQSxrQkFBa0IsR0FBRyxJQUFJTCxrQkFBSixDQUF1QkksT0FBdkIsQ0FEM0I7QUFBQSxRQUVNRSxLQUFLLEdBQUcsQ0FDTkQsa0JBRE0sQ0FGZDtBQURZLHdHQU9OQyxLQVBNO0FBUWI7OztFQVQyQ1AsVTs7QUFZOUNRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsK0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvblwiKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCIpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGV4Y2xhbWF0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uO1xuIl19