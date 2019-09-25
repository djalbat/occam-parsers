'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    QuantifierRuleDefinition = require('../definition/quantifierRule');

var specialSymbols = lexers.specialSymbols,
    ZeroOrMoreQuantifierRuleName = ruleNames.ZeroOrMoreQuantifierRuleName,
    asterisk = specialSymbols.asterisk;

var ZeroOrMoreQuantifierRule = function (_Rule) {
      _inherits(ZeroOrMoreQuantifierRule, _Rule);

      function ZeroOrMoreQuantifierRule() {
            _classCallCheck(this, ZeroOrMoreQuantifierRule);

            var name = ZeroOrMoreQuantifierRuleName,
                zeroOrMoreQuantifierTerminalSymbolContent = asterisk,
                ///
            zeroOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(zeroOrMoreQuantifierTerminalSymbolContent),
                definitions = [zeroOrMoreQuantifierRuleDefinition],
                Node = DefinitionNode;

            return _possibleConstructorReturn(this, (ZeroOrMoreQuantifierRule.__proto__ || Object.getPrototypeOf(ZeroOrMoreQuantifierRule)).call(this, name, definitions, Node));
      }

      return ZeroOrMoreQuantifierRule;
}(Rule);

module.exports = ZeroOrMoreQuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb25Ob2RlIiwiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwic3BlY2lhbFN5bWJvbHMiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiYXN0ZXJpc2siLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJuYW1lIiwiemVyb09yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNSSwyQkFBMkJKLFFBQVEsOEJBQVIsQ0FIakM7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLDRCQURGLEdBQ21DSixTQURuQyxDQUNFSSw0QkFERjtBQUFBLElBRUVDLFFBRkYsR0FFZUYsY0FGZixDQUVFRSxRQUZGOztJQUlBQyx3Qjs7O0FBQ0osMENBQWM7QUFBQTs7QUFDWixnQkFBTUMsT0FBT0gsNEJBQWI7QUFBQSxnQkFDTUksNENBQTRDSCxRQURsRDtBQUFBLGdCQUM0RDtBQUN0REksaURBQXFDLElBQUlQLHdCQUFKLENBQTZCTSx5Q0FBN0IsQ0FGM0M7QUFBQSxnQkFHTUUsY0FBYyxDQUNaRCxrQ0FEWSxDQUhwQjtBQUFBLGdCQU1NRSxPQUFPVixjQU5iOztBQURZLHVKQVNOTSxJQVRNLEVBU0FHLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYb0NaLEk7O0FBY3ZDYSxPQUFPQyxPQUFQLEdBQWlCUCx3QkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVF1YW50aWZpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbicpLFxuICAgICAgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcyxcbiAgICAgIHsgYXN0ZXJpc2sgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBhc3RlcmlzaywgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24oemVyb09yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlO1xuIl19