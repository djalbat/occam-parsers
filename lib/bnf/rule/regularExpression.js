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
    RegularExpressionNode = require("../node/regularExpression"),
    SignificantTokenTypeDefinition = require("../definition/significantTokenType");

var types = lexers.types,
    regularExpressionType = types.regularExpressionType,
    RegularExpressionRuleName = ruleNames.RegularExpressionRuleName;

var RegularExpressionRule = /*#__PURE__*/function (_Rule) {
  _inherits(RegularExpressionRule, _Rule);

  function RegularExpressionRule() {
    _classCallCheck(this, RegularExpressionRule);

    var regularExpressionSignificantTokenType = regularExpressionType,
        ///
    regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
        name = RegularExpressionRuleName,
        definitions = [regularExpressionSignificantTokenTypeDefinition],
        Node = RegularExpressionNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionRule).call(this, name, definitions, Node));
  }

  return RegularExpressionRule;
}(Rule);

module.exports = RegularExpressionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiUmVndWxhckV4cHJlc3Npb25Ob2RlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwidHlwZXMiLCJyZWd1bGFyRXhwcmVzc2lvblR5cGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwicmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUR6QjtBQUFBLElBRU1HLHFCQUFxQixHQUFHSCxPQUFPLENBQUMsMkJBQUQsQ0FGckM7QUFBQSxJQUdNSSw4QkFBOEIsR0FBR0osT0FBTyxDQUFDLG9DQUFELENBSDlDOztBQUtNLElBQUVLLEtBQUYsR0FBWU4sTUFBWixDQUFFTSxLQUFGO0FBQUEsSUFDRUMscUJBREYsR0FDNEJELEtBRDVCLENBQ0VDLHFCQURGO0FBQUEsSUFFRUMseUJBRkYsR0FFZ0NMLFNBRmhDLENBRUVLLHlCQUZGOztJQUlBQyxxQjs7O0FBQ0osbUNBQWM7QUFBQTs7QUFDWixRQUFNQyxxQ0FBcUMsR0FBR0gscUJBQTlDO0FBQUEsUUFBc0U7QUFDaEVJLElBQUFBLCtDQUErQyxHQUFHLElBQUlOLDhCQUFKLENBQW1DSyxxQ0FBbkMsQ0FEeEQ7QUFBQSxRQUVNRSxJQUFJLEdBQUdKLHlCQUZiO0FBQUEsUUFHTUssV0FBVyxHQUFHLENBQ1pGLCtDQURZLENBSHBCO0FBQUEsUUFNTUcsSUFBSSxHQUFHVixxQkFOYjtBQURZLDhGQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYaUNaLEk7O0FBY3BDYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLHFCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKFwib2NjYW0tbGV4ZXJzXCIpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZShcIi4uL3J1bGVcIiksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKFwiLi4vcnVsZU5hbWVzXCIpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ob2RlID0gcmVxdWlyZShcIi4uL25vZGUvcmVndWxhckV4cHJlc3Npb25cIiksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZVwiKTtcblxuY29uc3QgeyB0eXBlcyB9ID0gbGV4ZXJzLFxuICAgICAgeyByZWd1bGFyRXhwcmVzc2lvblR5cGUgfSA9IHR5cGVzLFxuICAgICAgeyBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlID0gcmVndWxhckV4cHJlc3Npb25UeXBlLCAgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGU7XG4iXX0=