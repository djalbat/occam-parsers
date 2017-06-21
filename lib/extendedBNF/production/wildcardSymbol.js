'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    WildcardSymbolNode = require('../node/wildcardSymbol'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var WildcardSymbolProduction = function (_Production) {
  _inherits(WildcardSymbolProduction, _Production);

  function WildcardSymbolProduction() {
    _classCallCheck(this, WildcardSymbolProduction);

    var wildcardTerminalSymbolContent = '.',
        wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
        name = 'wildcardSymbol',
        definitions = [wildcardTerminalSymbolDefinition],
        Node = WildcardSymbolNode;

    return _possibleConstructorReturn(this, (WildcardSymbolProduction.__proto__ || Object.getPrototypeOf(WildcardSymbolProduction)).call(this, name, definitions, Node));
  }

  return WildcardSymbolProduction;
}(Production);

module.exports = WildcardSymbolProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL3dpbGRjYXJkU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiV2lsZGNhcmRTeW1ib2xOb2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiV2lsZGNhcmRTeW1ib2xQcm9kdWN0aW9uIiwid2lsZGNhcmRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLHdCOzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLFFBQU1DLGdDQUFnQyxHQUF0QztBQUFBLFFBQ01DLG1DQUFtQyxJQUFJSCx3QkFBSixDQUE2QkUsNkJBQTdCLENBRHpDO0FBQUEsUUFFTUUsT0FBTyxnQkFGYjtBQUFBLFFBR01DLGNBQWMsQ0FDWkYsZ0NBRFksQ0FIcEI7QUFBQSxRQU1NRyxPQUFPUCxrQkFOYjs7QUFEWSwrSUFTTkssSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWG9DVCxVOztBQWN2Q1UsT0FBT0MsT0FBUCxHQUFpQlAsd0JBQWpCIiwiZmlsZSI6IndpbGRjYXJkU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgV2lsZGNhcmRTeW1ib2xOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS93aWxkY2FyZFN5bWJvbCcpLFxuICAgICAgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jbGFzcyBXaWxkY2FyZFN5bWJvbFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnLicsXG4gICAgICAgICAgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gJ3dpbGRjYXJkU3ltYm9sJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gV2lsZGNhcmRTeW1ib2xOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZFN5bWJvbFByb2R1Y3Rpb247XG4iXX0=