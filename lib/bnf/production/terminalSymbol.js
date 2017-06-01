'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypeRule = require('../rule/significantTokenType');

var TerminalSymbolProduction = function (_Production) {
  _inherits(TerminalSymbolProduction, _Production);

  function TerminalSymbolProduction() {
    _classCallCheck(this, TerminalSymbolProduction);

    var stringSignificantTokenType = 'string',
        stringSignificantTokenTypeRule = new SignificantTokenTypeRule(stringSignificantTokenType),
        name = 'terminalSymbol',
        rules = [stringSignificantTokenTypeRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (TerminalSymbolProduction.__proto__ || Object.getPrototypeOf(TerminalSymbolProduction)).call(this, name, rules, Node));
  }

  return TerminalSymbolProduction;
}(Production);

module.exports = TerminalSymbolProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsInN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlIiwic3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwibmFtZSIsInJ1bGVzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLDJCQUEyQkYsUUFBUSw4QkFBUixDQUZqQzs7SUFJTUcsd0I7OztBQUNKLHNDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNkJBQTZCLFFBQW5DO0FBQUEsUUFDTUMsaUNBQWlDLElBQUlILHdCQUFKLENBQTZCRSwwQkFBN0IsQ0FEdkM7QUFBQSxRQUVNRSxPQUFPLGdCQUZiO0FBQUEsUUFHTUMsUUFBUSxDQUNORiw4QkFETSxDQUhkO0FBQUEsUUFNTUcsT0FBT1AsZUFOYjs7QUFEWSwrSUFTTkssSUFUTSxFQVNBQyxLQVRBLEVBU09DLElBVFA7QUFVYjs7O0VBWG9DVCxVOztBQWN2Q1UsT0FBT0MsT0FBUCxHQUFpQlAsd0JBQWpCIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlID0gJ3N0cmluZycsXG4gICAgICAgICAgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZShzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9ICd0ZXJtaW5hbFN5bWJvbCcsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbjtcbiJdfQ==