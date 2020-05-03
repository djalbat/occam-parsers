"use strict";

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));

var _array = require("../../utilities/array");

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

var TerminalSymbolNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(TerminalSymbolNode, _NonTerminalNode);

  function TerminalSymbolNode() {
    _classCallCheck(this, TerminalSymbolNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolNode).apply(this, arguments));
  }

  _createClass(TerminalSymbolNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var content = this.getContent(),
          terminalSymbolPart = new _terminalSymbol["default"](content);
      return terminalSymbolPart;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var childNodes = this.getChildNodes(),
          firstChildNode = (0, _array.first)(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(TerminalSymbolNode.regularExpression),
          secondMatch = (0, _array.second)(matches),
          content = secondMatch.replace(/\\"/g, ""); ///

      return content;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(TerminalSymbolNode, ruleName, childNodes);
    }
  }]);

  return TerminalSymbolNode;
}(_nonTerminal["default"]);

module.exports = TerminalSymbolNode;
TerminalSymbolNode.regularExpression = /^"((?:\\.|[^"])*)"$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sTm9kZSIsImxvb2tBaGVhZCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsInNlY29uZE1hdGNoIiwicmVwbGFjZSIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGtCOzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsa0JBQWtCLEdBQUcsSUFBSUMsMEJBQUosQ0FBdUJILE9BQXZCLENBRDNCO0FBR0EsYUFBT0Usa0JBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUUsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxjQUFjLEdBQUcsa0JBQU1GLFVBQU4sQ0FEdkI7QUFBQSxVQUVNRyxZQUFZLEdBQUdELGNBRnJCO0FBQUEsVUFFc0M7QUFDaENFLE1BQUFBLG1CQUFtQixHQUFHRCxZQUFZLENBQUNOLFVBQWIsRUFINUI7QUFBQSxVQUlNUSxPQUFPLEdBQUdELG1CQUFtQixDQUFDRSxLQUFwQixDQUEwQlosa0JBQWtCLENBQUNhLGlCQUE3QyxDQUpoQjtBQUFBLFVBS01DLFdBQVcsR0FBRyxtQkFBT0gsT0FBUCxDQUxwQjtBQUFBLFVBTU1ULE9BQU8sR0FBR1ksV0FBVyxDQUFDQyxPQUFaLENBQW9CLE1BQXBCLEVBQTJCLEVBQTNCLENBTmhCLENBRFcsQ0FPcUM7O0FBRWhELGFBQU9iLE9BQVA7QUFDRDs7OzhDQUVnQ2MsUSxFQUFVVixVLEVBQVk7QUFBRSxhQUFPVyx3QkFBZ0JDLHlCQUFoQixDQUEwQ2xCLGtCQUExQyxFQUE4RGdCLFFBQTlELEVBQXdFVixVQUF4RSxDQUFQO0FBQTZGOzs7O0VBcEJ2SFcsdUI7O0FBdUJqQ0UsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsa0JBQWpCO0FBRUFBLGtCQUFrQixDQUFDYSxpQkFBbkIsR0FBdUMscUJBQXZDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50KTtcblxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbFBhcnQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2goVGVybWluYWxTeW1ib2xOb2RlLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gc2Vjb25kTWF0Y2gucmVwbGFjZSgvXFxcXFwiL2csXCJcIik7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoVGVybWluYWxTeW1ib2xOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbE5vZGU7XG5cblRlcm1pbmFsU3ltYm9sTm9kZS5yZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIoKD86XFxcXC58W15cIl0pKilcIiQvO1xuIl19