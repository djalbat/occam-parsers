'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    EndOfLineSymbolNode = require('../node/endOfLineSymbol'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var EndOfLineSymbolProduction = function (_Production) {
  _inherits(EndOfLineSymbolProduction, _Production);

  function EndOfLineSymbolProduction() {
    _classCallCheck(this, EndOfLineSymbolProduction);

    var endOfLineTerminalSymbolContent = '<END_OF_LINE>',
        endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
        name = 'endOfLineSymbol',
        definitions = [endOfLineTerminalSymbolDefinition],
        Node = EndOfLineSymbolNode;

    return _possibleConstructorReturn(this, (EndOfLineSymbolProduction.__proto__ || Object.getPrototypeOf(EndOfLineSymbolProduction)).call(this, name, definitions, Node));
  }

  return EndOfLineSymbolProduction;
}(Production);

module.exports = EndOfLineSymbolProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9lbmRPZkxpbmVTeW1ib2wuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJFbmRPZkxpbmVTeW1ib2xOb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiRW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbiIsImVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCIsImVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEseUJBQVIsQ0FENUI7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLGlDQUFpQyxlQUF2QztBQUFBLFFBQ01DLG9DQUFvQyxJQUFJSCx3QkFBSixDQUE2QkUsOEJBQTdCLENBRDFDO0FBQUEsUUFFTUUsT0FBTyxpQkFGYjtBQUFBLFFBR01DLGNBQWMsQ0FDWkYsaUNBRFksQ0FIcEI7QUFBQSxRQU1NRyxPQUFPUCxtQkFOYjs7QUFEWSxpSkFTTkssSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWHFDVCxVOztBQWN4Q1UsT0FBT0MsT0FBUCxHQUFpQlAseUJBQWpCIiwiZmlsZSI6ImVuZE9mTGluZVN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEVuZE9mTGluZVN5bWJvbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2VuZE9mTGluZVN5bWJvbCcpLFxuICAgICAgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc8RU5EX09GX0xJTkU+JyxcbiAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9ICdlbmRPZkxpbmVTeW1ib2wnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRW5kT2ZMaW5lU3ltYm9sTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbjtcbiJdfQ==