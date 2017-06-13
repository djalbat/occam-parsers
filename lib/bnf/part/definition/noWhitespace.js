'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol');

var NoWhitespaceDefinition = function (_Definition) {
  _inherits(NoWhitespaceDefinition, _Definition);

  function NoWhitespaceDefinition() {
    _classCallCheck(this, NoWhitespaceDefinition);

    var noWhitespace = false,
        noWhitespaceTerminalSymbolContent = '<NO_WHITESPACE>',
        noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
        parts = [noWhitespaceTerminalSymbolPart];

    return _possibleConstructorReturn(this, (NoWhitespaceDefinition.__proto__ || Object.getPrototypeOf(NoWhitespaceDefinition)).call(this, parts));
  }

  return NoWhitespaceDefinition;
}(Definition);

module.exports = NoWhitespaceDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9kZWZpbml0aW9uL25vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIk5vV2hpdGVzcGFjZURlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxrQ0FBUixDQUQzQjs7SUFHTUUsc0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLG9DQUFvQyxpQkFEMUM7QUFBQSxRQUVNQyxpQ0FBaUMsSUFBSUosa0JBQUosQ0FBdUJHLGlDQUF2QixFQUEwREQsWUFBMUQsQ0FGdkM7QUFBQSxRQUdNRyxRQUFRLENBQ05ELDhCQURNLENBSGQ7O0FBRFksMklBUU5DLEtBUk07QUFTYjs7O0VBVmtDUCxVOztBQWFyQ1EsT0FBT0MsT0FBUCxHQUFpQk4sc0JBQWpCIiwiZmlsZSI6Im5vV2hpdGVzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50ID0gJzxOT19XSElURVNQQUNFPicsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VEZWZpbml0aW9uO1xuIl19