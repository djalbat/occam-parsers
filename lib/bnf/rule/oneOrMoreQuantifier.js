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
    plus = specialSymbols.plus,
    OneOrMoreQuantifierRuleName = ruleNames.OneOrMoreQuantifierRuleName;

var OneOrMoreQuantifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(OneOrMoreQuantifierRule, _Rule);

  function OneOrMoreQuantifierRule() {
    _classCallCheck(this, OneOrMoreQuantifierRule);

    var name = OneOrMoreQuantifierRuleName,
        oneOrMoreQuantifierTerminalSymbolContent = plus,
        ///
    oneOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(oneOrMoreQuantifierTerminalSymbolContent),
        definitions = [oneOrMoreQuantifierRuleDefinition],
        Node = DefinitionNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(OneOrMoreQuantifierRule).call(this, name, definitions, Node));
  }

  return OneOrMoreQuantifierRule;
}(Rule);

module.exports = OneOrMoreQuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVF1YW50aWZpZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uTm9kZSIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsInNwZWNpYWxTeW1ib2xzIiwicGx1cyIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwibmFtZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01FLFNBQVMsR0FBR0YsT0FBTyxDQUFDLGNBQUQsQ0FEekI7QUFBQSxJQUVNRyxjQUFjLEdBQUdILE9BQU8sQ0FBQyxvQkFBRCxDQUY5QjtBQUFBLElBR01JLHdCQUF3QixHQUFHSixPQUFPLENBQUMsOEJBQUQsQ0FIeEM7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLElBREYsR0FDV0QsY0FEWCxDQUNFQyxJQURGO0FBQUEsSUFFRUMsMkJBRkYsR0FFa0NMLFNBRmxDLENBRUVLLDJCQUZGOztJQUlBQyx1Qjs7O0FBQ0oscUNBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdGLDJCQUFiO0FBQUEsUUFDTUcsd0NBQXdDLEdBQUdKLElBRGpEO0FBQUEsUUFDdUQ7QUFDakRLLElBQUFBLGlDQUFpQyxHQUFHLElBQUlQLHdCQUFKLENBQTZCTSx3Q0FBN0IsQ0FGMUM7QUFBQSxRQUdNRSxXQUFXLEdBQUcsQ0FDWkQsaUNBRFksQ0FIcEI7QUFBQSxRQU1NRSxJQUFJLEdBQUdWLGNBTmI7QUFEWSxnR0FTTk0sSUFUTSxFQVNBRyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWG1DWixJOztBQWN0Q2EsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCx1QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBEZWZpbml0aW9uTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbicpLFxuICAgICAgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gcGx1cywgLy8vXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbihvbmVPck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUXVhbnRpZmllclJ1bGU7XG4iXX0=