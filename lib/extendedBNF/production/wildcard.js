'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    WildcardNode = require('../node/wildcard'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var WildcardProduction = function (_Production) {
  _inherits(WildcardProduction, _Production);

  function WildcardProduction() {
    _classCallCheck(this, WildcardProduction);

    var wildcardTerminalSymbolContent = '.',
        wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
        name = 'wildcard',
        definitions = [wildcardTerminalSymbolDefinition],
        Node = WildcardNode;

    return _possibleConstructorReturn(this, (WildcardProduction.__proto__ || Object.getPrototypeOf(WildcardProduction)).call(this, name, definitions, Node));
  }

  return WildcardProduction;
}(Production);

module.exports = WildcardProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL3dpbGRjYXJkLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiV2lsZGNhcmROb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiV2lsZGNhcmRQcm9kdWN0aW9uIiwid2lsZGNhcmRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLGtCQUFSLENBRHJCO0FBQUEsSUFFTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRmpDOztJQUlNRyxrQjs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFDWixRQUFNQyxnQ0FBZ0MsR0FBdEM7QUFBQSxRQUNNQyxtQ0FBbUMsSUFBSUgsd0JBQUosQ0FBNkJFLDZCQUE3QixDQUR6QztBQUFBLFFBRU1FLE9BQU8sVUFGYjtBQUFBLFFBR01DLGNBQWMsQ0FDWkYsZ0NBRFksQ0FIcEI7QUFBQSxRQU1NRyxPQUFPUCxZQU5iOztBQURZLG1JQVNOSyxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYOEJULFU7O0FBY2pDVSxPQUFPQyxPQUFQLEdBQWlCUCxrQkFBakIiLCJmaWxlIjoid2lsZGNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBXaWxkY2FyZE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3dpbGRjYXJkJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNsYXNzIFdpbGRjYXJkUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICcuJyxcbiAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24od2lsZGNhcmRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSAnd2lsZGNhcmQnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBXaWxkY2FyZE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbGRjYXJkUHJvZHVjdGlvbjtcbiJdfQ==