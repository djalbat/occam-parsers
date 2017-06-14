'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var NoWhitespacePartDefinition = function (_Definition) {
  _inherits(NoWhitespacePartDefinition, _Definition);

  function NoWhitespacePartDefinition() {
    _classCallCheck(this, NoWhitespacePartDefinition);

    var partProductionName = 'part',
        noWhitespaceTerminalSymbolContent = 'NO_WHITESPACE',
        noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent),
        partProductionNamePart = new ProductionNamePart(partProductionName),
        parts = [noWhitespaceTerminalSymbolPart, partProductionNamePart];

    return _possibleConstructorReturn(this, (NoWhitespacePartDefinition.__proto__ || Object.getPrototypeOf(NoWhitespacePartDefinition)).call(this, parts));
  }

  return NoWhitespacePartDefinition;
}(Definition);

module.exports = NoWhitespacePartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJwYXJ0UHJvZHVjdGlvbk5hbWUiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0lBSU1HLDBCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLFFBQU1DLHFCQUFxQixNQUEzQjtBQUFBLFFBQ01DLG9DQUFvQyxlQUQxQztBQUFBLFFBRU1DLGlDQUFpQyxJQUFJTCxrQkFBSixDQUF1QkksaUNBQXZCLENBRnZDO0FBQUEsUUFHTUUseUJBQXlCLElBQUlMLGtCQUFKLENBQXVCRSxrQkFBdkIsQ0FIL0I7QUFBQSxRQUlNSSxRQUFRLENBQ05GLDhCQURNLEVBRU5DLHNCQUZNLENBSmQ7O0FBRFksbUpBVU5DLEtBVk07QUFXYjs7O0VBWnNDVCxVOztBQWV6Q1UsT0FBT0MsT0FBUCxHQUFpQlAsMEJBQWpCIiwiZmlsZSI6Im5vV2hpdGVzcGFjZVBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnTk9fV0hJVEVTUEFDRScsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHBhcnRQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uO1xuIl19