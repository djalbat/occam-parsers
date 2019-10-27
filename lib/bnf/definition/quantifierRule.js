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
    nonWhitespace = true,
        terminalSymbolPart = new TerminalSymbolPart(content, nonWhitespace),
        parts = [terminalSymbolPart];

    return _possibleConstructorReturn(this, (QuantifierRuleDefinition.__proto__ || Object.getPrototypeOf(QuantifierRuleDefinition)).call(this, parts));
  }

  return QuantifierRuleDefinition;
}(Definition);

module.exports = QuantifierRuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsInRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNvbnRlbnQiLCJub25XaGl0ZXNwYWNlIiwidGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsaUNBQVIsQ0FEM0I7O0lBR01FLHdCOzs7QUFDSixvQ0FBWUMscUJBQVosRUFBbUM7QUFBQTs7QUFDakMsUUFBTUMsVUFBVUQscUJBQWhCO0FBQUEsUUFBd0M7QUFDbENFLG9CQUFnQixJQUR0QjtBQUFBLFFBRU1DLHFCQUFxQixJQUFJTCxrQkFBSixDQUF1QkcsT0FBdkIsRUFBZ0NDLGFBQWhDLENBRjNCO0FBQUEsUUFHTUUsUUFBUSxDQUNORCxrQkFETSxDQUhkOztBQURpQywrSUFRM0JDLEtBUjJCO0FBU2xDOzs7RUFWb0NSLFU7O0FBYXZDUyxPQUFPQyxPQUFQLEdBQWlCUCx3QkFBakIiLCJmaWxlIjoicXVhbnRpZmllclJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNsYXNzIFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFN5bWJvbENvbnRlbnQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxTeW1ib2xDb250ZW50LCAgLy8vXG4gICAgICAgICAgbm9uV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50LCBub25XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbjtcbiJdfQ==