"use strict";

var _array = _interopRequireDefault(require("../../utilities/array"));

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _significantTokenType = _interopRequireDefault(require("../part/terminal/significantTokenType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var first = _array["default"].first,
    second = _array["default"].second;

var SignificantTokenTypeNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(SignificantTokenTypeNode, _NonTerminalNode);

  function SignificantTokenTypeNode() {
    _classCallCheck(this, SignificantTokenTypeNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypeNode).apply(this, arguments));
  }

  _createClass(SignificantTokenTypeNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var significantTokenType = this.getSignificantTokenType(),
          significantTokenTypePart = new _significantTokenType["default"](significantTokenType);
      return significantTokenTypePart;
    }
  }, {
    key: "getSignificantTokenType",
    value: function getSignificantTokenType() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(SignificantTokenTypeNode.regularExpression),
          secondMatch = second(matches),
          significantTokenType = secondMatch; ///

      return significantTokenType;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(SignificantTokenTypeNode, ruleName, childNodes);
    }
  }]);

  return SignificantTokenTypeNode;
}(_nonTerminal["default"]);

module.exports = SignificantTokenTypeNode;
SignificantTokenTypeNode.regularExpression = /^\[([^\]]+)\]$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJTaWduaWZpY2FudFRva2VuVHlwZU5vZGUiLCJsb29rQWhlYWQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwicmVndWxhckV4cHJlc3Npb24iLCJzZWNvbmRNYXRjaCIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEssR0FBa0JDLGlCLENBQWxCRCxLO0lBQU9FLE0sR0FBV0QsaUIsQ0FBWEMsTTs7SUFFVEMsd0I7Ozs7Ozs7Ozs7O2lDQUNTQyxTLEVBQVc7QUFDdEIsVUFBTUMsb0JBQW9CLEdBQUcsS0FBS0MsdUJBQUwsRUFBN0I7QUFBQSxVQUNNQyx3QkFBd0IsR0FBRyxJQUFJQyxnQ0FBSixDQUE2Qkgsb0JBQTdCLENBRGpDO0FBR0EsYUFBT0Usd0JBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNRSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGNBQWMsR0FBR1gsS0FBSyxDQUFDUyxVQUFELENBRDVCO0FBQUEsVUFFTUcsWUFBWSxHQUFHRCxjQUZyQjtBQUFBLFVBRXNDO0FBQ2hDRSxNQUFBQSxtQkFBbUIsR0FBR0QsWUFBWSxDQUFDRSxVQUFiLEVBSDVCO0FBQUEsVUFJTUMsT0FBTyxHQUFHRixtQkFBbUIsQ0FBQ0csS0FBcEIsQ0FBMEJiLHdCQUF3QixDQUFDYyxpQkFBbkQsQ0FKaEI7QUFBQSxVQUtNQyxXQUFXLEdBQUdoQixNQUFNLENBQUNhLE9BQUQsQ0FMMUI7QUFBQSxVQU1NVixvQkFBb0IsR0FBR2EsV0FON0IsQ0FEd0IsQ0FPa0I7O0FBRTFDLGFBQU9iLG9CQUFQO0FBQ0Q7Ozs4Q0FFZ0NjLFEsRUFBVVYsVSxFQUFZO0FBQUUsYUFBT1csd0JBQWdCQyx5QkFBaEIsQ0FBMENsQix3QkFBMUMsRUFBb0VnQixRQUFwRSxFQUE4RVYsVUFBOUUsQ0FBUDtBQUFtRzs7OztFQXBCdkhXLHVCOztBQXVCdkNFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBCLHdCQUFqQjtBQUVBQSx3QkFBd0IsQ0FBQ2MsaUJBQXpCLEdBQTZDLGdCQUE3QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYXJyYXlVdGlsaXRpZXMgZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5nZXRTaWduaWZpY2FudFRva2VuVHlwZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoc2lnbmlmaWNhbnRUb2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2goU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhTaWduaWZpY2FudFRva2VuVHlwZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZTtcblxuU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXFsoW15cXF1dKylcXF0kLztcbiJdfQ==