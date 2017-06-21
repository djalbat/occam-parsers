'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var SequenceOfPartsDefinition = function (_Definition) {
  _inherits(SequenceOfPartsDefinition, _Definition);

  function SequenceOfPartsDefinition(terminalSymbolContent) {
    _classCallCheck(this, SequenceOfPartsDefinition);

    var partProductionName = 'part',
        terminalSymbolNoWhitespace = true,
        partProductionNamePart = new ProductionNamePart(partProductionName),
        terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, terminalSymbolNoWhitespace),
        parts = [partProductionNamePart, terminalSymbolPart];

    return _possibleConstructorReturn(this, (SequenceOfPartsDefinition.__proto__ || Object.getPrototypeOf(SequenceOfPartsDefinition)).call(this, parts));
  }

  return SequenceOfPartsDefinition;
}(Definition);

module.exports = SequenceOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0UHJvZHVjdGlvbk5hbWUiLCJ0ZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSIsInBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjs7SUFJTUcseUI7OztBQUNKLHFDQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxRQUFNQyxxQkFBcUIsTUFBM0I7QUFBQSxRQUNNQyw2QkFBNkIsSUFEbkM7QUFBQSxRQUVNQyx5QkFBeUIsSUFBSUwsa0JBQUosQ0FBdUJHLGtCQUF2QixDQUYvQjtBQUFBLFFBR01HLHFCQUFxQixJQUFJUCxrQkFBSixDQUF1QkcscUJBQXZCLEVBQThDRSwwQkFBOUMsQ0FIM0I7QUFBQSxRQUlNRyxRQUFRLENBQ05GLHNCQURNLEVBRU5DLGtCQUZNLENBSmQ7O0FBRGlDLGlKQVUzQkMsS0FWMkI7QUFXbEM7OztFQVpxQ1YsVTs7QUFleENXLE9BQU9DLE9BQVAsR0FBaUJSLHlCQUFqQiIsImZpbGUiOiJzZXF1ZW5jZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybWluYWxTeW1ib2xDb250ZW50KSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sTm9XaGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwYXJ0UHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYWxTeW1ib2xDb250ZW50LCB0ZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb247XG4iXX0=