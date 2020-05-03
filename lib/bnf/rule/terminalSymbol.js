"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var Rule = require("../rule"),
    ruleNames = require("../ruleNames"),
    TerminalSymbolNode = require("../node/terminalSymbol"),
    SignificantTokenTypeDefinition = require("../definition/significantTokenType");

var types = lexers.types,
    stringLiteralType = types.stringLiteralType,
    TerminalSymbolRuleName = ruleNames.TerminalSymbolRuleName;

var TerminalSymbolRule = /*#__PURE__*/function (_Rule) {
  _inherits(TerminalSymbolRule, _Rule);

  function TerminalSymbolRule() {
    _classCallCheck(this, TerminalSymbolRule);

    var stringLiteralSignificantTokenType = stringLiteralType,
        ///
    stringLiteralSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringLiteralSignificantTokenType),
        name = TerminalSymbolRuleName,
        definitions = [stringLiteralSignificantTokenTypeDefinition],
        Node = TerminalSymbolNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolRule).call(this, name, definitions, Node));
  }

  return TerminalSymbolRule;
}(Rule);

module.exports = TerminalSymbolRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiVGVybWluYWxTeW1ib2xOb2RlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwidHlwZXMiLCJzdHJpbmdMaXRlcmFsVHlwZSIsIlRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUR6QjtBQUFBLElBRU1HLGtCQUFrQixHQUFHSCxPQUFPLENBQUMsd0JBQUQsQ0FGbEM7QUFBQSxJQUdNSSw4QkFBOEIsR0FBR0osT0FBTyxDQUFDLG9DQUFELENBSDlDOztBQUtNLElBQUVLLEtBQUYsR0FBWU4sTUFBWixDQUFFTSxLQUFGO0FBQUEsSUFDRUMsaUJBREYsR0FDd0JELEtBRHhCLENBQ0VDLGlCQURGO0FBQUEsSUFFRUMsc0JBRkYsR0FFNkJMLFNBRjdCLENBRUVLLHNCQUZGOztJQUlBQyxrQjs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFDWixRQUFNQyxpQ0FBaUMsR0FBR0gsaUJBQTFDO0FBQUEsUUFBOEQ7QUFDeERJLElBQUFBLDJDQUEyQyxHQUFHLElBQUlOLDhCQUFKLENBQW1DSyxpQ0FBbkMsQ0FEcEQ7QUFBQSxRQUVNRSxJQUFJLEdBQUdKLHNCQUZiO0FBQUEsUUFHTUssV0FBVyxHQUFHLENBQ1pGLDJDQURZLENBSHBCO0FBQUEsUUFNTUcsSUFBSSxHQUFHVixrQkFOYjtBQURZLDJGQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYOEJaLEk7O0FBY2pDYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLGtCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKFwib2NjYW0tbGV4ZXJzXCIpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZShcIi4uL3J1bGVcIiksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKFwiLi4vcnVsZU5hbWVzXCIpLFxuICAgICAgVGVybWluYWxTeW1ib2xOb2RlID0gcmVxdWlyZShcIi4uL25vZGUvdGVybWluYWxTeW1ib2xcIiksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZVwiKTtcblxuY29uc3QgeyB0eXBlcyB9ID0gbGV4ZXJzLFxuICAgICAgeyBzdHJpbmdMaXRlcmFsVHlwZSB9ID0gdHlwZXMsXG4gICAgICB7IFRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgVGVybWluYWxTeW1ib2xSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZSA9IHN0cmluZ0xpdGVyYWxUeXBlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24oc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gVGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBUZXJtaW5hbFN5bWJvbE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUnVsZTtcbiJdfQ==