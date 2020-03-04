'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    QuantifierRuleDefinition = require('../definition/quantifierRule');

var specialSymbols = lexers.specialSymbols,
    asterisk = specialSymbols.asterisk,
    ZeroOrMoreQuantifierRuleName = ruleNames.ZeroOrMoreQuantifierRuleName;

var ZeroOrMoreQuantifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(ZeroOrMoreQuantifierRule, _Rule);

  function ZeroOrMoreQuantifierRule() {
    _classCallCheck(this, ZeroOrMoreQuantifierRule);

    var name = ZeroOrMoreQuantifierRuleName,
        zeroOrMoreQuantifierTerminalSymbolContent = asterisk,
        ///
    zeroOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(zeroOrMoreQuantifierTerminalSymbolContent),
        definitions = [zeroOrMoreQuantifierRuleDefinition],
        Node = DefinitionNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(ZeroOrMoreQuantifierRule).call(this, name, definitions, Node));
  }

  return ZeroOrMoreQuantifierRule;
}(Rule);

module.exports = ZeroOrMoreQuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplcm9Pck1vcmVRdWFudGlmaWVyLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbk5vZGUiLCJRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJzcGVjaWFsU3ltYm9scyIsImFzdGVyaXNrIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIm5hbWUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01FLFNBQVMsR0FBR0YsT0FBTyxDQUFDLGNBQUQsQ0FEekI7QUFBQSxJQUVNRyxjQUFjLEdBQUdILE9BQU8sQ0FBQyxvQkFBRCxDQUY5QjtBQUFBLElBR01JLHdCQUF3QixHQUFHSixPQUFPLENBQUMsOEJBQUQsQ0FIeEM7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZUQsY0FEZixDQUNFQyxRQURGO0FBQUEsSUFFRUMsNEJBRkYsR0FFbUNMLFNBRm5DLENBRUVLLDRCQUZGOztJQUlBQyx3Qjs7O0FBQ0osc0NBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdGLDRCQUFiO0FBQUEsUUFDTUcseUNBQXlDLEdBQUdKLFFBRGxEO0FBQUEsUUFDNEQ7QUFDdERLLElBQUFBLGtDQUFrQyxHQUFHLElBQUlQLHdCQUFKLENBQTZCTSx5Q0FBN0IsQ0FGM0M7QUFBQSxRQUdNRSxXQUFXLEdBQUcsQ0FDWkQsa0NBRFksQ0FIcEI7QUFBQSxRQU1NRSxJQUFJLEdBQUdWLGNBTmI7QUFEWSxpR0FTTk0sSUFUTSxFQVNBRyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWG9DWixJOztBQWN2Q2EsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCx3QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbicpLFxuICAgICAgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBhc3RlcmlzaywgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24oemVyb09yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlO1xuIl19