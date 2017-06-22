'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    EndOfLineNode = require('../node/epsilon'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var EpsilonProduction = function (_Production) {
  _inherits(EpsilonProduction, _Production);

  function EpsilonProduction() {
    _classCallCheck(this, EpsilonProduction);

    var epsilonTerminalSymbolContent = 'ε',
        epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
        name = 'epsilon',
        definitions = [epsilonTerminalSymbolDefinition],
        Node = EndOfLineNode;

    return _possibleConstructorReturn(this, (EpsilonProduction.__proto__ || Object.getPrototypeOf(EpsilonProduction)).call(this, name, definitions, Node));
  }

  return EpsilonProduction;
}(Production);

module.exports = EpsilonProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL2Vwc2lsb24uanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJFbmRPZkxpbmVOb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiRXBzaWxvblByb2R1Y3Rpb24iLCJlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50IiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsaUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLGlCOzs7QUFDSiwrQkFBYztBQUFBOztBQUNaLFFBQU1DLCtCQUErQixHQUFyQztBQUFBLFFBQ01DLGtDQUFrQyxJQUFJSCx3QkFBSixDQUE2QkUsNEJBQTdCLENBRHhDO0FBQUEsUUFFTUUsT0FBTyxTQUZiO0FBQUEsUUFHTUMsY0FBYyxDQUNaRiwrQkFEWSxDQUhwQjtBQUFBLFFBTU1HLE9BQU9QLGFBTmI7O0FBRFksaUlBU05LLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVg2QlQsVTs7QUFjaENVLE9BQU9DLE9BQVAsR0FBaUJQLGlCQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgRW5kT2ZMaW5lTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZXBzaWxvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jbGFzcyBFcHNpbG9uUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50ID0gJ861JyxcbiAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbihlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gJ2Vwc2lsb24nLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVuZE9mTGluZU5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25Qcm9kdWN0aW9uO1xuIl19