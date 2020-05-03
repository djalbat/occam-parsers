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
    SignificantTokenTypeNode = require("../node/significantTokenType"),
    SignificantTokenTypeDefinition = require("../definition/significantTokenType");

var types = lexers.types,
    typeType = types.typeType,
    SignificantTokenTypeRuleName = ruleNames.SignificantTokenTypeRuleName;

var SignificantTokenTypeRule = /*#__PURE__*/function (_Rule) {
  _inherits(SignificantTokenTypeRule, _Rule);

  function SignificantTokenTypeRule() {
    _classCallCheck(this, SignificantTokenTypeRule);

    var typeSignificantTokenType = typeType,
        ///
    typeSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(typeSignificantTokenType),
        name = SignificantTokenTypeRuleName,
        definitions = [typeSignificantTokenTypeDefinition],
        Node = SignificantTokenTypeNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypeRule).call(this, name, definitions, Node));
  }

  return SignificantTokenTypeRule;
}(Rule);

module.exports = SignificantTokenTypeRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwidHlwZXMiLCJ0eXBlVHlwZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJ0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJ0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUR6QjtBQUFBLElBRU1HLHdCQUF3QixHQUFHSCxPQUFPLENBQUMsOEJBQUQsQ0FGeEM7QUFBQSxJQUdNSSw4QkFBOEIsR0FBR0osT0FBTyxDQUFDLG9DQUFELENBSDlDOztBQUtNLElBQUVLLEtBQUYsR0FBWU4sTUFBWixDQUFFTSxLQUFGO0FBQUEsSUFDRUMsUUFERixHQUNlRCxLQURmLENBQ0VDLFFBREY7QUFBQSxJQUVFQyw0QkFGRixHQUVtQ0wsU0FGbkMsQ0FFRUssNEJBRkY7O0lBSUFDLHdCOzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLFFBQU1DLHdCQUF3QixHQUFHSCxRQUFqQztBQUFBLFFBQTRDO0FBQ3RDSSxJQUFBQSxrQ0FBa0MsR0FBRyxJQUFJTiw4QkFBSixDQUFtQ0ssd0JBQW5DLENBRDNDO0FBQUEsUUFFTUUsSUFBSSxHQUFHSiw0QkFGYjtBQUFBLFFBR01LLFdBQVcsR0FBRyxDQUNaRixrQ0FEWSxDQUhwQjtBQUFBLFFBTU1HLElBQUksR0FBR1Ysd0JBTmI7QUFEWSxpR0FTTlEsSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWG9DWixJOztBQWN2Q2EsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCx3QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZShcIm9jY2FtLWxleGVyc1wiKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoXCIuLi9ydWxlXCIpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZShcIi4uL3J1bGVOYW1lc1wiKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZSA9IHJlcXVpcmUoXCIuLi9ub2RlL3NpZ25pZmljYW50VG9rZW5UeXBlXCIpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vc2lnbmlmaWNhbnRUb2tlblR5cGVcIik7XG5cbmNvbnN0IHsgdHlwZXMgfSA9IGxleGVycyxcbiAgICAgIHsgdHlwZVR5cGUgfSA9IHR5cGVzLFxuICAgICAgeyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0eXBlVHlwZSwgIC8vL1xuICAgICAgICAgIHR5cGVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHR5cGVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlO1xuIl19