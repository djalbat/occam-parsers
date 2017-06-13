'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    NegatedPartDefinition = require('../definition/negatedPart');

var NegatedPartProduction = function (_Production) {
  _inherits(NegatedPartProduction, _Production);

  function NegatedPartProduction() {
    _classCallCheck(this, NegatedPartProduction);

    var negatedPartDefinition = new NegatedPartDefinition(),
        name = 'negatedPart',
        negatedPart = [negatedPartDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (NegatedPartProduction.__proto__ || Object.getPrototypeOf(NegatedPartProduction)).call(this, name, negatedPart, Node));
  }

  return NegatedPartProduction;
}(Production);

module.exports = NegatedPartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9uZWdhdGVkUGFydC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIk5lZ2F0ZWRQYXJ0RGVmaW5pdGlvbiIsIk5lZ2F0ZWRQYXJ0UHJvZHVjdGlvbiIsIm5lZ2F0ZWRQYXJ0RGVmaW5pdGlvbiIsIm5hbWUiLCJuZWdhdGVkUGFydCIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7QUFBQSxJQUVNRSx3QkFBd0JGLFFBQVEsMkJBQVIsQ0FGOUI7O0lBSU1HLHFCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLHdCQUF3QixJQUFJRixxQkFBSixFQUE5QjtBQUFBLFFBQ01HLE9BQU8sYUFEYjtBQUFBLFFBRU1DLGNBQWMsQ0FDWkYscUJBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTixlQUxiOztBQURZLHlJQVFOSSxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWaUNSLFU7O0FBYXBDUyxPQUFPQyxPQUFQLEdBQWlCTixxQkFBakIiLCJmaWxlIjoibmVnYXRlZFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgTmVnYXRlZFBhcnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9uZWdhdGVkUGFydCcpO1xuXG5jbGFzcyBOZWdhdGVkUGFydFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmVnYXRlZFBhcnREZWZpbml0aW9uID0gbmV3IE5lZ2F0ZWRQYXJ0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnbmVnYXRlZFBhcnQnLFxuICAgICAgICAgIG5lZ2F0ZWRQYXJ0ID0gW1xuICAgICAgICAgICAgbmVnYXRlZFBhcnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgbmVnYXRlZFBhcnQsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOZWdhdGVkUGFydFByb2R1Y3Rpb247XG4iXX0=