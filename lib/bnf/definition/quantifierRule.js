'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var QuantifierRuleDefinition = function (_Definition) {
  _inherits(QuantifierRuleDefinition, _Definition);

  function QuantifierRuleDefinition(terminalSymbolContent) {
    _classCallCheck(this, QuantifierRuleDefinition);

    var content = terminalSymbolContent,
        ///
    noWhitespace = true,
        terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace),
        parts = [terminalSymbolPart];

    return _possibleConstructorReturn(this, (QuantifierRuleDefinition.__proto__ || Object.getPrototypeOf(QuantifierRuleDefinition)).call(this, parts));
  }

  return QuantifierRuleDefinition;
}(Definition);

module.exports = QuantifierRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsInRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNvbnRlbnQiLCJub1doaXRlc3BhY2UiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxpQ0FBUixDQUQzQjs7SUFHTUUsd0I7OztBQUNKLG9DQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxRQUFNQyxVQUFVRCxxQkFBaEI7QUFBQSxRQUF3QztBQUNsQ0UsbUJBQWUsSUFEckI7QUFBQSxRQUVNQyxxQkFBcUIsSUFBSUwsa0JBQUosQ0FBdUJHLE9BQXZCLEVBQWdDQyxZQUFoQyxDQUYzQjtBQUFBLFFBR01FLFFBQVEsQ0FDTkQsa0JBRE0sQ0FIZDs7QUFEaUMsK0lBUTNCQyxLQVIyQjtBQVNsQzs7O0VBVm9DUixVOztBQWF2Q1MsT0FBT0MsT0FBUCxHQUFpQlAsd0JBQWpCIiwiZmlsZSI6InF1YW50aWZpZXJSdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jbGFzcyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybWluYWxTeW1ib2xDb250ZW50KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsU3ltYm9sQ29udGVudCwgIC8vL1xuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uO1xuIl19