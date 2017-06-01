'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RegularExpressionProductionNameRule = require('../rule/regularExpressionProductionName'),
    ProductionNameProductionNameRule = require('../rule/productionNameProductionName'),
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
        terminalSymbolRule = new TerminalSymbolRule(),
        wildcardPartRule = new WildcardPartRule(),
        endOfLinePartRule = new EndOfLinePartRule(),
        optionalPartPartRule = new OptionalPartPartRule(),
        oneOrMorePartsPartRule = new OneOrMorePartsPartRule(),
        zeroOrMorePartsPartRule = new ZeroOrMorePartsPartRule(),
        significantTokenTypePartRule = new SignificantTokenTypePartRule(),
        name = 'part',
        rules = [regularExpressionProductionNameRule, productionNameProductionNameRule, terminalSymbolRule /*,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUiLCJQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIldpbGRjYXJkUGFydFJ1bGUiLCJFbmRPZkxpbmVQYXJ0UnVsZSIsIk9wdGlvbmFsUGFydFBhcnRSdWxlIiwiT25lT3JNb3JlUGFydHNQYXJ0UnVsZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UnVsZSIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnRQcm9kdWN0aW9uIiwicmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUiLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIndpbGRjYXJkUGFydFJ1bGUiLCJlbmRPZkxpbmVQYXJ0UnVsZSIsIm9wdGlvbmFsUGFydFBhcnRSdWxlIiwib25lT3JNb3JlUGFydHNQYXJ0UnVsZSIsInplcm9Pck1vcmVQYXJ0c1BhcnRSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UnVsZSIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxzQ0FBc0NELFFBQVEseUNBQVIsQ0FENUM7QUFBQSxJQUVNRSxtQ0FBbUNGLFFBQVEsc0NBQVIsQ0FGekM7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FIM0I7QUFBQSxJQUlNSSxtQkFBbUJKLFFBQVEsdUJBQVIsQ0FKekI7QUFBQSxJQUtNSyxvQkFBb0JMLFFBQVEsd0JBQVIsQ0FMMUI7QUFBQSxJQU1NTSx1QkFBdUJOLFFBQVEsMkJBQVIsQ0FON0I7QUFBQSxJQU9NTyx5QkFBeUJQLFFBQVEsNkJBQVIsQ0FQL0I7QUFBQSxJQVFNUSwwQkFBMEJSLFFBQVEsOEJBQVIsQ0FSaEM7QUFBQSxJQVNNUywrQkFBK0JULFFBQVEsbUNBQVIsQ0FUckM7QUFBQSxJQVVNVSxrQkFBa0JWLFFBQVEsK0JBQVIsQ0FWeEI7O0lBWU1XLGM7OztBQUNKLDRCQUFjO0FBQUE7O0FBQ1osUUFBTUMsc0NBQXNDLElBQUlYLG1DQUFKLEVBQTVDO0FBQUEsUUFDTVksbUNBQW1DLElBQUlYLGdDQUFKLEVBRHpDO0FBQUEsUUFFTVkscUJBQXFCLElBQUlYLGtCQUFKLEVBRjNCO0FBQUEsUUFHTVksbUJBQW1CLElBQUlYLGdCQUFKLEVBSHpCO0FBQUEsUUFJTVksb0JBQW9CLElBQUlYLGlCQUFKLEVBSjFCO0FBQUEsUUFLTVksdUJBQXVCLElBQUlYLG9CQUFKLEVBTDdCO0FBQUEsUUFNTVkseUJBQXlCLElBQUlYLHNCQUFKLEVBTi9CO0FBQUEsUUFPTVksMEJBQTBCLElBQUlYLHVCQUFKLEVBUGhDO0FBQUEsUUFRTVksK0JBQStCLElBQUlYLDRCQUFKLEVBUnJDO0FBQUEsUUFTTVksT0FBTyxNQVRiO0FBQUEsUUFVTUMsUUFBUSxDQUNOVixtQ0FETSxFQUVOQyxnQ0FGTSxFQUdOQyxrQkFITSxDQUdZOzs7Ozs7O0FBSFosS0FWZDtBQUFBLFFBcUJNUyxPQUFPYixlQXJCYjs7QUFEWSwySEF3Qk5XLElBeEJNLEVBd0JBQyxLQXhCQSxFQXdCT0MsSUF4QlA7QUF5QmI7OztFQTFCMEJ4QixVOztBQTZCN0J5QixPQUFPQyxPQUFQLEdBQWlCZCxjQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBXaWxkY2FyZFBhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0L3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC9lbmRPZkxpbmUnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3BhcnQvemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQYXJ0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUGFydFJ1bGUgPSBuZXcgV2lsZGNhcmRQYXJ0UnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVBhcnRSdWxlID0gbmV3IEVuZE9mTGluZVBhcnRSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UGFydFJ1bGUgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydFJ1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnRSdWxlID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydFJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncGFydCcsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlLyosXG4gICAgICAgICAgICB3aWxkY2FyZFBhcnRSdWxlLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUGFydFJ1bGUsXG4gICAgICAgICAgICBvcHRpb25hbFBhcnRQYXJ0UnVsZSxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydFJ1bGUsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSxcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJ1bGUqL1xuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRQcm9kdWN0aW9uO1xuIl19