'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolNode = require('../node/terminalSymbol'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var TerminalSymbolRule = function (_Rule) {
  _inherits(TerminalSymbolRule, _Rule);

  function TerminalSymbolRule() {
    _classCallCheck(this, TerminalSymbolRule);

    var stringSignificantTokenType = 'string',
        stringSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringSignificantTokenType),
        name = 'terminalSymbol',
        definitions = [stringSignificantTokenTypeDefinition],
        Node = TerminalSymbolNode;

    return _possibleConstructorReturn(this, (TerminalSymbolRule.__proto__ || Object.getPrototypeOf(TerminalSymbolRule)).call(this, name, definitions, Node));
  }

  return TerminalSymbolRule;
}(Rule);

module.exports = TerminalSymbolRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xOb2RlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xSdWxlIiwic3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxpQ0FBaUNGLFFBQVEsb0NBQVIsQ0FGdkM7O0lBSU1HLGtCOzs7QUFDSixnQ0FBYztBQUFBOztBQUNaLFFBQU1DLDZCQUE2QixRQUFuQztBQUFBLFFBQ01DLHVDQUF1QyxJQUFJSCw4QkFBSixDQUFtQ0UsMEJBQW5DLENBRDdDO0FBQUEsUUFFTUUsT0FBTyxnQkFGYjtBQUFBLFFBR01DLGNBQWMsQ0FDWkYsb0NBRFksQ0FIcEI7QUFBQSxRQU1NRyxPQUFPUCxrQkFOYjs7QUFEWSxtSUFTTkssSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWDhCVCxJOztBQWNqQ1UsT0FBT0MsT0FBUCxHQUFpQlAsa0JBQWpCIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAnc3RyaW5nJyxcbiAgICAgICAgICBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gJ3Rlcm1pbmFsU3ltYm9sJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsU3ltYm9sTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xSdWxlO1xuIl19