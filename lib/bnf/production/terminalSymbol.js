'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var TerminalSymbolProduction = function (_Production) {
  _inherits(TerminalSymbolProduction, _Production);

  function TerminalSymbolProduction() {
    _classCallCheck(this, TerminalSymbolProduction);

    var stringSignificantTokenType = 'string',
        stringSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringSignificantTokenType),
        name = 'terminalSymbol',
        definitions = [stringSignificantTokenTypeDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (TerminalSymbolProduction.__proto__ || Object.getPrototypeOf(TerminalSymbolProduction)).call(this, name, definitions, Node));
  }

  return TerminalSymbolProduction;
}(Production);

module.exports = TerminalSymbolProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsInN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlIiwic3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLGlDQUFpQ0YsUUFBUSxvQ0FBUixDQUZ2Qzs7SUFJTUcsd0I7OztBQUNKLHNDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNkJBQTZCLFFBQW5DO0FBQUEsUUFDTUMsdUNBQXVDLElBQUlILDhCQUFKLENBQW1DRSwwQkFBbkMsQ0FEN0M7QUFBQSxRQUVNRSxPQUFPLGdCQUZiO0FBQUEsUUFHTUMsY0FBYyxDQUNaRixvQ0FEWSxDQUhwQjtBQUFBLFFBTU1HLE9BQU9QLGVBTmI7O0FBRFksK0lBU05LLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVhvQ1QsVTs7QUFjdkNVLE9BQU9DLE9BQVAsR0FBaUJQLHdCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSA9ICdzdHJpbmcnLFxuICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24oc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAndGVybWluYWxTeW1ib2wnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb247XG4iXX0=