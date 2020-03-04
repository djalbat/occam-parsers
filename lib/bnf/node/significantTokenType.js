'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypePart = require('../part/terminal/significantTokenType');

var first = arrayUtilities.first,
    second = arrayUtilities.second;

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
          significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);
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
      return NonTerminalNode.fromRuleNameAndChildNodes(SignificantTokenTypeNode, ruleName, childNodes);
    }
  }]);

  return SignificantTokenTypeNode;
}(NonTerminalNode);

module.exports = SignificantTokenTypeNode;
SignificantTokenTypeNode.regularExpression = /^\[([^\]]+)\]$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImZpcnN0Iiwic2Vjb25kIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlIiwibG9va0FoZWFkIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRTaWduaWZpY2FudFRva2VuVHlwZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInJlZ3VsYXJFeHByZXNzaW9uIiwic2Vjb25kTWF0Y2giLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQyx1QkFBRCxDQUE5QjtBQUFBLElBQ01DLGVBQWUsR0FBR0QsT0FBTyxDQUFDLCtCQUFELENBRC9CO0FBQUEsSUFFTUUsd0JBQXdCLEdBQUdGLE9BQU8sQ0FBQyx1Q0FBRCxDQUZ4Qzs7SUFJUUcsSyxHQUFrQkosYyxDQUFsQkksSztJQUFPQyxNLEdBQVdMLGMsQ0FBWEssTTs7SUFFVEMsd0I7Ozs7Ozs7Ozs7O2lDQUNTQyxTLEVBQVc7QUFDdEIsVUFBTUMsb0JBQW9CLEdBQUcsS0FBS0MsdUJBQUwsRUFBN0I7QUFBQSxVQUNNQyx3QkFBd0IsR0FBRyxJQUFJUCx3QkFBSixDQUE2Qkssb0JBQTdCLENBRGpDO0FBR0EsYUFBT0Usd0JBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGNBQWMsR0FBR1QsS0FBSyxDQUFDTyxVQUFELENBRDVCO0FBQUEsVUFFTUcsWUFBWSxHQUFHRCxjQUZyQjtBQUFBLFVBRXNDO0FBQ2hDRSxNQUFBQSxtQkFBbUIsR0FBR0QsWUFBWSxDQUFDRSxVQUFiLEVBSDVCO0FBQUEsVUFJTUMsT0FBTyxHQUFHRixtQkFBbUIsQ0FBQ0csS0FBcEIsQ0FBMEJaLHdCQUF3QixDQUFDYSxpQkFBbkQsQ0FKaEI7QUFBQSxVQUtNQyxXQUFXLEdBQUdmLE1BQU0sQ0FBQ1ksT0FBRCxDQUwxQjtBQUFBLFVBTU1ULG9CQUFvQixHQUFHWSxXQU43QixDQUR3QixDQU9rQjs7QUFFMUMsYUFBT1osb0JBQVA7QUFDRDs7OzhDQUVnQ2EsUSxFQUFVVixVLEVBQVk7QUFBRSxhQUFPVCxlQUFlLENBQUNvQix5QkFBaEIsQ0FBMENoQix3QkFBMUMsRUFBb0VlLFFBQXBFLEVBQThFVixVQUE5RSxDQUFQO0FBQW1HOzs7O0VBcEJ2SFQsZTs7QUF1QnZDcUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsd0JBQWpCO0FBRUFBLHdCQUF3QixDQUFDYSxpQkFBekIsR0FBNkMsZ0JBQTdDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5nZXRTaWduaWZpY2FudFRva2VuVHlwZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoc2lnbmlmaWNhbnRUb2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2goU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhTaWduaWZpY2FudFRva2VuVHlwZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZTtcblxuU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXFsoW15cXF1dKylcXF0kLztcbiJdfQ==