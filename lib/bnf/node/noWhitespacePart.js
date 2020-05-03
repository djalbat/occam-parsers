"use strict";

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _noWhitespace = _interopRequireDefault(require("../part/terminal/noWhitespace"));

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

var NoWhitespacePartNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(NoWhitespacePartNode, _NonTerminalNode);

  function NoWhitespacePartNode() {
    _classCallCheck(this, NoWhitespacePartNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartNode).apply(this, arguments));
  }

  _createClass(NoWhitespacePartNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var noWhitespacePart = new _noWhitespace["default"]();
      return noWhitespacePart;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(NoWhitespacePartNode, ruleName, childNodes);
    }
  }]);

  return NoWhitespacePartNode;
}(_nonTerminal["default"]);

module.exports = NoWhitespacePartNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsiTm9XaGl0ZXNwYWNlUGFydE5vZGUiLCJsb29rQWhlYWQiLCJub1doaXRlc3BhY2VQYXJ0IiwiTm9XaGl0ZXNwYWNlUGFydCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxvQjs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxnQkFBZ0IsR0FBRyxJQUFJQyx3QkFBSixFQUF6QjtBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7Ozs4Q0FFZ0NFLFEsRUFBVUMsVSxFQUFZO0FBQUUsYUFBT0Msd0JBQWdCQyx5QkFBaEIsQ0FBMENQLG9CQUExQyxFQUFnRUksUUFBaEUsRUFBMEVDLFVBQTFFLENBQVA7QUFBK0Y7Ozs7RUFQdkhDLHVCOztBQVVuQ0UsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxvQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0ID0gbmV3IE5vV2hpdGVzcGFjZVBhcnQoKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKE5vV2hpdGVzcGFjZVBhcnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQYXJ0Tm9kZTtcbiJdfQ==