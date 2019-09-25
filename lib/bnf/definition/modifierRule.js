'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var ModifierRuleDefinition = function (_Definition) {
  _inherits(ModifierRuleDefinition, _Definition);

  function ModifierRuleDefinition(terminalSymbolContent) {
    _classCallCheck(this, ModifierRuleDefinition);

    var content = terminalSymbolContent,
        ///
    noWhitespace = true,
        terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace),
        parts = [terminalSymbolPart];

    return _possibleConstructorReturn(this, (ModifierRuleDefinition.__proto__ || Object.getPrototypeOf(ModifierRuleDefinition)).call(this, parts));
  }

  return ModifierRuleDefinition;
}(Definition);

module.exports = ModifierRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9tb2RpZmllclJ1bGUuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xDb250ZW50IiwiY29udGVudCIsIm5vV2hpdGVzcGFjZSIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGlDQUFSLENBRDNCOztJQUdNRSxzQjs7O0FBQ0osa0NBQVlDLHFCQUFaLEVBQW1DO0FBQUE7O0FBQ2pDLFFBQU1DLFVBQVVELHFCQUFoQjtBQUFBLFFBQXdDO0FBQ2xDRSxtQkFBZSxJQURyQjtBQUFBLFFBRU1DLHFCQUFxQixJQUFJTCxrQkFBSixDQUF1QkcsT0FBdkIsRUFBZ0NDLFlBQWhDLENBRjNCO0FBQUEsUUFHTUUsUUFBUSxDQUNORCxrQkFETSxDQUhkOztBQURpQywySUFRM0JDLEtBUjJCO0FBU2xDOzs7RUFWa0NSLFU7O0FBYXJDUyxPQUFPQyxPQUFQLEdBQWlCUCxzQkFBakIiLCJmaWxlIjoibW9kaWZpZXJSdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jbGFzcyBNb2RpZmllclJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsU3ltYm9sQ29udGVudCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbFN5bWJvbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSB0cnVlLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGlmaWVyUnVsZURlZmluaXRpb247Il19