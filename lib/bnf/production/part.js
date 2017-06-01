'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RegularExpressionRule = require('../rule/regularExpression'),
    ProductionNameProductionNameRule = require('../rule/productionNameProductionName'),
    WildcardPartRule = require('../rule/part/wildcard'),
    EndOfLinePartRule = require('../rule/part/endOfLine'),
    OptionalPartPartRule = require('../rule/part/optionalPart'),
    TerminalSymbolPartRule = require('../rule/part/terminalSymbol'),
    OneOrMorePartsPartRule = require('../rule/part/oneOrMoreParts'),
    ZeroOrMorePartsPartRule = require('../rule/part/zeroOrMoreParts'),
    SignificantTokenTypePartRule = require('../rule/part/significantTokenType'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartProduction = function (_Production) {
  _inherits(PartProduction, _Production);

  function PartProduction() {
    _classCallCheck(this, PartProduction);

    var regularExpressionRule = new RegularExpressionRule(),
        productionNameProductionNameRule = new ProductionNameProductionNameRule(),
        wildcardPartRule = new WildcardPartRule(),
        endOfLinePartRule = new EndOfLinePartRule(),
        optionalPartPartRule = new OptionalPartPartRule(),
        terminalSymbolPartRule = new TerminalSymbolPartRule(),
        oneOrMorePartsPartRule = new OneOrMorePartsPartRule(),
        zeroOrMorePartsPartRule = new ZeroOrMorePartsPartRule(),
        significantTokenTypePartRule = new SignificantTokenTypePartRule(),
        name = 'part',
        rules = [regularExpressionRule, productionNameProductionNameRule /*,
                                                                         wildcardPartRule,
                                                                         endOfLinePartRule,
                                                                         optionalPartPartRule,
                                                                         terminalSymbolPartRule,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVJ1bGUiLCJXaWxkY2FyZFBhcnRSdWxlIiwiRW5kT2ZMaW5lUGFydFJ1bGUiLCJPcHRpb25hbFBhcnRQYXJ0UnVsZSIsIlRlcm1pbmFsU3ltYm9sUGFydFJ1bGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRSdWxlIiwiWmVyb09yTW9yZVBhcnRzUGFydFJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnRSdWxlIiwiTm9uVGVybWluYWxOb2RlIiwiUGFydFByb2R1Y3Rpb24iLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSIsIndpbGRjYXJkUGFydFJ1bGUiLCJlbmRPZkxpbmVQYXJ0UnVsZSIsIm9wdGlvbmFsUGFydFBhcnRSdWxlIiwidGVybWluYWxTeW1ib2xQYXJ0UnVsZSIsIm9uZU9yTW9yZVBhcnRzUGFydFJ1bGUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJ1bGUiLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLDJCQUFSLENBRDlCO0FBQUEsSUFFTUUsbUNBQW1DRixRQUFRLHNDQUFSLENBRnpDO0FBQUEsSUFHTUcsbUJBQW1CSCxRQUFRLHVCQUFSLENBSHpCO0FBQUEsSUFJTUksb0JBQW9CSixRQUFRLHdCQUFSLENBSjFCO0FBQUEsSUFLTUssdUJBQXVCTCxRQUFRLDJCQUFSLENBTDdCO0FBQUEsSUFNTU0seUJBQXlCTixRQUFRLDZCQUFSLENBTi9CO0FBQUEsSUFPTU8seUJBQXlCUCxRQUFRLDZCQUFSLENBUC9CO0FBQUEsSUFRTVEsMEJBQTBCUixRQUFRLDhCQUFSLENBUmhDO0FBQUEsSUFTTVMsK0JBQStCVCxRQUFRLG1DQUFSLENBVHJDO0FBQUEsSUFVTVUsa0JBQWtCVixRQUFRLCtCQUFSLENBVnhCOztJQVlNVyxjOzs7QUFDSiw0QkFBYztBQUFBOztBQUNaLFFBQU1DLHdCQUF3QixJQUFJWCxxQkFBSixFQUE5QjtBQUFBLFFBQ01ZLG1DQUFtQyxJQUFJWCxnQ0FBSixFQUR6QztBQUFBLFFBRU1ZLG1CQUFtQixJQUFJWCxnQkFBSixFQUZ6QjtBQUFBLFFBR01ZLG9CQUFvQixJQUFJWCxpQkFBSixFQUgxQjtBQUFBLFFBSU1ZLHVCQUF1QixJQUFJWCxvQkFBSixFQUo3QjtBQUFBLFFBS01ZLHlCQUF5QixJQUFJWCxzQkFBSixFQUwvQjtBQUFBLFFBTU1ZLHlCQUF5QixJQUFJWCxzQkFBSixFQU4vQjtBQUFBLFFBT01ZLDBCQUEwQixJQUFJWCx1QkFBSixFQVBoQztBQUFBLFFBUU1ZLCtCQUErQixJQUFJWCw0QkFBSixFQVJyQztBQUFBLFFBU01ZLE9BQU8sTUFUYjtBQUFBLFFBVU1DLFFBQVEsQ0FDTlYscUJBRE0sRUFFTkMsZ0NBRk0sQ0FFMEI7Ozs7Ozs7O0FBRjFCLEtBVmQ7QUFBQSxRQXFCTVUsT0FBT2IsZUFyQmI7O0FBRFksMkhBd0JOVyxJQXhCTSxFQXdCQUMsS0F4QkEsRUF3Qk9DLElBeEJQO0FBeUJiOzs7RUExQjBCeEIsVTs7QUE2QjdCeUIsT0FBT0MsT0FBUCxHQUFpQmQsY0FBakIiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lJyksXG4gICAgICBXaWxkY2FyZFBhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0L3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC9lbmRPZkxpbmUnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3BhcnQvemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQYXJ0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFBhcnRSdWxlID0gbmV3IFdpbGRjYXJkUGFydFJ1bGUoKSxcbiAgICAgICAgICBlbmRPZkxpbmVQYXJ0UnVsZSA9IG5ldyBFbmRPZkxpbmVQYXJ0UnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnRSdWxlID0gbmV3IE9wdGlvbmFsUGFydFBhcnRSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0UnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnRSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0UnVsZSA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnRSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydFJ1bGUgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydFJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnRSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVJ1bGUvKixcbiAgICAgICAgICAgIHdpbGRjYXJkUGFydFJ1bGUsXG4gICAgICAgICAgICBlbmRPZkxpbmVQYXJ0UnVsZSxcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnRSdWxlLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0UnVsZSxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydFJ1bGUsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSxcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJ1bGUqL1xuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRQcm9kdWN0aW9uO1xuIl19