'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var OneOrMorePartsDefinition = function (_Definition) {
  _inherits(OneOrMorePartsDefinition, _Definition);

  function OneOrMorePartsDefinition() {
    _classCallCheck(this, OneOrMorePartsDefinition);

    var partProductionName = 'part',
        plusTerminalSymbolContent = '+',
        plusTerminalSymbolNoWhitespace = true,
        partProductionNamePart = new ProductionNamePart(partProductionName),
        plusTerminalSymbolPart = new TerminalSymbolPart(plusTerminalSymbolContent, plusTerminalSymbolNoWhitespace),
        parts = [partProductionNamePart, plusTerminalSymbolPart];

    return _possibleConstructorReturn(this, (OneOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(OneOrMorePartsDefinition)).call(this, parts));
  }

  return OneOrMorePartsDefinition;
}(Definition);

module.exports = OneOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIk9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiIsInBhcnRQcm9kdWN0aW9uTmFtZSIsInBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwbHVzVGVybWluYWxTeW1ib2xOb1doaXRlc3BhY2UiLCJwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicGx1c1Rlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRjNCOztJQUlNRyx3Qjs7O0FBQ0osc0NBQWM7QUFBQTs7QUFDWixRQUFNQyxxQkFBcUIsTUFBM0I7QUFBQSxRQUNNQyw0QkFBNEIsR0FEbEM7QUFBQSxRQUVNQyxpQ0FBaUMsSUFGdkM7QUFBQSxRQUdNQyx5QkFBeUIsSUFBSUwsa0JBQUosQ0FBdUJFLGtCQUF2QixDQUgvQjtBQUFBLFFBSU1JLHlCQUF5QixJQUFJUCxrQkFBSixDQUF1QkkseUJBQXZCLEVBQWtEQyw4QkFBbEQsQ0FKL0I7QUFBQSxRQUtNRyxRQUFRLENBQ05GLHNCQURNLEVBRU5DLHNCQUZNLENBTGQ7O0FBRFksK0lBV05DLEtBWE07QUFZYjs7O0VBYm9DVixVOztBQWdCdkNXLE9BQU9DLE9BQVAsR0FBaUJSLHdCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBwbHVzVGVybWluYWxTeW1ib2xDb250ZW50ID0gJysnLFxuICAgICAgICAgIHBsdXNUZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBwbHVzVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChwbHVzVGVybWluYWxTeW1ib2xDb250ZW50LCBwbHVzVGVybWluYWxTeW1ib2xOb1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIHBsdXNUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNEZWZpbml0aW9uO1xuIl19