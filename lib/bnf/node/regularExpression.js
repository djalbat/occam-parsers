"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _regularExpression = _interopRequireDefault(require("../part/terminal/regularExpression"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RegularExpressionNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RegularExpressionNode, _NonTerminalNode);

  function RegularExpressionNode() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RegularExpressionNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegularExpressionNode)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\/((?:\\.|[^\/])*)\/$/);

    return _this;
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
          firstChildNode = (0, _array.first)(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(this.regularExpression),
          secondMatch = (0, _array.second)(matches),
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

exports["default"] = RegularExpressionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uTm9kZSIsImxvb2tBaGVhZCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJydWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEscUI7Ozs7Ozs7Ozs7Ozs7Ozs7d0VBQ0Msd0I7Ozs7Ozs7aUNBRVBDLFMsRUFBVztBQUN0QixVQUFNQyxpQkFBaUIsR0FBRyxLQUFLQyxvQkFBTCxFQUExQjtBQUFBLFVBQ01DLHFCQUFxQixHQUFHLElBQUlDLDZCQUFKLENBQTBCSCxpQkFBMUIsQ0FEOUI7QUFHQSxhQUFPRSxxQkFBUDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQU1FLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsY0FBYyxHQUFHLGtCQUFNRixVQUFOLENBRHZCO0FBQUEsVUFFTUcsWUFBWSxHQUFHRCxjQUZyQjtBQUFBLFVBRXNDO0FBQ2hDRSxNQUFBQSxtQkFBbUIsR0FBR0QsWUFBWSxDQUFDRSxVQUFiLEVBSDVCO0FBQUEsVUFJTUMsT0FBTyxHQUFHRixtQkFBbUIsQ0FBQ0csS0FBcEIsQ0FBMEIsS0FBS1gsaUJBQS9CLENBSmhCO0FBQUEsVUFLTVksV0FBVyxHQUFHLG1CQUFPRixPQUFQLENBTHBCO0FBQUEsVUFNTUcsT0FBTyxHQUFHRCxXQU5oQjtBQUFBLFVBTTZCO0FBQ3ZCWixNQUFBQSxpQkFBaUIsR0FBRyxJQUFJYyxNQUFKLENBQVdELE9BQVgsQ0FQMUIsQ0FEcUIsQ0FRMkI7O0FBRWhELGFBQU9iLGlCQUFQO0FBQ0Q7Ozs4Q0FFZ0NlLFEsRUFBVVgsVSxFQUFZO0FBQUUsYUFBT1ksd0JBQWdCQyx5QkFBaEIsQ0FBMENuQixxQkFBMUMsRUFBaUVpQixRQUFqRSxFQUEyRVgsVUFBM0UsQ0FBUDtBQUFnRzs7OztFQXZCeEdZLHVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25QYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC8oKD86XFxcXC58W15cXC9dKSopXFwvJC87XG5cbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gdGhpcy5nZXRSZWd1bGFyRXhwcmVzc2lvbigpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiAgfVxuXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgcGF0dGVybiA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAocGF0dGVybik7ICAvLy9cblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSZWd1bGFyRXhwcmVzc2lvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG4iXX0=