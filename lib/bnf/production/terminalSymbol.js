'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    TerminalSymbolRule = require('../rule/terminalSymbol'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var TerminalSymbolProduction = function (_Production) {
  _inherits(TerminalSymbolProduction, _Production);

  function TerminalSymbolProduction() {
    _classCallCheck(this, TerminalSymbolProduction);

    var terminalSymbolRule = new TerminalSymbolRule(),
        name = 'terminalSymbol',
        rules = [terminalSymbolRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (TerminalSymbolProduction.__proto__ || Object.getPrototypeOf(TerminalSymbolProduction)).call(this, name, rules, Node));
  }

  return TerminalSymbolProduction;
}(Production);

module.exports = TerminalSymbolProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIk5vblRlcm1pbmFsTm9kZSIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNJQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEekI7QUFBQSxJQUVJRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGdEI7O0lBSU1HLHdCOzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLFFBQU1DLHFCQUFxQixJQUFJSCxrQkFBSixFQUEzQjtBQUFBLFFBQ0lJLE9BQU8sZ0JBRFg7QUFBQSxRQUVJQyxRQUFRLENBQ05GLGtCQURNLENBRlo7QUFBQSxRQUtJRyxPQUFPTCxlQUxYOztBQURZLCtJQVFORyxJQVJNLEVBUUFDLEtBUkEsRUFRT0MsSUFSUDtBQVNiOzs7RUFWb0NSLFU7O0FBYXZDUyxPQUFPQyxPQUFQLEdBQWlCTix3QkFBakIiLCJmaWxlIjoidGVybWluYWxTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG4gICAgICAgIG5hbWUgPSAndGVybWluYWxTeW1ib2wnLFxuICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVcbiAgICAgICAgXSxcbiAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uO1xuIl19