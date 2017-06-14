'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var ZeroOrMorePartsDefinition = function (_Definition) {
  _inherits(ZeroOrMorePartsDefinition, _Definition);

  function ZeroOrMorePartsDefinition() {
    _classCallCheck(this, ZeroOrMorePartsDefinition);

    var partProductionName = 'part',
        asteriskTerminalSymbolContent = '*',
        asteriskTerminalSymbolNoWhitespace = true,
        partProductionNamePart = new ProductionNamePart(partProductionName),
        asteriskTerminalSymbolPart = new TerminalSymbolPart(asteriskTerminalSymbolContent, asteriskTerminalSymbolNoWhitespace),
        parts = [partProductionNamePart, asteriskTerminalSymbolPart];

    return _possibleConstructorReturn(this, (ZeroOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsDefinition)).call(this, parts));
  }

  return ZeroOrMorePartsDefinition;
}(Definition);

module.exports = ZeroOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwicGFydFByb2R1Y3Rpb25OYW1lIiwiYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sTm9XaGl0ZXNwYWNlIiwicGFydFByb2R1Y3Rpb25OYW1lUGFydCIsImFzdGVyaXNrVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0lBSU1HLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLHFCQUFxQixNQUEzQjtBQUFBLFFBQ01DLGdDQUFnQyxHQUR0QztBQUFBLFFBRU1DLHFDQUFxQyxJQUYzQztBQUFBLFFBR01DLHlCQUF5QixJQUFJTCxrQkFBSixDQUF1QkUsa0JBQXZCLENBSC9CO0FBQUEsUUFJTUksNkJBQTZCLElBQUlQLGtCQUFKLENBQXVCSSw2QkFBdkIsRUFBc0RDLGtDQUF0RCxDQUpuQztBQUFBLFFBS01HLFFBQVEsQ0FDTkYsc0JBRE0sRUFFTkMsMEJBRk0sQ0FMZDs7QUFEWSxpSkFXTkMsS0FYTTtBQVliOzs7RUFicUNWLFU7O0FBZ0J4Q1csT0FBT0MsT0FBUCxHQUFpQlIseUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbk5hbWUgPSAncGFydCcsXG4gICAgICAgICAgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnKicsXG4gICAgICAgICAgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQsIGFzdGVyaXNrVGVybWluYWxTeW1ib2xOb1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIGFzdGVyaXNrVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb247XG4iXX0=