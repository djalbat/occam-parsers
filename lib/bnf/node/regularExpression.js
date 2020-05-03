"use strict";

var _array = _interopRequireDefault(require("../../utilities/array"));

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _regularExpression = _interopRequireDefault(require("../part/terminal/regularExpression"));

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

var RegularExpressionNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RegularExpressionNode, _NonTerminalNode);

  function RegularExpressionNode() {
    _classCallCheck(this, RegularExpressionNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionNode).apply(this, arguments));
  }

  _createClass(RegularExpressionNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var regularExpression = this.getRegularExpression(),
          regularExpressionPart = new _regularExpression["default"](regularExpression);
      return regularExpressionPart;
    }
  }, {
    key: "getRegularExpression",
    value: function getRegularExpression() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(RegularExpressionNode.regularExpression),
          secondMatch = second(matches),
          pattern = secondMatch,
          ///
      regularExpression = new RegExp(pattern); ///

      return regularExpression;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(RegularExpressionNode, ruleName, childNodes);
    }
  }]);

  return RegularExpressionNode;
}(_nonTerminal["default"]);

module.exports = RegularExpressionNode;
RegularExpressionNode.regularExpression = /^\/((?:\\.|[^\/])*)\/$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJSZWd1bGFyRXhwcmVzc2lvbk5vZGUiLCJsb29rQWhlYWQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFJlZ3VsYXJFeHByZXNzaW9uIiwicmVndWxhckV4cHJlc3Npb25QYXJ0IiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJwYXR0ZXJuIiwiUmVnRXhwIiwicnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFrQkMsaUIsQ0FBbEJELEs7SUFBT0UsTSxHQUFXRCxpQixDQUFYQyxNOztJQUVUQyxxQjs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxpQkFBaUIsR0FBRyxLQUFLQyxvQkFBTCxFQUExQjtBQUFBLFVBQ01DLHFCQUFxQixHQUFHLElBQUlDLDZCQUFKLENBQTBCSCxpQkFBMUIsQ0FEOUI7QUFHQSxhQUFPRSxxQkFBUDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQU1FLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsY0FBYyxHQUFHWCxLQUFLLENBQUNTLFVBQUQsQ0FENUI7QUFBQSxVQUVNRyxZQUFZLEdBQUdELGNBRnJCO0FBQUEsVUFFc0M7QUFDaENFLE1BQUFBLG1CQUFtQixHQUFHRCxZQUFZLENBQUNFLFVBQWIsRUFINUI7QUFBQSxVQUlNQyxPQUFPLEdBQUdGLG1CQUFtQixDQUFDRyxLQUFwQixDQUEwQmIscUJBQXFCLENBQUNFLGlCQUFoRCxDQUpoQjtBQUFBLFVBS01ZLFdBQVcsR0FBR2YsTUFBTSxDQUFDYSxPQUFELENBTDFCO0FBQUEsVUFNTUcsT0FBTyxHQUFHRCxXQU5oQjtBQUFBLFVBTTZCO0FBQ3ZCWixNQUFBQSxpQkFBaUIsR0FBRyxJQUFJYyxNQUFKLENBQVdELE9BQVgsQ0FQMUIsQ0FEcUIsQ0FRMkI7O0FBRWhELGFBQU9iLGlCQUFQO0FBQ0Q7Ozs4Q0FFZ0NlLFEsRUFBVVgsVSxFQUFZO0FBQUUsYUFBT1ksd0JBQWdCQyx5QkFBaEIsQ0FBMENuQixxQkFBMUMsRUFBaUVpQixRQUFqRSxFQUEyRVgsVUFBM0UsQ0FBUDtBQUFnRzs7OztFQXJCdkhZLHVCOztBQXdCcENFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLHFCQUFqQjtBQUVBQSxxQkFBcUIsQ0FBQ0UsaUJBQXRCLEdBQTBDLHdCQUExQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYXJyYXlVdGlsaXRpZXMgZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvcmVndWxhckV4cHJlc3Npb25cIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gdGhpcy5nZXRSZWd1bGFyRXhwcmVzc2lvbigpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiAgfVxuXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2goUmVndWxhckV4cHJlc3Npb25Ob2RlLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJlZ3VsYXJFeHByZXNzaW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25Ob2RlO1xuXG5SZWd1bGFyRXhwcmVzc2lvbk5vZGUucmVndWxhckV4cHJlc3Npb24gPSAvXlxcLygoPzpcXFxcLnxbXlxcL10pKilcXC8kLztcbiJdfQ==