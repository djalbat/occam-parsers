'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RegularExpressionProductionNameRule = require('../rule/regularExpressionProductionName'),
    ProductionNameProductionNameRule = require('../rule/productionNameProductionName'),
    TerminalSymbolProductionNameRule = require('../rule/terminalSymbolProductionName'),
    TerminalSymbolRule = require('../rule/terminalSymbol'),
    WildcardPartRule = require('../rule/part/wildcard'),
    EndOfLinePartRule = require('../rule/part/endOfLine'),
    OptionalPartPartRule = require('../rule/part/optionalPart'),
    OneOrMorePartsPartRule = require('../rule/part/oneOrMoreParts'),
    ZeroOrMorePartsPartRule = require('../rule/part/zeroOrMoreParts'),
    SignificantTokenTypePartRule = require('../rule/part/significantTokenType'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartProduction = function (_Production) {
  _inherits(PartProduction, _Production);

  function PartProduction() {
    _classCallCheck(this, PartProduction);

    var regularExpressionProductionNameRule = new RegularExpressionProductionNameRule(),
        productionNameProductionNameRule = new ProductionNameProductionNameRule(),
        terminalSymbolProductionNameRule = new TerminalSymbolProductionNameRule(),
        terminalSymbolRule = new TerminalSymbolRule(),
        wildcardPartRule = new WildcardPartRule(),
        endOfLinePartRule = new EndOfLinePartRule(),
        optionalPartPartRule = new OptionalPartPartRule(),
        oneOrMorePartsPartRule = new OneOrMorePartsPartRule(),
        zeroOrMorePartsPartRule = new ZeroOrMorePartsPartRule(),
        significantTokenTypePartRule = new SignificantTokenTypePartRule(),
        name = 'part',
        rules = [regularExpressionProductionNameRule, productionNameProductionNameRule, terminalSymbolProductionNameRule /*,
                                                                                                                         wildcardPartRule,
                                                                                                                         endOfLinePartRule,
                                                                                                                         optionalPartPartRule,
                                                                                                                         oneOrMorePartsPartRule,
                                                                                                                         zeroOrMorePartsPartRule,
                                                                                                                         significantTokenTypePartRule*/
    ],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (PartProduction.__proto__ || Object.getPrototypeOf(PartProduction)).call(this, name, rules, Node));
  }

  return PartProduction;
}(Production);

module.exports = PartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUiLCJQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWVSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiV2lsZGNhcmRQYXJ0UnVsZSIsIkVuZE9mTGluZVBhcnRSdWxlIiwiT3B0aW9uYWxQYXJ0UGFydFJ1bGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRSdWxlIiwiWmVyb09yTW9yZVBhcnRzUGFydFJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnRSdWxlIiwiTm9uVGVybWluYWxOb2RlIiwiUGFydFByb2R1Y3Rpb24iLCJyZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVJ1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJ3aWxkY2FyZFBhcnRSdWxlIiwiZW5kT2ZMaW5lUGFydFJ1bGUiLCJvcHRpb25hbFBhcnRQYXJ0UnVsZSIsIm9uZU9yTW9yZVBhcnRzUGFydFJ1bGUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJ1bGUiLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsc0NBQXNDRCxRQUFRLHlDQUFSLENBRDVDO0FBQUEsSUFFTUUsbUNBQW1DRixRQUFRLHNDQUFSLENBRnpDO0FBQUEsSUFHTUcsbUNBQW1DSCxRQUFRLHNDQUFSLENBSHpDO0FBQUEsSUFJTUkscUJBQXFCSixRQUFRLHdCQUFSLENBSjNCO0FBQUEsSUFLTUssbUJBQW1CTCxRQUFRLHVCQUFSLENBTHpCO0FBQUEsSUFNTU0sb0JBQW9CTixRQUFRLHdCQUFSLENBTjFCO0FBQUEsSUFPTU8sdUJBQXVCUCxRQUFRLDJCQUFSLENBUDdCO0FBQUEsSUFRTVEseUJBQXlCUixRQUFRLDZCQUFSLENBUi9CO0FBQUEsSUFTTVMsMEJBQTBCVCxRQUFRLDhCQUFSLENBVGhDO0FBQUEsSUFVTVUsK0JBQStCVixRQUFRLG1DQUFSLENBVnJDO0FBQUEsSUFXTVcsa0JBQWtCWCxRQUFRLCtCQUFSLENBWHhCOztJQWFNWSxjOzs7QUFDSiw0QkFBYztBQUFBOztBQUNaLFFBQU1DLHNDQUFzQyxJQUFJWixtQ0FBSixFQUE1QztBQUFBLFFBQ01hLG1DQUFtQyxJQUFJWixnQ0FBSixFQUR6QztBQUFBLFFBRU1hLG1DQUFtQyxJQUFJWixnQ0FBSixFQUZ6QztBQUFBLFFBR01hLHFCQUFxQixJQUFJWixrQkFBSixFQUgzQjtBQUFBLFFBSU1hLG1CQUFtQixJQUFJWixnQkFBSixFQUp6QjtBQUFBLFFBS01hLG9CQUFvQixJQUFJWixpQkFBSixFQUwxQjtBQUFBLFFBTU1hLHVCQUF1QixJQUFJWixvQkFBSixFQU43QjtBQUFBLFFBT01hLHlCQUF5QixJQUFJWixzQkFBSixFQVAvQjtBQUFBLFFBUU1hLDBCQUEwQixJQUFJWix1QkFBSixFQVJoQztBQUFBLFFBU01hLCtCQUErQixJQUFJWiw0QkFBSixFQVRyQztBQUFBLFFBVU1hLE9BQU8sTUFWYjtBQUFBLFFBV01DLFFBQVEsQ0FDTlgsbUNBRE0sRUFFTkMsZ0NBRk0sRUFHTkMsZ0NBSE0sQ0FHMEI7Ozs7Ozs7QUFIMUIsS0FYZDtBQUFBLFFBc0JNVSxPQUFPZCxlQXRCYjs7QUFEWSwySEF5Qk5ZLElBekJNLEVBeUJBQyxLQXpCQSxFQXlCT0MsSUF6QlA7QUEwQmI7OztFQTNCMEIxQixVOztBQThCN0IyQixPQUFPQyxPQUFQLEdBQWlCZixjQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgV2lsZGNhcmRQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC93aWxkY2FyZCcpLFxuICAgICAgRW5kT2ZMaW5lUGFydFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3BhcnQvZW5kT2ZMaW5lJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3BhcnQvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0L3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUGFydFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWVSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUGFydFJ1bGUgPSBuZXcgV2lsZGNhcmRQYXJ0UnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVBhcnRSdWxlID0gbmV3IEVuZE9mTGluZVBhcnRSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UGFydFJ1bGUgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydFJ1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnRSdWxlID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydFJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncGFydCcsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVJ1bGUvKixcbiAgICAgICAgICAgIHdpbGRjYXJkUGFydFJ1bGUsXG4gICAgICAgICAgICBlbmRPZkxpbmVQYXJ0UnVsZSxcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnRSdWxlLFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0UnVsZSxcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnRSdWxlLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UnVsZSovXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFByb2R1Y3Rpb247XG4iXX0=