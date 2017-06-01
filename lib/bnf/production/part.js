'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RegularExpressionProductionNameRule = require('../rule/regularExpressionProductionName'),
    ProductionNameProductionNameRule = require('../rule/productionNameProductionName'),
    TerminalSymbolProductionNameRule = require('../rule/terminalSymbolProductionName'),
    NoWhitespaceProductionNameRule = require('../rule/noWhitespaceProductionName'),
    EndOfLineProductionNameRule = require('../rule/endOfLineProductionName'),
    OptionalPartPartRule = require('../rule/part/optionalPart'),
    OneOrMorePartsPartRule = require('../rule/part/oneOrMoreParts'),
    ZeroOrMorePartsPartRule = require('../rule/part/zeroOrMoreParts'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartProduction = function (_Production) {
  _inherits(PartProduction, _Production);

  function PartProduction() {
    _classCallCheck(this, PartProduction);

    var regularExpressionProductionNameRule = new RegularExpressionProductionNameRule(),
        productionNameProductionNameRule = new ProductionNameProductionNameRule(),
        terminalSymbolProductionNameRule = new TerminalSymbolProductionNameRule(),
        noWhitespaceProductionNameRule = new NoWhitespaceProductionNameRule(),
        endOfLineProductionNameRule = new EndOfLineProductionNameRule(),
        optionalPartPartRule = new OptionalPartPartRule(),
        oneOrMorePartsPartRule = new OneOrMorePartsPartRule(),
        zeroOrMorePartsPartRule = new ZeroOrMorePartsPartRule(),
        name = 'part',
        rules = [regularExpressionProductionNameRule, productionNameProductionNameRule, terminalSymbolProductionNameRule, noWhitespaceProductionNameRule, endOfLineProductionNameRule /*,
                                                                                                                                                                                      optionalPartPartRule,
                                                                                                                                                                                      oneOrMorePartsPartRule,
                                                                                                                                                                                      zeroOrMorePartsPartRule*/
    ],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (PartProduction.__proto__ || Object.getPrototypeOf(PartProduction)).call(this, name, rules, Node));
  }

  return PartProduction;
}(Production);

module.exports = PartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUiLCJQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSIsIlRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWVSdWxlIiwiTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWVSdWxlIiwiRW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVSdWxlIiwiT3B0aW9uYWxQYXJ0UGFydFJ1bGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRSdWxlIiwiWmVyb09yTW9yZVBhcnRzUGFydFJ1bGUiLCJOb25UZXJtaW5hbE5vZGUiLCJQYXJ0UHJvZHVjdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWVSdWxlIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVJ1bGUiLCJ0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lUnVsZSIsIm5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUnVsZSIsImVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUnVsZSIsIm9wdGlvbmFsUGFydFBhcnRSdWxlIiwib25lT3JNb3JlUGFydHNQYXJ0UnVsZSIsInplcm9Pck1vcmVQYXJ0c1BhcnRSdWxlIiwibmFtZSIsInJ1bGVzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHNDQUFzQ0QsUUFBUSx5Q0FBUixDQUQ1QztBQUFBLElBRU1FLG1DQUFtQ0YsUUFBUSxzQ0FBUixDQUZ6QztBQUFBLElBR01HLG1DQUFtQ0gsUUFBUSxzQ0FBUixDQUh6QztBQUFBLElBSU1JLGlDQUFpQ0osUUFBUSxvQ0FBUixDQUp2QztBQUFBLElBS01LLDhCQUE4QkwsUUFBUSxpQ0FBUixDQUxwQztBQUFBLElBTU1NLHVCQUF1Qk4sUUFBUSwyQkFBUixDQU43QjtBQUFBLElBT01PLHlCQUF5QlAsUUFBUSw2QkFBUixDQVAvQjtBQUFBLElBUU1RLDBCQUEwQlIsUUFBUSw4QkFBUixDQVJoQztBQUFBLElBU01TLGtCQUFrQlQsUUFBUSwrQkFBUixDQVR4Qjs7SUFXTVUsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxzQ0FBc0MsSUFBSVYsbUNBQUosRUFBNUM7QUFBQSxRQUNNVyxtQ0FBbUMsSUFBSVYsZ0NBQUosRUFEekM7QUFBQSxRQUVNVyxtQ0FBbUMsSUFBSVYsZ0NBQUosRUFGekM7QUFBQSxRQUdNVyxpQ0FBaUMsSUFBSVYsOEJBQUosRUFIdkM7QUFBQSxRQUlNVyw4QkFBOEIsSUFBSVYsMkJBQUosRUFKcEM7QUFBQSxRQUtNVyx1QkFBdUIsSUFBSVYsb0JBQUosRUFMN0I7QUFBQSxRQU1NVyx5QkFBeUIsSUFBSVYsc0JBQUosRUFOL0I7QUFBQSxRQU9NVywwQkFBMEIsSUFBSVYsdUJBQUosRUFQaEM7QUFBQSxRQVFNVyxPQUFPLE1BUmI7QUFBQSxRQVNNQyxRQUFRLENBQ05ULG1DQURNLEVBRU5DLGdDQUZNLEVBR05DLGdDQUhNLEVBSU5DLDhCQUpNLEVBS05DLDJCQUxNLENBS3FCOzs7O0FBTHJCLEtBVGQ7QUFBQSxRQW1CTU0sT0FBT1osZUFuQmI7O0FBRFksMkhBc0JOVSxJQXRCTSxFQXNCQUMsS0F0QkEsRUFzQk9DLElBdEJQO0FBdUJiOzs7RUF4QjBCdEIsVTs7QUEyQjdCdUIsT0FBT0MsT0FBUCxHQUFpQmIsY0FBakIiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIEVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3BhcnQvemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQYXJ0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVJ1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWVSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IEVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnRSdWxlID0gbmV3IE9wdGlvbmFsUGFydFBhcnRSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0UnVsZSA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnRSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydFJ1bGUgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydFJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUsXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVSdWxlLyosXG4gICAgICAgICAgICBvcHRpb25hbFBhcnRQYXJ0UnVsZSxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydFJ1bGUsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0UnVsZSovXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFByb2R1Y3Rpb247XG4iXX0=